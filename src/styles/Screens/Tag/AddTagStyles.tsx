import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: "15%",
    },
    colorContainer: {
        width: "100%",
        justifyContent: 'center',
        backgroundColor: COLORS.componentBackground,
        padding: 15,
        marginBottom: 100,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    colorTag: {
        width: 20, 
        aspectRatio: 1.05, 
        borderRadius: 10,
    },
    textColorTag: {
        width: "100%",
        textAlign: 'center',
        marginTop: 15,
        color: COLORS.foreground
    },
    resultColorContainer: {
        display: 'flex', 
        flexDirection: 'row',
    },
    textHolder: {
        fontSize: 13,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginRight: 20,
        marginBottom: 10,
    },
});