import { StyleSheet } from "react-native";
import { COLORS } from "../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 15,
    },
    favBooksContainer: {
        width: "100%",
    },
    favBooksScrollView: {
        flexDirection: 'row',
        width: "100%",
    },
    bookCardContainer: {
        paddingRight: 15,
    },
    mostUseTagsContainer: {

    },
    readingsContainer: {

    },
    textHolder: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginBottom: 5,
    },
});