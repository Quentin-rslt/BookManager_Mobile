import { StyleSheet } from "react-native";
import { COLORS } from "../library/CommonColors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContainer: {
        width: '100%',
        marginVertical : 10,
    },
    scrollViewModal: {
        marginVertical : 10,
    },
    flatListContainer: {
        width: '100%',
        marginBottom: 5,
    },
    titleScrollView: {
        marginTop: 60,
    },
    titleFlatList: {
        marginTop: 70,
        marginBottom: 20,
    },
    loader: {
        position: 'absolute',
        top: '45%',
        left: '45%',
    },
    loaderButton: {
        width: '100%',
    },
    noItems: {
        textAlign: 'center',
        color: COLORS.foreground,
        width: "100%",
        marginTop : 20,
    },
    image: {
        resizeMode: "contain",
        width: "100%",
    },
    firstLoader: {
        position: 'absolute',
        bottom: "50%",
    },
});
