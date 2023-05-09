import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.componentBackground,
        display : "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 90,
        borderRadius : 20,
        marginBottom: 15,
        paddingHorizontal: 20,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    datesContainer: {
        display : "flex",
        flexDirection : "row",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    textDate: {
        color: COLORS.foreground,
    },
    textDelay: {
        color: COLORS.foreground,
        fontSize: 16,
        width: '100%',
        marginTop: 15,
    }
});