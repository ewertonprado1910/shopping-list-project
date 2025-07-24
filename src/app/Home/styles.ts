import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#D0D2D8",
        paddingTop: 65,
    },
    logo: {
        height: 34,
        width: 134
    },
    form: {
        width: "100%",
        paddingHorizontal: 16,
        marginTop: 42
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        paddingTop: 32,
        marginTop: 24
    },
    header: {
        width: "100%",
        flexDirection: "row",
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#e4e6ec",
        paddingBottom: 12
    },
    clearButton: {
        marginLeft: "auto"
    },
    clearText: {
        fontSize: 12,
        color: "#828282",
        fontWeight: 300
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "#EEF0F5",
        marginVertical: 16
    },
    listContent: {
        paddingTop: 25,
        paddingBottom: 65
    },
    empty: {
        fontSize: 15,
        color: "#808080",
        textAlign: "center"
    }

})