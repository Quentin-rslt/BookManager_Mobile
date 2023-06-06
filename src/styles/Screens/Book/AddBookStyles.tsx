import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
        width: '50%',
        position: 'absolute',
        bottom: 8,
        paddingHorizontal: '25%',
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        height: 45,
        borderRadius : 40,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    tagsContainer: {
        alignItem: 'center',
        width: "95%",
        marginBottom: 10,
        display : "flex",
        flexDirection : "row",
        overflow: 'scroll',
    },
    addTagContainer: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 23,
        backgroundColor: COLORS.clickableColor,
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
        marginBottom: 10,
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
    }
});