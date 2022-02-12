import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { Language } from "../../components/Language";
import { RectButton } from "react-native-gesture-handler"

export function Languages() {

    const languages = [
        {
          id: '1',
          language: 'Portuguese',
        },
        {
          id: '2',
          language: 'English',
        },
        {
          id: '3',
          language: 'French',
        },
        {
          id: '4',
          language: 'Portuguese',
        },
        {
          id: '5',
          language: 'English',
        },
        {
          id: '6',
          language: 'French',
        },
      ];

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Welcome to</Text>
            <Text style={styles.title}>What's my pwd</Text>

            <Text style={styles.textTitle}>Choose</Text>
            <Text style={styles.textSubtitle}>your language</Text>
            
            <SafeAreaView style={{height: 400}}>
                <FlatList 
                    data={languages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Language 
                            language={languages.language}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 69}}
                />
            </SafeAreaView>

            <RectButton style={styles.button}>

            </RectButton>
        </View>
    );
}