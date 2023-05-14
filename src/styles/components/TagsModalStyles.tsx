import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width : "100%",
    },
    container: {
        marginHorizontal: 20,
        backgroundColor: COLORS.componentBackground,
        marginTop: "50%",
        padding: 20,
        borderRadius: 20,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    multiSelectContainer: {
        width: "100%",
        height: 300,
    },
    button: {
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        height: 45,
        width: "100%",
        justifyContent: 'center',
        borderRadius : 17,
    },
});