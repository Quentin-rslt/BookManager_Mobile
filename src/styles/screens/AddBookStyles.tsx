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
        display : "flex",
        flexDirection : "row",
        overflow: 'scroll',
        marginBottom: 30,
    },
    addTagContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 30,
        backgroundColor: COLORS.clickableColor,
        borderRadius: 17,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    addTagText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight : 15,
        color: COLORS.foregroundHolder,
    },
    descriptionContainer: {
        backgroundColor: COLORS.componentBackground,
        width: '85%',
        height: 150,
        marginBottom: 30,
        paddingHorizontal: 10,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    spinnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    }
});