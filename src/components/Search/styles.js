import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    img: {
        width: 60,
        height: 60,
        backgroundColor: 'orange',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: "76%",
        height: 60,
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 10,
        
        alignItems: 'center',
    },
    inputText: {
        fontFamily: theme.fonts.medium,
        fontSize: 18,
    }
})