import { StyleSheet } from "react-native";
import { COLORS } from "../../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.componentBackground,
        display : "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 110,
        borderRadius : 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        shadowColor: COLORS.Black,
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
    textTitleBook: {
        color: COLORS.foreground,
        fontSize: 20,
        width: '100%',
        marginTop: 15,
    }
});