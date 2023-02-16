import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom:0,
        left:0,
        alignItems : "center",
        justifyContent: 'space-between',
        paddingRight:85,
        paddingLeft:85,
        paddingTop:5,
        paddingBottom:8,
        display : "flex",
        flexDirection : "row",
        width : "100%",
        backgroundColor : COLORS.background,
    },
});