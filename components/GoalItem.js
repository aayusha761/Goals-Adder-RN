import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const GoalItem = props => {
    return (
        <View style={styles.text}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
                <Text>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
    }
});

export default GoalItem;