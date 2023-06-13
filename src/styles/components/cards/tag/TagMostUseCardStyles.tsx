import { StyleSheet } from "react-native";
import { COLORS } from "../../../../library/CommonColors";

export default StyleSheet.create({
    container : {
        width: 170,
        aspectRatio: 1.7,
        overflow:'hidden',
        borderRadius : 10,
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
        margin: 10,
    },
    numberBook : {
        position: 'absolute',
        bottom : 10,
        right: 10,
    },
    colorTag: {
        width: 20, 
        aspectRatio: 1.05, 
        borderRadius: 10,
    },
});
