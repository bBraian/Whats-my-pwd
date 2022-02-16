import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Search() {
    const [text, setText] = useState('Search for password')

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Ionicons name="search" size={24} color="black" style={{marginRight: 10}} />
                <TextInput value={text} style={styles.inputText}>
                </TextInput>
            </View>
            
            <TouchableOpacity style={styles.img} activeOpacity={0.7}><AntDesign name="filter" size={35} color="black" /></TouchableOpacity>
        </View>
    );
}