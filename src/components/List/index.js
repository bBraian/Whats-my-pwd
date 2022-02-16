import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { styles } from "./styles";

import { Category } from "../Category";
import { Item } from "../Item";

export function List() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                
                <Category category="Bank" />
            
                <Item name="NuBank" password="123123" />
                <Item name="Digio" password="testedeas" />
                <Item name="Sicredi" password="515185" />

                <Category category="Social Media" />
                <Item name="Facebook" password="braiannn" />
                <Item name="Instagram" password="braiannn" />

                <Category category="Websites" />
                <Item name="Growth" password="testeed" />
                <Item name="GitHub" password="996184" />
            </ScrollView>
        </SafeAreaView>
    );
}