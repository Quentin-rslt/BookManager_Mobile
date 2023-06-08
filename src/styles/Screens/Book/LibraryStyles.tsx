import { StyleSheet } from "react-native";
import { COLORS } from "../../../library/CommonColors";

export default StyleSheet.create({
    booksContainer: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingBottom: 50,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop : 100,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    textHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: COLORS.foreground,
        fontSize: 25,
        fontWeight: '800',
        textAlign: 'left',
        marginLeft: 5,
    },
    buttonHeader: {
        marginRight: 30,
    }
});
