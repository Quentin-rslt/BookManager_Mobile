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
        marginBottom: 62,
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
    buttonContainer: {
        position:'absolute',
        bottom: 90,
        right: 15,
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 55,
        backgroundColor: COLORS.clickableColor,
        borderRadius: 40,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
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
