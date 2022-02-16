import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Category({ category }) {

    let icon;

    if(category == "Bank") {
        icon = <FontAwesome name="bank" size={24} color="black" />;
    } else if (category == "Social Media") {
        icon = <Ionicons name="ios-share-social-outline" size={24} color="black" />;
    } else if (category == "Websites") {
        icon = <MaterialCommunityIcons name="web" size={24} color="black" />;
    }
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {icon}
            </View>
            <Text style={styles.message}>{category}</Text>
        </View>
    );
}