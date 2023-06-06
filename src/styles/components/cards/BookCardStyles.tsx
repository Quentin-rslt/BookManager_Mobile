import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width:"100%",
        height:130,
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
        marginHorizontal: 15,
        overflow: 'hidden',
        marginTop: 10,
    },
    authorStyle: {
        color: COLORS.foregroundHolder,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 15,
    },
    tagList: {
        height:30,
        marginTop : 10 ,
        marginHorizontal:15,
    },
    numberContainer: {
        position:'absolute',
        display : "flex",
        flexDirection : "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        bottom: 10,
        left: 0,
        paddingHorizontal: 15,
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
        right : 15,
        marginTop: 5,
    }
});
