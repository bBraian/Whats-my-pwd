import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Search({handleOpenCloseModal, search, setSearch}) {

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Ionicons name="search" size={24} color="black" style={{marginRight: 10}} />
                <TextInput value={search} placeholder="Search for a password" onChange={(e) => setSearch(e.target.value)} style={styles.inputText}>
                </TextInput>
            </View>
            
            <TouchableOpacity style={styles.img} activeOpacity={0.7} onPress={handleOpenCloseModal}><AntDesign name="filter" size={35} color="black" /></TouchableOpacity>
        </View>
    );
}