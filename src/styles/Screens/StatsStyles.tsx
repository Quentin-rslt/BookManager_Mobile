import { StyleSheet } from "react-native";
import { COLORS } from "../../library/CommonColors";

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '10%',
        marginTop: '30%',
        padding: 20,
        borderRadius: 25,
        backgroundColor: COLORS.componentBackground,
    },
    homeButton: {
        backgroundColor: COLORS.clickableColor,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        top: 5,
        left: 20,
        paddingHorizontal: 20,
        height: 50,
        borderRadius : 40,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
});