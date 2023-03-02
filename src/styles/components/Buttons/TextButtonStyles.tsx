import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    text: {
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        padding: 17,    
        borderRadius : 20,
        fontSize: 15,
        fontWeight: '800',
        textAlign : 'center',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    }
});