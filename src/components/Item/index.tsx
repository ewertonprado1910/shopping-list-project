import { View, Text, TouchableOpacity } from "react-native"
import { Trash2 } from "lucide-react-native"

import StatusIcon from "../StatusIcon"
import { FilterStatus } from "@/types/FilterStatus"

import { style } from "./styles"

type ItemData = {
    status: FilterStatus,
    description: String
}

type Props = {
    data: ItemData,
    onRemove: () => void,
    onStatus: () => void
}

const Item = ({ data, onRemove, onStatus }: Props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={onStatus}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>

            <Text style={style.description}>
                {data.description}
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <Trash2 size={19} color="#828282" />
            </TouchableOpacity>
        </View>
    )
}

export default Item