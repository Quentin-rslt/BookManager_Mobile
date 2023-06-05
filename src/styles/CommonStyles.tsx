import { StyleSheet } from "react-native";
import { COLORS } from "../library/CommonColors";

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
        top : 75,
        bottom: 60,
        borderRadius : 40,
    },
    scrollViewContainer : {
        marginVertical : 20,
    },
    flatListContainer : {
        marginVertical : 20,
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
        bottom: 35,
        right: 30,
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
    holderText: {
        position: 'absolute',
        textAlign: 'left',
        color: COLORS.foregroundHolder,
        width: '100%',
        top: 10,
        left: 20,
        fontSize: 13,
        lineHeight: 16,
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
