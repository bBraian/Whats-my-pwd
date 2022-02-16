import React from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";

export function SignIn({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={{marginTop: 25, alignSelf: 'center'}}>
                <Text style={styles.subtitle}>Never lose you</Text>
                <Text style={styles.title}>Passwords again</Text>
            </View>

            <View>
                <View style={{marginBottom: 25}}>
                    <Text style={styles.textTitle}>Create</Text>
                    <Text style={styles.textSubtitle}>your account</Text>
                </View>
                
                <KeyboardAvoidingView>
                    <View style={{marginBottom: 15}}>
                        <Text style={styles.nameLabel}>Your first name</Text>
                        <TextInput style={styles.nameInput}></TextInput>
                    </View>

                    <Text style={styles.passwordLabel}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.passwordInput}></TextInput>
                </KeyboardAvoidingView>

                <Text style={styles.aviso}>This password will be used to log in into the app</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.textButtom}>Ready</Text>
            </TouchableOpacity>
        </View>
    );
}