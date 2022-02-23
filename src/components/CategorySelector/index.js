import React from "react";
import { View, ScrollView} from "react-native";
import { styles } from "./styles";

import { CategoryBox } from "../CategoryBox";

export function CategorySelector() {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
                <CategoryBox category="Bank" />
                <CategoryBox category="Social Media" />
                <CategoryBox category="Websites" />
                <CategoryBox category="Bank" />
                <CategoryBox category="Social Media" />
                <CategoryBox category="Websites" />
            </ScrollView>
        </View>
        
    );
}