import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagsContainer: {
        alignItem: 'center',
        width: "95%",
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
        marginHorizontal: 10,
    },
    textHolder: {
        fontSize: 13,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'center',
        marginBottom: 5,
        marginRight: 20,
    },
    descriptionContainer: {
        backgroundColor: COLORS.componentBackground,
        width: '95%',
        height: 150,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    inputNumberContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    inputNumber: {
        width: '45%',
    },
    readingsContainer: {
        width: '95%',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop : 100,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    textHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: COLORS.foreground,
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'left',
        marginLeft: 5,
    },
    buttonHeader: {
        marginRight: 30,
    },
});