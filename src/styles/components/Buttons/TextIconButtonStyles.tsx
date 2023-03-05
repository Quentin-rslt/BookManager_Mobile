import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 55,
        backgroundColor: COLORS.clickableColor,
        borderRadius: 17,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    text: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: '800',
        textAlign : 'center',
    }
});