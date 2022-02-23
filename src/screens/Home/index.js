import React, { useState } from "react";
import { View, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { styles } from './styles';

import { Search } from "../../components/Search";
import { Header } from "../../components/Header";
import { Counter } from "../../components/Counter";
import { ModalView } from "../../components/ModalView";
import { CategorySelector } from "../../components/CategorySelector";
import { List } from "../../components/List";
import { theme } from "../../global/styles/theme";

export function Home() {
    const [modalVisible, setModalVisible] = useState(false);

    function handleOpenCloseModal() {
        modalVisible ? setModalVisible(false) : setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <View style={{height: '12%'}}>
                <Header />
            </View>
            

            <View style={{height: '74%', justifyContent: 'center'}}>
                <Search onPress={handleOpenCloseModal} />
                <Counter />
                <List />
                
            </View>

            <View style={{height: '14%', justifyContent: 'flex-end', backgroundColor: theme.colors.background}}>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.textButtom}>Create new</Text>
                </TouchableOpacity>
            </View>

            <ModalView visible={modalVisible} onRequestClose={handleOpenCloseModal} handleOpenCloseModal={handleOpenCloseModal} >
                <CategorySelector />
            </ModalView>
            
        </View>
    );
}