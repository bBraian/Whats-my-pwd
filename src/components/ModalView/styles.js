import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    overlay: {
        backgroundColor: theme.colors.overlay,
        flex: 1,
        justifyContent: 'flex-end'
    },
    container: {
        height: "50%",
        width: "100%",
        backgroundColor: theme.colors.backgroundDark,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    bar: {
        width: 45,
        height: 4,
        borderRadius: 2,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 13,
        marginBottom: 10
    },
    text: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.bold,
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: '30%'
    },
    icon: {
        marginLeft: "5%"
    },
    align:{
        flexDirection: 'row', 
        width: '100%', 
        // backgroundColor: 'red',
        marginVertical: 12
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: theme.colors.heading,
        marginBottom: 5
    },
    button: {
        width: '100%',
        height: 70,
        backgroundColor: theme.colors.heading,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'center',
        marginBottom: 15
    },
    textButtom: {
        color: 'black',
        fontSize: 25,
        fontFamily: theme.fonts.bold
    },
    area: {
        flex: 1,
        paddingHorizontal: 24,
    }
});