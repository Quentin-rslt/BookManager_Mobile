import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        height: 55,
        marginHorizontal: 15,
        bottom :10,
        elevation: 5,
        borderTopWidth: 0,
        borderRadius: 15,
        backgroundColor: COLORS.componentBackground,
        borderTopColor: COLORS.transparent,
    },
});