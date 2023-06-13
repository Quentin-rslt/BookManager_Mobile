import { StyleSheet } from "react-native";
import { COLORS } from "../../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: COLORS.componentBackground,
        borderRadius : 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
        paddingHorizontal: 10,
    },
    titleStyle: {
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '800',
        overflow: 'hidden',
        marginTop: 10,
    },
    authorStyle: {
        color: COLORS.foreground,
        fontSize: 12,
        fontWeight: '500',
    },
});
