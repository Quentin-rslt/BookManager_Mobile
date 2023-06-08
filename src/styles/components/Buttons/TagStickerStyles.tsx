import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        marginRight : 5,
    },
    textTag: {
        color: COLORS.background,
        paddingHorizontal: 8,
        paddingVertical: 5,    
        borderRadius : 15,
        fontSize: 12,
        fontWeight: '700',
        textAlign : 'center',
    }
});
