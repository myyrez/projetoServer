import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        width: 300,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#313131",
        borderRadius: 20,
        minHeight: 100,
        marginBottom: 10,
        marginTop: 15,
    },
    text: {
        color: "#f0f0f0",
        fontSize: 20,
    },
    buttonView: {
        position: "absolute",
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        height: "100%",
        // backgroundColor: "blue",
        borderRadius: 20,
    },
    buttonDelete: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#525252",
        padding: 5,
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 10,
    },
    descricao: {
        maxWidth: "80%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        paddingLeft: 10,
        // backgroundColor: "yellow",
    },
});
export default style;