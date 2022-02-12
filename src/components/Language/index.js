import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Language({language}) {
    return (
        <View style={styles.container}>
            <View style={styles.img}></View>
            <Text style={styles.text}>{language}</Text>
        </View>
    );
}