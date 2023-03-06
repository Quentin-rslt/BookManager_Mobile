import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
        width: '100%',
    },
    cardContainerWithDelete: {
        backgroundColor: COLORS.componentBackground,
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height:55,
        borderRadius : 20,
        marginBottom: 15,
        paddingHorizontal: 30,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    cardContainerWithoutDelete: {
        backgroundColor: COLORS.componentBackground,
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height:55,
        borderRadius : 20,
        marginBottom: 15,
        paddingHorizontal: 30,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    deleteContainer: {
        position: 'absolute',
        right: 0,
        top: 15,
    },
    text: {
        color: COLORS.foreground,
    }
});