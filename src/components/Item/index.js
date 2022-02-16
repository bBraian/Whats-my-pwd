import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { MaterialIcons } from '@expo/vector-icons';

export function Item({name, password}) {
    const [isVisible, setIsVisible] = useState(false);

    function handleSeePassword() {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
            </View>

            <View style={{width: '70%'}}>
                <View style={{marginLeft: "20%", justifyContent: 'center'}}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                
                <View style={{marginLeft: "20%", flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.password}>{isVisible ? password : "********"}</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => handleSeePassword()}><MaterialIcons name={isVisible ? "visibility" : "visibility-off"} size={22} color="black" /></TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}