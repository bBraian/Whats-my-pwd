import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        borderRadius: 12,
        flexDirection: 'row',
        marginVertical: 6,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    icon: {
        width: 75,
        height: 75,
        backgroundColor: "#CCCC",
        borderRadius: 12,
    },
    title: {
        fontFamily: theme.fonts.bold,
        fontSize: 25
    },
    password: {
        fontFamily: theme.fonts.semiBold,
        fontSize: 22
    }
})