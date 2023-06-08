import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        height: '20%',
        width: "100%",
        backgroundColor: COLORS.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: -4, height: -4},
        elevation: -10,
    },
    returnButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        top: -40,
    },
    editButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 35,
    },
    textEditButton: {
        color: COLORS.foreground,
        marginLeft: 15,
    },
});