import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container : {
        width: "100%",
        aspectRatio: 1,
        overflow:'hidden',
        backgroundColor: COLORS.componentBackground,
        borderRadius : 15,
        marginBottom: 15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    containerButton : {
        width: "100%",
        height: "100%"
    },
    text : {
        fontSize: 25,
        fontWeight: '800',
        color: COLORS.foreground,
        margin: 15,
    },
    numberBook : {
        position : 'absolute',
        right : 15,
        bottom : 10,
    }
});
