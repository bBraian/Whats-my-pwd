import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5.5,
        backgroundColor: 'red'
    },
    img: {
        width: 50,
        height: 50,
        // backgroundColor: theme.colors.highlight,
        borderRadius: 9,
        marginRight: 35
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontFamily: theme.fonts.semiBold
    }
})