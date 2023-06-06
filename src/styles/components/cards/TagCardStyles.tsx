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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 'auto'
    },
    colorTag: {
        width: 20, 
        aspectRatio: 1.05, 
        borderRadius: 10,
    },
});
