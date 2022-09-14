import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated, SafeAreaView, FlatList, TouchableHighlight, TouchableOpacity, Switch, PanResponder, Modal, ScrollView, Pressable, StatusBar, TextInput, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from '@react-native-community/slider';
import CalculatorScreen from './screens/CalculatorScreen';

const DATA = [
  {
    id: '1',
    title: '754-265-2936',
  },
  {
    id: '2',
    title: '281-341-1870',
  },
  {
    id: '3',
    title: '407-704-8669',
  },
  {
    id: '4',
    title: '260-209-0192',
  },
  {
    id: '5',
    title: '704-608-1666',
  },
  {
    id: '6',
    title: '712-949-3044',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#BC8F8F' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginLeft: 20, marginTop: 10 }}>
            <Button title="Support" onPress={() => navigation.navigate('Support')}/>
            <Button title="Contacts" onPress={() => navigation.navigate('Contacts')}/>
            <Button title="About us" onPress={() => navigation.navigate('About us')}/>
            <Button title="Loading" onPress={() => navigation.navigate('Loading')}/>
            <Button title="Calculator" onPress={() => navigation.navigate('Calculator')}/>
        </View>
        <Text style={{fontSize: 50, fontFamily: 'American Typewriter, serif', marginTop: 20}}>Hi and Welcome to our New Website!</Text>
        <Text style={{fontSize: 35, fontFamily: 'American Typewriter, serif', marginTop: 20}}>Here we post random things.</Text>
    </View>
  );
}

function CalcScreen({ navigation, route }) {
    return <CalculatorScreen />
}

function LoadingScreen({ navigation, route }) {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
  PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y }
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
    }
  })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

function SupportScreen({ navigation, route }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View
    style={
    {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>Phone one of these numbers to contact us</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      
    </View>
  );
 
}   

function ContactsScreen({ navigation, route }) {
  const [value, setValue] = useState(0);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}> Demo Form </Text>
      <View>
        <TextInput placeholder="Email:"
        style={{borderWidth: 1}} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password:"
          style={{borderWidth: 1}}
        />
        <Text>
          Rate your teams performance this quarter
        </Text>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#b9e4c9"
        />
        <Text>
          Slide value: {value}%
        </Text>
      </View>
    </View>
  )
}

function AboutUsScreen({ navigation, route }) {

  const workPeople = [
    { name: 'Mark Zuckerberg', id: 1 },
    { name: 'Jeff Bezos', id: 2 },
    { name: 'Alexis Ohanian', id: 3 },
    { name: 'Jack Ma', id: 4 },
    { name: 'Jack Dorsey', id: 5 },
    { name: 'Aaron Swartz', id: 6 },
    { name: 'Jawed Karim ', id: 7 },
    { name: 'Travis Kalanick', id: 8 },
  ]

  const [modalVisible2, setModalVisible2] = useState(false);
    return (
        <View style={styles.centeredView}>
          <ScrollView>
            { workPeople.map(workPeople => {
              return (
                <View id={workPeople.id}>
                  <Text style={styles.item}>{workPeople.name}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>
    )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerStyle: { backgroundColor: '#6A5ACD',}}} component={HomeScreen} />
        <Stack.Screen name="About us" options={{ headerStyle: { backgroundColor: '#F08080',}}} component={AboutUsScreen} />
        <Stack.Screen name="Contacts" options={{ headerStyle: { backgroundColor: '#6A5ACD',}}} component={ContactsScreen}/>
        <Stack.Screen name="Support" options={{ headerStyle: { backgroundColor: '#4682B4',}}} component={SupportScreen}/>
        <Stack.Screen name="Loading" options={{ headerStyle: { backgroundColor: '#ffff',}}} component={LoadingScreen}/>
        <Stack.Screen name="Calculator" options={{ headerStyle: { backgroundColor: '#ffff',}}} component={CalcScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    titleText: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: "bold",
      marginBottom: 20
    },
    box: {
      height: 150,
      width: 150,
      backgroundColor: "blue",
      borderRadius: 5
    },
    centeredView: {
      flex: 1,
      flexDirection: "column",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 25,
      marginHorizontal: 100,
      backgroundColor: "white",
    },
    modalView: {
      margin: 20,
      backgroundColor: "pink",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 1,
      shadowRadius: 10
    },
    button: {
      borderRadius: 50,
      padding: 10
    },
    buttonOpen: {
      backgroundColor: "green"
    },
    buttonClose: {
      backgroundColor: "red"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    text2: {
      fontSize: 45
    },
    container2: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 650,
      width: 600,
    },
    text: {
      fontSize: 38,
      shadowOffset: {
        width: 5,
        height: 2
      },
      textAlign: 'center'
    },
    workers: {
      borderWidth: 1,
      marginTop: 100,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    item: {
      textAlign: 'center',
      marginTop: 80,
      padding: 25,
      fontSize: 30,
      backgroundColor: 'steelblue',
    },
    header: {
      fontSize: 40,
      backgroundColor: "grey"
    },
    title: {
      fontSize: 25
    }

     
  });
  

export default App;










// import * as React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ADD8E6' }}>
//       <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10}}>Добро пожаловать в приложение "Мой Банк"!</Text>
//       <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 30}}>Вам пригодятся ссылки внизу:</Text>
//       <Button
//         onPress={() => navigation.navigate('Current')}
//         title="Текущие счета">
//       </Button>
//       <Button
//         onPress={() => navigation.navigate('Support')}
//         title="Помощь">
//       </Button>
//       <Button
//         onPress={() => navigation.navigate('Info')}
//         title="Информация о кредите">
//       </Button>
//       <Button
//         onPress={() => navigation.navigate('Transfer')}
//         title="Переводы">
//       </Button>
//     </View>
//   );
// }

// function CurrentScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Current Screen</Text>
//       <Button
//         title="Go to Support"
//         onPress={ () => navigation.navigate("Support")}
//       />
//       <Button
//         title="Go to Info"
//         onPress={ () => navigation.navigate("Info")}
//       />
//       <Button
//       title="Go to Transfer"
//       onPress={ () => navigation.navigate("Transfer")}
//         />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button 
//       title="Go Back to first screen in stack" 
//       onPress={() => navigation.popToTop()}/>
//     </View>
//   )
// }

// function SupportScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <Text>Support Screen</Text>
//         <Button
//         title="Go to Current"
//         onPress={ () => navigation.navigate("Current")}
//       />
//       <Button
//         title="Go to Info"
//         onPress={ () => navigation.navigate("Info")}
//       />
//       <Button
//       title="Go to Transfer"
//       onPress={ () => navigation.navigate("Transfer")}
//         />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button 
//       title="Go Back to first screen in stack" 
//       onPress={() => navigation.popToTop()}/>
//       </View>
//     )
// }

// function InfoScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <Text>Info Screen</Text>
//           <Button
//             title="Go to Support"
//             onPress={ () => navigation.navigate("Support")}
//             />
//             <Button
//                 title="Go to Current"
//                 onPress={ () => navigation.navigate("Current")}
//             />
//             <Button
//             title="Go to Transfer"
//             onPress={ () => navigation.navigate("Transfer")}
//                 />
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//             <Button 
//             title="Go Back to first screen in stack" 
//             onPress={() => navigation.popToTop()}/>
//         </View>
//       )
// }

// function TransferScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Transfer Screen</Text>
//             <Button
//             title="Go to Support"
//             onPress={ () => navigation.navigate("Support")}
//             />
//             <Button
//                 title="Go to Info"
//                 onPress={ () => navigation.navigate("Info")}
//             />
//             <Button
//             title="Go to Current"
//             onPress={ () => navigation.navigate("Current")}
//                 />
//             <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//             <Button 
//             title="Go Back to first screen in stack" 
//             onPress={() => navigation.popToTop()}/>
//         </View>
//       )
// }



// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Current" component={CurrentScreen} />
//         <Stack.Screen name="Support" component={SupportScreen} />
//         <Stack.Screen name="Transfer" component={TransferScreen} />
//         <Stack.Screen name="Info" component={InfoScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;










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


// const styles = StyleSheet.create({
// container: {
// flex: 1,
// backgroundColor: "#fff",
// alignItems: "center",
// justifyContent: "center",
// },
// });







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




