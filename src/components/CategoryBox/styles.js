import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 100,
        height: "95%",
        backgroundColor: 'white',
        borderRadius: 8,
        marginHorizontal: 6,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    selected: {
        width: 10,
        height: 10,
        backgroundColor: '#59FF74',
        borderWidth: 1,
        borderColor: '#06D6A0',
        borderRadius: 3,
        alignSelf: 'flex-end',
        marginRight: 6,
        marginTop: 6
    },
    notSelected: {
        width: 10,
        height: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#06D6A0',
        borderRadius: 3,
        alignSelf: 'flex-end',
        marginRight: 6,
        marginTop: 6
    },
    icon: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontFamily: theme.fonts.semiBold,
        fontSize: 16,
        marginBottom: 6
    }
})