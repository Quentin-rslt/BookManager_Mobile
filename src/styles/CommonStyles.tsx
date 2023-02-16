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
    componentContainer : {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    booksContainer: {
        alignItems: "center",
        width: "100%",
    }
});