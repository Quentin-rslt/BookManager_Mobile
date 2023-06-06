import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        marginRight : 5,
    },
    textTag: {
        color: COLORS.background,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 3,
        paddingTop: 3,    
        borderRadius : 12,
        fontSize: 12,
        fontWeight: '700',
        textAlign : 'center',
    }
});
