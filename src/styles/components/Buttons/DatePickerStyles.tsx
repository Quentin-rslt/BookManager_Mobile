import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.componentBackground,
        height: 55,
        marginBottom: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    addReadingContainer: {
        position: 'absolute',
        top: 7.5,
        right: 15,
    },
    datesContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
    },
    addReadingButton: {
        justifyContent: 'center',
        height: 40,
        backgroundColor: COLORS.transparent,
        shadowColor: COLORS.transparent,
        borderRadius: 15,
    },
    dateText: {
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '800',
        top: 7,
    },
    dateContainer: {
        justifyContent: 'center',
        height: 55,
        marginRight: 25,
        paddingHorizontal: 22,
    },
});