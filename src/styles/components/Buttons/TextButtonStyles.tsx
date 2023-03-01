import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    text: {
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        padding: 15,    
        borderRadius : 17,
        fontSize: 13,
        fontWeight: '700',
        textAlign : 'center',
    },
    container: {
        display : "flex",
        flexDirection : "row",
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
});