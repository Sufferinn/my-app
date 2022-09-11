import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import { StyleSheet, Text, View } from "react-native";


export default function App() {
    const [list, setList] = useState([]);
    const addItem = (text) => {
    const newItem = {
    id: text,
    task: text,
};
    setList([newItem, list]);
};

const DeleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
};


return (
<View style={styles.container}>
    <Text style={{fontSize: 30}}>Todo List</Text>
    <AddItem addItem={addItem}/>
    <ListItems deleteItem={DeleteItem} listItems={list}/>
    <StatusBar style="auto" />
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
});



// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TextInput } from 'react-native-web';

// function HomeScreen({ navigation, route }) {
  
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0FFFF' }}>
//         <Button title="Films list" onPress={() => navigation.navigate('Films')}/>
//       <Text style={{fontSize: 50, marginBottom: 20}}>FilmCreate Generator</Text>
//       <Button
//         onPress={() => navigation.navigate('CreatePost')}
//         title="Create film"
//       />
    
//     </View>
//   );
// }
// function CreatePostScreen({ navigation, route }) {
//   const [postText, setPostText] = React.useState('');
//   const [genreText, setGenreText] = React.useState('');
//   const [idText, setIdText] = React.useState('');

//   return (
//     <View style={{ backgroundColor: '#F0FFF0' }}>
//       <TextInput
//         multiline
//         placeholder="Enter the film's heading..."
//         style={{ height: 200, padding: 10, backgroundColor: 'white'}}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <TextInput
//         multiline
//         placeholder="Enter the film's genre..."
//         style={{ height: 200, padding: 10, backgroundColor: 'white'}}
//         value={genreText}
//         onChangeText={setGenreText}
//       />
//       <TextInput
//         multiline
//         placeholder="Enter the film's id..."
//         style={{ height: 200, padding: 10, backgroundColor: 'white'}}
//         value={idText}
//         onChangeText={setIdText}
//       />
//       <Button
//         title="Create"
//         onPress={() => {
//           navigation.navigate({
//             name: 'Films',
//             params: {post: postText},
//             params: {genre: genreText},
//             params: {id: idText},
//           })
//         }}
//         />
//     </View>
//   )
// }

// function FilmsListScreen({ navigation, route }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFEFD5'}}>
//             <Text>Heading: {route.params?.post}</Text>
//             <Text>Genre: {route.params?.genre}</Text>
//             <Text>Id: {route.params?.id}</Text>
//         </View>
//     )
// }


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Films" component={FilmsListScreen} />
//         <Stack.Screen 
//         name="CreatePost" 
//         component={CreatePostScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




// function DetailsScreen({ route, navigation }) {

//   const { itemId, color } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>color: {JSON.stringify(color)}</Text>
//       <Button
//         title="Go to Details..."
//         onPress={ () => navigation.push("Details", {
//            itemId: Math.floor(Math.random() * 100)
//         })}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//       <Button 
//       title="Go Back to first screen in stack" 
//       onPress={() => navigation.popToTop()}/>
//     </View>
//   )
// }




// import React, { useRef } from "react";
// import { Animated, Text, View, StyleSheet, Button, SafeAreaView, TouchableHighlight } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function _onPressButton() {
//     alert('You tapped the button!')
//   }
 
// const App = () => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     Animated.timing(fadeAnim,{
//       toValue: 1,
//       duration: 2000
//     }).start();
//   };

//   const fadeOut = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 0,
//       duration: 2000
//     }).start();
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim}]}>
//         <Text style={styles.fadingText}>Welcome!</Text>
//       </Animated.View>
//       <Button title="Open" onPress={fadeIn} />
//       <Button title="Close" onPress={fadeOut} />
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fadingText: {
//     fontSize: 38,
//   },
//   fadingContainer: {
//     padding: 20,
//     backgroundColor: '#C0C0C0',
//     borderRadius: 10,
//   }
// })
// export default App;




