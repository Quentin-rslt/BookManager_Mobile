import { StyleSheet } from "react-native";
import { COLORS } from "../../Common/CommonColors";

export default StyleSheet.create({
    container: {
        width:"90%",
        height:"20vh",
        backgroundColor: COLORS.componentBackground,
        borderRadius : 30,
        shadowOffset: {width: 2.5, height: 2.5},
        shadowColor: COLORS.background,
        shadowOpacity: 0.3,
        marginBottom: 30,
    }
});
