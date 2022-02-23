import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function CategoryBox({ category }) {
    const [selectedBox, setSelectedBox] = useState('');

    function handleSelectCategoryBox(category) {
        selectedBox == category ? setSelectedBox('') : setSelectedBox(category)
    }

    let icon;

    if(category == "Bank") {
        icon = <FontAwesome name="bank" size={50} color="black" />;
    } else if (category == "Social Media") {
        icon = <Ionicons name="ios-share-social-outline" size={50} color="black" />;
    } else if (category == "Websites") {
        icon = <MaterialCommunityIcons name="web" size={50} color="black" />;
    }
    
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => handleSelectCategoryBox(category)} >
            { selectedBox == category 
                ? <View style={styles.selected}></View>
                : <View style={styles.notSelected}></View>
            }
            

            <View style={styles.icon}>{icon}</View>

            <Text style={styles.text}>{category}</Text>
            
        </TouchableOpacity>
        
    );
}