import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: "15%",
    },
    colorContainer: {
        width: "95%",
        justifyContent: 'center',
        backgroundColor: COLORS.componentBackground,
        padding: 15,
        borderRadius: 15,
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