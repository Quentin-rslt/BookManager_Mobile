import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: -4, height: -4},
        elevation: -10,
        justifyContent: 'center',
        paddingVertical: 10
    },
    returnButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        top: -40,
    },
    criteriaContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    titleModal: {
        color: COLORS.foreground,
        fontSize: 25,
        width: '100%',
        textAlign: 'center',
        marginTop: 10,
    },
    rangeContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rangeComponent: {
        width: '48.5%',
    },
    searchButton: {
        backgroundColor: COLORS.accentColor,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
    },
    holderText: {
        color: COLORS.foregroundHolder,
        fontSize: 13,
        marginRight: 15,
    },
    likeContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        width: '100%', 
        alignItems: 'center'
    }
});