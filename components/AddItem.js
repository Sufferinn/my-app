import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


export default function addItem(props) {
const [item, setItem] = useState('');
return (
<View>
<Text style={{textAlign: "center"}}>Enter your task:</Text>
<TextInput
onChangeText={(textVal) => {
setItem(textVal);
}}
style={{
borderBottomColor: 'black',
backgroundColor: '#f4f4f4',
margin: 4,
}}
></TextInput>
<Button
onPress={() => {
props.addItem(item);
}}
title="Add"
></Button>
</View>
);
}