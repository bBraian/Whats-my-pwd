import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from './styles';

import { Search } from "../../components/Search";
import { Header } from "../../components/Header";

export function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View>
                <Search />
            </View>

            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.textButtom}>Ready</Text>
            </TouchableOpacity>
        </View>
    );
}