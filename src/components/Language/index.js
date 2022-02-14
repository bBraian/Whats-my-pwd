import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";


export function Language({language, img, selected}) {
    return (
        <View style={[styles.container, {
            backgroundColor: language == selected ? "#C3CFD0" : theme.colors.heading
        }]}>
            <Image
                style={styles.img}
                source={img}
            />
            <Text style={styles.text}>{language}</Text>
        </View>
    );
}