import { StyleSheet } from "react-native";
import { COLORS } from "../../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        height: 55,
        marginBottom: 15,
    },
    addReadingContainer: {
        position: 'absolute',
        right: 0,
    },
    datesContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
    },
    addReadingButton: {
        paddingHorizontal: 25,
        height: 55,
        backgroundColor: COLORS.accentColor,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
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
        borderRadius: 20,
        backgroundColor: COLORS.componentBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
});