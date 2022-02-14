import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 15,
        paddingHorizontal: 24,
    },
    subtitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.medium,
        fontSize: 20
    },
    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.bold,
        fontSize: 30
    },
    textSubtitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.medium,
        fontSize: 20
    },
    textTitle: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.bold,
        fontSize: 30
    },

    button: {
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        marginBottom: 15
    },
    textButtom: {
        color: 'black',
        fontSize: 25,
        fontFamily: theme.fonts.bold
    }
})