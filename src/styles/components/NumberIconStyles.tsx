import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
    },
    number: {
        color: COLORS.foreground,
        marginRight: 5,
        fontSize: 15,
        fontWeight: '700',
    }
});
