import { StyleSheet } from "react-native";
import { COLORS } from "../../library/CommonColors";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingBottom: 50,
    },
    scrollViewContainer: {
        height: "100%",
        width: '100%',
        marginVertical : 10,
    },
    itemsContainer: {
        width: "100%",
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    itemsScrollView: {
        flexDirection: 'row',
        width: "100%",
    },
    itemsWrapperContainer: {
        width: "100%",
        marginBottom: 10,
        paddingHorizontal: 11,
    },
    itemsWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemWrapperContainer: {
        width: "50%",
        padding: 4,
    },
    favBookCardContainer: {
        paddingRight: 15,
    },
    tagCardContainer: {
        paddingRight: 15,
    },
    textHolder: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.foregroundHolder,
        textAlign: 'left',
        marginBottom: 15,
    },
    loadMoreContent: {
        alignItems: 'center',
    },
    showAllButton: {
        alignItems: 'center',    
    },
    textButton: {
        backgroundColor: COLORS.accentColor,
        color: COLORS.background,
        fontSize: 13,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 6,
        paddingHorizontal : 15,
        borderRadius: 20,
    },
});