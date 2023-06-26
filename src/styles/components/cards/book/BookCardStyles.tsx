import { StyleSheet } from "react-native";
import { COLORS } from "../../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: COLORS.componentBackground,
        borderRadius : 10,
        marginBottom: 15,
        padding: 10,
        shadowColor: COLORS.Black,
        shadowOpacity: 0.3,
        shadowOffset: { width: 4, height: 4},
        elevation: 5,
    },
    titleStyle: {
        color: COLORS.foreground,
        fontSize: 20,
        fontWeight: '800',
        width: '90%'
    },
    authorStyle: {
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '500',
    },
    tagList: {
        height:30,
        marginTop : 10 ,
    },
    lineContainer: {
        display : "flex",
        flexDirection : "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    releaseYear : {
        color: COLORS.foreground,
        fontSize: 14,
        fontWeight: '500',
    }
});
