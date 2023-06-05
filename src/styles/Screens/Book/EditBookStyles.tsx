import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
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
        height: 40,
        display : "flex",
        flexDirection : "row",
        overflow: 'scroll',
        paddingTop: 5
    },
    addTagContainer: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 23,
        backgroundColor: COLORS.accentColor,
        borderRadius: 17,
    },
    text: {
        textAlignVertical: 'center',
        marginRight : 15,
        marginLeft : 15,
        paddingBottom : 15,
        color: COLORS.foregroundHolder,
    },
    descriptionContainer: {
        backgroundColor: COLORS.componentBackground,
        width: '95%',
        height: 150,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 35,
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