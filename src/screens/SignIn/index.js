import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function SignIn() {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.subtitle}>Never lose you</Text>
                <Text style={styles.title}>Passwords again</Text>
            </View>

            <View>
                <Text style={styles.textTitle}>Create</Text>
                <Text style={styles.textSubtitle}>your account</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignIn')} style={styles.button}>
                <Text style={styles.textButtom}>Ready</Text>
            </TouchableOpacity>
        </View>
    );
}