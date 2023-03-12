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
        position: 'absolute',
        bottom: 8,
    },
    textSaveButton: {
        color: COLORS.background,
        height: 45,
        paddingHorizontal: 50, 
        borderRadius : 17,
        fontSize: 17,
        fontWeight: '800',
        textAlign : 'center',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
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
        paddingHorizontal: 15,
        height: 25,
        backgroundColor: COLORS.accentColor,
        borderRadius: 17,
    },
    text: {
        textAlignVertical: 'center',
        marginRight : 15,
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
    readingsContainer: {
        width: '85%',
    }
});