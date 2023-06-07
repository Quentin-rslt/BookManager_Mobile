import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        borderTopWidth: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginHorizontal: 5,
        backgroundColor: COLORS.backgroundLight,
        elevation: 15,
    },
});