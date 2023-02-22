import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        marginRight : 5,
    },
    textTag: {
        backgroundColor: COLORS.accentColor,
        color: COLORS.background,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 4,
        paddingTop: 2,    
        borderRadius : 12,
        fontSize: 12,
        fontWeight: '700',
        textAlign : 'center',
    }
});
