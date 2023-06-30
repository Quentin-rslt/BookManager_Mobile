import { StyleSheet } from "react-native";
import { COLORS } from "../../library/CommonColors";

export default StyleSheet.create({
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop : 30,
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    textHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: COLORS.foreground,
        fontSize: 25,
        fontWeight: '800',
        textAlign: 'left',
        marginLeft: 5,
    },
    buttonHeader: {
        marginRight: 5,
    },
    bottomContainer : {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    searchContainer: {
        display: 'flex', 
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 22.5,
    },
    textInput : {
        justifyContent: 'center',
        backgroundColor : COLORS.componentBackground,
        height: 40,
        width : "100%",
        borderRadius : 5,
        paddingHorizontal: 15,
        fontWeight : "700",
        color : COLORS.foreground,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
        marginBottom: 20,
    },
    searchButton: {
        paddingLeft: 15,
        marginBottom: 15,
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
        backgroundColor: COLORS.accentColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        width: 110,
        borderRadius: 20,
        padding: 5,
        marginTop: 30,
    },

});