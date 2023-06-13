import { StyleSheet } from "react-native";
import { COLORS } from "../../../../library/CommonColors";

export default StyleSheet.create({
    container: {
        
        width: 170,
        aspectRatio: 1,
        backgroundColor: COLORS.componentBackground,
        borderRadius : 10,
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
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 15,
    },
    likeReleaseContainer: {
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
    releaseYear : {
        color: COLORS.foreground,
        fontSize: 15,
        fontWeight: '500',
    }
});
