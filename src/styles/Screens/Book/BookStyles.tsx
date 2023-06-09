import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    scrollViewContainer: {
        width: '100%',
        marginBottom: 10,
        marginTop: 90,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: COLORS.foreground,
        textAlign: 'center',
    },
    author: {
        fontSize: 15,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'center',   
        marginBottom: 30,
    },
    description: {
        fontSize: 14,
        fontWeight: '800',
        color: COLORS.foreground,
        textAlign: 'left',
        marginTop: 5,
        marginBottom: 15,
    },
    textNumber: {
        fontSize: 30,
        fontWeight: '800',
        color: COLORS.foreground,
        textAlign: 'left',
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    textHolder: {
        fontSize: 13,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginRight: 10,
    },
    tagsContainer: {
        marginTop: 5,
        marginBottom: 15,
    },
    readingsContainer: {
        width: "100%",
        marginTop: 5,
    },
});