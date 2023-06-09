import { StyleSheet } from "react-native";
import { COLORS } from "../../library/CommonColors";

export default StyleSheet.create({
    container : {
        position: 'absolute',
        top: 20,
        alignItems : "center",
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        width : "100%",
        paddingHorizontal: 15,
        height : 50,
    },
    textInput : {
        justifyContent: 'center',
        backgroundColor : COLORS.componentBackground,
        height: "100%",
        width : "100%",
        borderRadius : 10,
        paddingHorizontal: 20,
        fontWeight : "700",
        color : COLORS.foreground,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    returnButtonContainer : {   
        position:'absolute',
        left: 0,
    },
    moreButtonContainer : {   
        position:'absolute',
        right: 20,
    },
    returnButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderRadius: 40,
    },
    textReturn: {
        color: COLORS.foregroundHolder,
    },
    saveButton: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textSaveButton: {
        backgroundColor: COLORS.accentColor,
        color: COLORS.background,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'left',
        paddingVertical: 6,
        paddingHorizontal : 15,
        borderRadius: 20,
        marginLeft: 5,
    },
});