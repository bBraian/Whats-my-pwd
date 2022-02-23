import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: "5%"
        // backgroundColor: 'red'
    },
    img: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    hello: {
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.medium
    },
    nickname: {
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.bold
    },
    message: {
        color: theme.colors.heading,
        fontSize: 17,
        fontFamily: theme.fonts.medium
    }
})