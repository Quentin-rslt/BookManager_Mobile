import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    modalContainer: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: '83%',
        width: "100%",
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingBottom: 100,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    bookContainer: {
        height: '100%',
        margin: 20,
        backgroundColor: COLORS.backgroundLight,
        borderRadius: 25,
    },
    returnButton : {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        top: -40,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 20,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        height: 45,
        width: "48%",
        justifyContent: 'center',
        borderRadius : 17,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: COLORS.foreground,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    author: {
        fontSize: 16,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'center', 
        marginTop: 15,     
        marginBottom: 20,
    },
    text: {
        paddingHorizontal: 20,
        fontSize: 14,
        fontWeight: '800',
        color: COLORS.foreground,
        textAlign: 'left',
        marginTop: 5,
        marginBottom: 20,
    },
    textNumber: {
        fontSize: 30,
        fontWeight: '800',
        color: COLORS.foreground,
        textAlign: 'left',
    },
    statsContainer: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
    },
    textHolder: {
        paddingHorizontal: 20,
        fontSize: 13,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginRight: 20,
    },
    tagsContainer: {
        marginTop: 5,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    readingsContainer: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 20,
    },
});