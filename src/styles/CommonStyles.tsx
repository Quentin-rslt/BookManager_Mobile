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
        top : 85,
        bottom: 55,
        borderRadius : 30,
    },
    scrollViewContainer : {
        marginTop: "4vh",
        marginBottom: '2vh',
    },
    loader: {
        position: 'absolute',
        top: '45%',
        left: '45%',
    },
});
