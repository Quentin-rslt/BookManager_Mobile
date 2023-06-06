import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container : {
        width: "48%",
        aspectRatio: 1,
        overflow:'hidden',
        backgroundColor: COLORS.componentBackground,
        borderRadius : 20,
        marginBottom: 12,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    containerButton : {
        width: "100%",
        aspectRatio: 1,
        overflow:'hidden',
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
