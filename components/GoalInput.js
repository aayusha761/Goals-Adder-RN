import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal} from "react-native";

const GoalInput = props => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInput}>
                <TextInput
                    placeholder="Enter text"
                    style={{borderWidth: 1, width: '80%', borderColor: 'black', padding: 10}}
                    value={props.text}
                    onChangeText={(text) => {props.setText(text)}}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={props.setArray.bind(this, props.text)} title="Add"/>
                    <Button title="Cancel" color="red" onPress={() => props.cancel(false)}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});

export default GoalInput;