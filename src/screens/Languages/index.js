import React, { useState } from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Language } from "../../components/Language";

import { language } from "../../global/styles/language";

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
        }
      ];

      var welcome_to = language.english.welcome_to;
      var choose = language.english.choose;
      var your_language = language.english.your_language;
      var next = language.english.next;


      if(languageSelect == "Portuguese") {
        welcome_to = language.portuguese.welcome_to
        choose = language.portuguese.choose;
        your_language = language.portuguese.your_language;
        next = language.portuguese.next;

      } else if(languageSelect == "English") {
        welcome_to = language.english.welcome_to
        choose = language.english.choose;
        your_language = language.english.your_language;
        next = language.english.next;

      } else if(languageSelect == "Spanish") {
        welcome_to = language.spanish.welcome_to
        choose = language.spanish.choose;
        your_language = language.spanish.your_language;
        next = language.spanish.next;

      } else if(languageSelect == "French") {
        choose = language.french.choose;
        your_language = language.french.your_language;
        welcome_to = language.french.welcome_to
        next = language.french.next;
      }

    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.subtitle}>
              {welcome_to}
            </Text>
            <Text style={styles.title}>What's my pwd</Text>

            <Text style={styles.textTitle}>
              {choose}
            </Text>
            <Text style={styles.textSubtitle}>
              {your_language}
            </Text>
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
                <Text style={styles.textButtom}>{next}</Text>
            </TouchableOpacity>
        </View>
    );
}