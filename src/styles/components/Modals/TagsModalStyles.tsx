import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: '52%',
        width: "100%",
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: -4, height: -4},
        elevation: -10,
    },
    multiSelectContainer: {
        height: '100%',
        margin: 10,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: COLORS.accentColor,
        color: COLORS.background,
        height: 45,
        borderRadius : 40,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
        bottom: 10,
    },
    returnButton : {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        top: -40,
    },
    titleModal: {
        color: COLORS.foreground,
        fontSize: 25,
        width: '100%',
        textAlign: 'center',
        marginTop: 10,
    }
});