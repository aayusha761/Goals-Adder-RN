import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [text, setText] = useState('');
  const [textArray, setTextArray] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const setArray = () => {
    setTextArray(textArray => [...textArray, {key: Math.random().toString(), value: text}]);
    setIsAddMode(false);
    setText('');
  };

  const removeHandler = (id) => {
      setTextArray(textArray => {
          return textArray.filter((goal) => goal.key !== id)
      })
  };

  return (
    <View style={styles.container}>
        <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput text={text} setText={(text) => setText(text)} setArray={setArray} visible={isAddMode} cancel={setIsAddMode}/>
      <FlatList
          keyExtractor={(item, index) => item.key}
          data={textArray}
          renderItem={text => (
          <GoalItem id={text.item.key} title={text.item.value} onDelete={removeHandler}/>
      )}>
      </FlatList>

      {/*<ScrollView>*/}
      {/*  {*/}
      {/*    textArray.map((text, index) =>*/}
      {/*      <View key={index} style={styles.text}>*/}
      {/*        <TouchableOpacity>*/}
      {/*          <Text>{text}</Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*      </View>*/}
      {/*    )*/}
      {/*  }*/}
      {/*</ScrollView>*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  }
});
