import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container : {
        position: 'absolute',
        top:23,
        alignItems : "center",
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        width : "100%",
        height : 40,
        paddingLeft : 15,
        paddingRight : 15,
    },
    textInput : {
        justifyContent: 'center',
        backgroundColor : COLORS.backgroundLight,
        height: "100%",
        width : "90%",
        borderRadius : 20,
        paddingLeft : 10,
        paddingRight : 10,
        fontWeight : "700",
        color : COLORS.foreground,
    }
});