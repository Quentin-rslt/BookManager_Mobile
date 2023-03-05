import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        paddingHorizontal: 10, 
    },
    spinner: {
        backgroundColor: COLORS.componentBackground,
        padding: 2,
        borderRadius: 20,
    },
    holderText: {
        color: COLORS.foregroundHolder,
        textAlign: 'center',
        marginBottom: 5,
    },
    textButton: {
        color: COLORS.clickableColor,
    }
});