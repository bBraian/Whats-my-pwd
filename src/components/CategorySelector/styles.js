import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginVertical: '8%'
    },
    block: {
        width: 100,
        height: "100%",
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 5
    },
    total: {
        color: theme.colors.heading,
        fontSize: 13,
        fontFamily: theme.fonts.medium
    }
})