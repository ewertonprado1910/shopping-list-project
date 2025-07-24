import { useState, useEffect } from "react"
import { View, Image, TouchableOpacity, Text, FlatList, Alert } from "react-native"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Filter from "@/components/Filter"
import Item from "@/components/Item"

import { style } from "./styles"
import { FilterStatus } from "@/types/FilterStatus"
import { ItemStorage, itemsStorage } from "@/storage/items"


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

const Home = () => {
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<ItemStorage[]>([])


  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", `${description}Digite, alguma coisa que precise comprar!`)
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }

    await itemsStorage.add(newItem)
    await itemsByStorage()

    setFilter(FilterStatus.PENDING)
    setDescription("")
  }

  async function itemsByStorage() {
    try {
      const response = await itemsStorage.getByStatus(filter)
      setItems(response)

    } catch (error) {
      console.log(error)
      Alert.alert("Error", "Erro ao carregar os items")
    }
  }

  async function handleRemove(id: string) {
    try {
      await itemsStorage.remove(id)
      await itemsByStorage()

    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não possível deletar o item!")
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Tem certeza que deseja limpar a lista?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onClear() }
    ])
  }

  async function onClear() {
    try {
      await itemsStorage.clear()
      setItems([])
    } catch (error) {
      Alert.alert("Error", "Não foi possível limpar a lista!")
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await itemsStorage.toggleStatus(id)
      await itemsByStorage()
    } catch (error) {
      Alert.alert("Erro", "Erro ao atualizar o status")
    }
  }

  useEffect(() => {
    itemsByStorage()
  }, [filter])

  return (
    <View style={style.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={style.logo} />

      <View style={style.form}>
        <Input placeholder="O que você precisa comprar"
          onChangeText={setDescription}
          value={description}
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>

      <View style={style.content}>
        <View style={style.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isAcitive={status === filter}
              onPress={() => setFilter(status)}
            />))}

          <TouchableOpacity
            style={style.clearButton}
            onPress={handleClear}
          >
            <Text style={style.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleRemove(item.id)}
              onStatus={() => handleToggleItemStatus(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={style.separator} />}
          contentContainerStyle={style.listContent}
          ListEmptyComponent={() => <Text style={style.empty}>Nenhum item na lista!</Text>}
        />
      </View>
    </View>
  )
}

export default Home