import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container : {
        position: 'absolute',
        top:5,
        alignItems : "center",
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        width : "100%",
        height : 50,
        paddingLeft : 15,
        paddingRight : 15,
    },
    textInput : {
        justifyContent: 'center',
        backgroundColor : COLORS.backgroundLight,
        height: "100%",
        width : "90%",
        borderRadius : 20,
        paddingLeft : 20,
        paddingRight : 20,
        fontWeight : "700",
        color : COLORS.foreground,
    },
    returnButtonContainer : {   
        position:'absolute',
        left: 20,
    },
    returnButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: COLORS.clickableColor,
        borderRadius: 17,
    }
});