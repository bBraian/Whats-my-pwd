import React from "react";
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback, Text } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";

export function ModalView({ children, handleOpenCloseModal, ...rest }) {
    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                        <TouchableOpacity onPress={handleOpenCloseModal}>
                            <View style={styles.bar} />
                        </TouchableOpacity>
                        <View style={styles.align}>
                            <TouchableOpacity onPress={handleOpenCloseModal} style={styles.icon} >
                                <Ionicons name="arrow-back" size={28} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.text}>Sort by</Text>
                        </View>
                        <View style={styles.line}></View>

                        <View style={styles.area}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                            { children }
                            </View>
                            
                            <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleOpenCloseModal}>
                                <Text style={styles.textButtom}>Show results</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>

        </Modal>
    );
}