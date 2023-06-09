import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 55,
        borderTopWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.backgroundLight,
        elevation: 15,
    },
});