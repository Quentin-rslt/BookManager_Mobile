import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom:0,
        left:0,
        alignItems : "center",
        justifyContent: 'space-between',
        paddingRight:"25%",
        paddingLeft:"25%",
        paddingBottom:8,
        display : "flex",
        flexDirection : "row",
        width : "100%",
        backgroundColor : COLORS.background,
    },
});