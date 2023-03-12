import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    spinner: {
        backgroundColor: COLORS.componentBackground,
        padding: 2,
        borderRadius: 20,
    },
    holderText: {
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginLeft: 15,
        width: "35%",
    },
    textButton: {
        color: COLORS.clickableColor,
    }
});