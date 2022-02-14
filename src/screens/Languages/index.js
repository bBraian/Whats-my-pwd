import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Language } from "../../components/Language";


import Portuguese from "../../assets/Portuguese.png";
import English from "../../assets/English.png";
import Spanish from "../../assets/Spanish.png";
import French from "../../assets/French.png";

export function Languages({ navigation }) {

  const [languageSelect, setLanguageSelect] = useState('');

  function setLanguage(id) {
    setLanguageSelect(id);
  }

    const languages = [
        {
          id: '1',
          language: 'Portuguese',
          img: Portuguese
        },
        {
          id: '2',
          language: 'English',
          img: English
        },
        {
          id: '3',
          language: 'Spanish',
          img: Spanish
        },
        {
          id: '4',
          language: 'French',
          img: French
        },
        {
          id: '5',
          language: 'English',
          img: English
        },
        {
          id: '6',
          language: 'Spanish',
          img: Spanish
        },
        {
          id: '7',
          language: 'French',
          img: French
        },
      ];

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.subtitle}>Welcome to</Text>
            <Text style={styles.title}>What's my pwd</Text>

            <Text style={styles.textTitle}>Choose</Text>
            <Text style={styles.textSubtitle}>your language</Text>
          </View>
            
          <SafeAreaView style={styles.languagesArea}>
              <FlatList 
                  data={languages}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => setLanguage(item.language)}>
                      <Language 
                          language={item.language}
                          img={item.img}
                          selected={languageSelect}
                      />
                    </TouchableOpacity>
                  )}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 69}}
              />
          </SafeAreaView>

            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignIn')} style={styles.button}>
                <Text style={styles.textButtom}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}