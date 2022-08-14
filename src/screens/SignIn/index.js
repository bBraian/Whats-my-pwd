import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";

export function SignIn({ navigation }) {
    const [ firstName, setFirstName ] = useState('');
    const [ password, setPassword ] = useState('');

    
    function validateLogin() {
        if(firstName == "Braian" && password == "3200") {
            navigation.navigate('Home');
        } else {
            alert("Login incorreto!");
        }        
    }
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
                    <Text style={styles.nameLabel}>Your first name</Text>
                    <TextInput onChangeText={text => setFirstName(text)} style={styles.nameInput}></TextInput>

                    <Text style={styles.passwordLabel}>Password</Text>
                    <TextInput onChangeText={text => setPassword(text)} secureTextEntry={true} style={styles.passwordInput}></TextInput>
                </KeyboardAvoidingView>

                <Text style={styles.aviso}>This password will be used to log in into the app</Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={validateLogin} style={styles.button}>
                <Text style={styles.textButtom}>Ready</Text>
            </TouchableOpacity>
        </View>
    );
}