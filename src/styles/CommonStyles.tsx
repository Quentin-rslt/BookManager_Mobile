import { StyleSheet } from "react-native";
import { COLORS } from "../Common/CommonColors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
      content : {
        backgroundColor: COLORS.backgroundLight,
        width: '100%',
        position: 'absolute',
        top : 120,
        bottom: 60,
        borderRadius : 30,
    },
    scrollViewContainer : {
        marginTop: "7%",
        marginBottom: "7%",
    },
    loader: {
        position: 'absolute',
        top: '45%',
        left: '45%',
    },
    noItems: {
        textAlign: 'center',
        color: COLORS.foreground,
        width: "100%"
    },
    textButtonContainer: {
        position:'absolute',
        bottom: 35,
        right: 30,
    },
    holderText: {
        position: 'absolute',
        textAlign: 'left',
        color: COLORS.foregroundHolder,
        width: '100%',
        top: 10,
        left: 18,
        fontSize: 13,
        lineHeight: 16,
    },
});
