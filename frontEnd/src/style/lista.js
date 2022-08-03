import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#212121",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        height: "5%",
        backgroundColor: "#313131"
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        height: "15%",
        backgroundColor: "#313131"
    },
    mainText: {
        color: "#fff",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 24,
    },
    text: {

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#525252",
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 50,
    },
    input: {
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        height: 50,
        padding: 5,
        backgroundColor: "#313131",
        borderWidth: 1,
        borderColor: "#313131",
        borderRadius: 10,
        fontSize: 20,
        color: "#f8f8f8",
        paddingLeft: 12,
    },
});
export default style;