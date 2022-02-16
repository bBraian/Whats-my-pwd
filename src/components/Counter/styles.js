import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    message: {
        color: theme.colors.heading,
        fontSize: 18,
        fontFamily: theme.fonts.bold
    },
    total: {
        color: theme.colors.heading,
        fontSize: 13,
        fontFamily: theme.fonts.medium
    }
})