import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    txtFieldBackground: {
        justifyContent: 'center',
        width: '95%',
        height: 55,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: COLORS.componentBackground,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    inputText: {
        textAlignVertical: 'top',  
        textAlign: 'left',
        color: COLORS.foreground,
        width: '100%',
        height: '100%',
        overflow:'hidden',
        paddingTop: 25,
        paddingLeft: 5,
    },
    holderText: {
        position: 'absolute',
        textAlign: 'left',
        color: COLORS.foregroundHolder,
        width: '100%',
        top: 10,
        left: 15,
        fontSize: 13,
        lineHeight: 16,
    },
})