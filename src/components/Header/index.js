import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { FontAwesome5 } from '@expo/vector-icons';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.hello}>Hello,</Text>
                    <Text style={styles.nickname}> Braian</Text>
                </View>
                <Text style={styles.message}>Let's save your Passwords</Text>
            </View>
            <View style={styles.img}>
                <FontAwesome5 name="user" size={32} color="black" />
            </View>
            
        </View>
    );
}