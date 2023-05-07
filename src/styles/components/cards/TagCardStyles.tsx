import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container : {
        width: "47%",
        aspectRatio: 1,
        overflow:'hidden',
        backgroundColor: COLORS.componentBackground,
        borderRadius : 30,
        marginBottom: 19,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    text : {
        fontSize: 25,
        fontWeight: '800',
        color: COLORS.foreground,
        marginLeft : 15,
        marginRight : 15,
        marginTop: 30, 
    },
    numberBook : {
        position : 'absolute',
        right : 20,
        bottom : 15,
    }
});
