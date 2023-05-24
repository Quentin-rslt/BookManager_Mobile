import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom :5,
        elevation: 0,
        borderTopWidth: 0,
        borderRadius: 15,
        backgroundColor: COLORS.transparent,
        borderTopColor: COLORS.transparent,
    },
});