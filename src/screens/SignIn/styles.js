import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 15,
        paddingHorizontal: 24,
        justifyContent: 'space-between'
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
    nameLabel: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
        marginBottom: 5,
        marginLeft: 15
    },
    passwordLabel: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
        marginBottom: 5,
        marginLeft: 15,
    },
    nameInput: {
        width: '100%',
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        height: 50,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: theme.fonts.medium
    },
    passwordInput: {
        width: '100%',
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        height: 50,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: theme.fonts.medium,
        letterSpacing: 2
    },
    aviso: {
        color: theme.colors.heading,
        fontSize: 12,
        fontFamily: theme.fonts.text400,
        alignSelf: 'center',
        marginTop: 5
    },
    button: {
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        marginBottom: 25
    },
    textButtom: {
        color: 'black',
        fontSize: 25,
        fontFamily: theme.fonts.bold
    }
})