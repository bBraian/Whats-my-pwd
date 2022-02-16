import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Counter() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Saved passwords</Text>
            <Text style={styles.total}>Total 3</Text>
        </View>
    );
}