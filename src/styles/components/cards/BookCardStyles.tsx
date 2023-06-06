import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width:"100%",
        height:135,
        overflow:'hidden',
        backgroundColor: COLORS.componentBackground,
        borderRadius : 15,
        marginBottom: 15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    titleStyle: {
        color: COLORS.foreground,
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 20,
        marginRight: 20,
        overflow: 'hidden',
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
        height:30,
        marginTop : 5,
        marginHorizontal:20,
    },
    numberContainer: {
        position:'absolute',
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        bottom: 15,
        left: 0,
        paddingLeft: 20,
        paddingRight: 20,
    },
    containerReleaseAuthor: {
        display : "flex",
        flexDirection : "row",
    },
    releaseYear : {
        position:'absolute',
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '500',
        right : 20,
        marginTop: 5,
    }
});
