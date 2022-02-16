import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: "#CCCC",
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        fontFamily: theme.fonts.semiBold,
        fontSize: 18
    }
})