import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        width:"90%",
        height:"20vh",
        overflow:'hidden',
        backgroundColor: COLORS.componentBackground,
        borderRadius : 30,
        shadowOffset: {width: 2.5, height: 2.5},
        shadowColor: COLORS.background,
        shadowOpacity: 0.3,
        marginBottom: 30,
    },
    titleStyle: {
        color: COLORS.foreground,
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 20,
        marginTop: 15,
    },
    authorStyle: {
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 5,
    },
    tagList: {
        display : "flex",
        flexDirection : "row",
        marginLeft : 15,
        marginTop : 15,
    },
    numberContainer: {
        position:'absolute',
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        bottom: 20,
        left: 0,
        paddingLeft: 20,
        paddingRight: 20,
    },
});
