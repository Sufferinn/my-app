import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ADD8E6' }}>
      <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10}}>Добро пожаловать в приложение "Мой Банк"!</Text>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 30}}>Вам пригодятся ссылки внизу:</Text>
      <Button
        onPress={() => navigation.navigate('Current')}
        title="Текущие счета">
      </Button>
      <Button
        onPress={() => navigation.navigate('Support')}
        title="Помощь">
      </Button>
      <Button
        onPress={() => navigation.navigate('Info')}
        title="Информация о кредите">
      </Button>
      <Button
        onPress={() => navigation.navigate('Transfer')}
        title="Переводы">
      </Button>
    </View>
  );
}

function CurrentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Current Screen</Text>
      <Button
        title="Go to Support"
        onPress={ () => navigation.navigate("Support")}
      />
      <Button
        title="Go to Info"
        onPress={ () => navigation.navigate("Info")}
      />
      <Button
      title="Go to Transfer"
      onPress={ () => navigation.navigate("Transfer")}
        />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
      <Button 
      title="Go Back to first screen in stack" 
      onPress={() => navigation.popToTop()}/>
    </View>
  )
}

function SupportScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Support Screen</Text>
        <Button
        title="Go to Current"
        onPress={ () => navigation.navigate("Current")}
      />
      <Button
        title="Go to Info"
        onPress={ () => navigation.navigate("Info")}
      />
      <Button
      title="Go to Transfer"
      onPress={ () => navigation.navigate("Transfer")}
        />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
      <Button 
      title="Go Back to first screen in stack" 
      onPress={() => navigation.popToTop()}/>
      </View>
    )
}

function InfoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Info Screen</Text>
          <Button
            title="Go to Support"
            onPress={ () => navigation.navigate("Support")}
            />
            <Button
                title="Go to Current"
                onPress={ () => navigation.navigate("Current")}
            />
            <Button
            title="Go to Transfer"
            onPress={ () => navigation.navigate("Transfer")}
                />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            <Button 
            title="Go Back to first screen in stack" 
            onPress={() => navigation.popToTop()}/>
        </View>
      )
}

function TransferScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Transfer Screen</Text>
            <Button
            title="Go to Support"
            onPress={ () => navigation.navigate("Support")}
            />
            <Button
                title="Go to Info"
                onPress={ () => navigation.navigate("Info")}
            />
            <Button
            title="Go to Current"
            onPress={ () => navigation.navigate("Current")}
                />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            <Button 
            title="Go Back to first screen in stack" 
            onPress={() => navigation.popToTop()}/>
        </View>
      )
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Current" component={CurrentScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="Transfer" component={TransferScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;










// export default function App() {
//     const [list, setList] = useState([]);
//     const addItem = (text) => {
//     const newItem = {
//     id: text,
//     task: text,
// };
//     setList([newItem, list]);
// };

// const deleteItem = (id) => {
//     const newList = list.filter((item) => item.id !== id);
//     setList(newList);
// };

// return (
// <View style={styles.container}>
//     <Text style={{fontSize: 30}}>Note List</Text>
//     <AddItem addItem={addItem}/>
//     <ListItems  listItems={list}/>
//     <StatusBar style="auto" />
// </View>
// );
// }


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
});






// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, Button, StyleSheet, Animated, SafeAreaView, TouchableHighlight, TouchableOpacity, Switch, PanResponder } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Constants from 'expo-constants';
// import { TextInput } from 'react-native-web';


// function HomeScreen({ navigation, route }) {
  
//   return (
//     <View style={{ alignItems: 'center' }}>
//         <View style={{ flexDirection: 'row', minWidth: 1000, gap: 10, marginLeft: 20, marginTop: 10 }}>
//             <Button title="Support" onPress={() => navigation.navigate('Support')}/>
//             <Button title="Contacts" onPress={() => navigation.navigate('Contacts')}/>
//             <Button title="About us" onPress={() => navigation.navigate('About us')}/>
//             <Button title="Loading" onPress={() => navigation.navigate('Loading')}/>
//         </View>
//         <Text style={{fontSize: 50, fontFamily: 'American Typewriter, serif', marginTop: 20}}>Hi and Welcome to our New Website!</Text>
//     </View>
//   );
// }

// function LoadingScreen({ navigation, route }) {
//     const pan = useRef(new Animated.ValueXY()).current;
//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event([
//         null,
//         { dx: pan.x, dy: pan.y }
//       ]),
//       onPanResponderRelease: () => {
//         Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
//       }
//     })
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag & Release this box!</Text>
//       <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }]
//         }}
//         {...panResponder.panHandlers}
//       >
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// }

// function SupportScreen({ navigation, route }) {

//     let [val, setVal] = useState(0)

//     return (
//       <View
//       style={{ alignItems: 'center', flex: 1, backgroundColor: '#AFEEEE' }}>
//           <Text style={{ marginTop: 50, fontSize: 15}}>{val}</Text>
//         <TouchableHighlight activeOpacity="0.5" onPress={()=>{setVal(val+1)}} style={{backgroundColor:"green", marginBottom: 10, borderRadius: 3, padding: 5}}>
//           <Text style={{fontSize: 15}}>Plus</Text>
//           </TouchableHighlight>
//           <TouchableOpacity activeOpacity="0.5" onPress={()=>{setVal(val-1)}} style ={{backgroundColor: "red", borderRadius: 3, padding: 5}}>
//           <Text style={{fontSize: 15}}>Minus</Text>
//           </TouchableOpacity>
//       </View>
//     );
// }   

// function ContactsScreen({ navigation, route }) {

//   return (
//     <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFC0CB' }}>
//         <Text>Contacts</Text>
//     </View>
//   )
// }

// function AboutUsScreen({ navigation, route }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFEFD5'}}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About Us</Text>
//         </View>
//     )
// }


// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="About us" component={AboutUsScreen} />
//         <Stack.Screen name="Contacts" component={ContactsScreen}/>
//         <Stack.Screen name="Support" component={SupportScreen}/>
//         <Stack.Screen name="Loading" component={LoadingScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     titleText: {
//       fontSize: 14,
//       lineHeight: 24,
//       fontWeight: "bold"
//     },
//     box: {
//       height: 150,
//       width: 150,
//       backgroundColor: "blue",
//       borderRadius: 5
//     }
//   });
  

// export default App;








// function CurrentsScreen({ route, navigation }) {

//   const { itemId, color } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Currents Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>color: {JSON.stringify(color)}</Text>
//       <Button
//         title="Go to Currents..."
//         onPress={ () => navigation.push("Currents", {
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




