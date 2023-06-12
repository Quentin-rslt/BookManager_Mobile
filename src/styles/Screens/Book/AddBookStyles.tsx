import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    tagsContainer: {
        alignItem: 'center',
        width: "100%",
        marginBottom: 10,
        display : "flex",
        flexDirection : "row",
    },
    addTagContainer: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 26,
        backgroundColor: COLORS.accentColor,
        borderRadius: 17, 
        marginRight: 10,
        marginLeft: 5,
    },
    textHolder: {
        fontSize: 13,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginBottom: 5,
        marginHorizontal: 15,
    },
    descriptionContainer: {
        backgroundColor: COLORS.componentBackground,
        height: 150,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor:  COLORS.Black,
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    inputNumberContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputNumber: {
        width: '45%',
    },
    readingsContainer: {
        width: '100%',
    },
});