import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    saveButtonContainer: {
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 8,
        paddingHorizontal: '25%',
    },
    saveButton: {
        backgroundColor: COLORS.clickableColor,
        color: COLORS.background,
        height: 45,
        width: "100%",
        justifyContent: 'center',
        borderRadius : 17,
    },
    tagsContainer: {
        alignItem: 'center',
        width: "85%",
        height: 40,
        display : "flex",
        flexDirection : "row",
        overflow: 'scroll',
        marginBottom: 5,
        paddingTop: 5
    },
    addTagContainer: {
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 3,
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
        width: '85%',
        height: 150,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    spinnerContainer: {
        width: '85%',
    },
    inputNumberContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    inputNumber: {
        width: '45%',
    },
    readingsContainer: {
        width: '85%',
    }
});