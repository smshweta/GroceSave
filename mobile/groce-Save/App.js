import React from "react";
import 'react-native-gesture-handler';
import { View, TouchableOpacity, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from "@expo/vector-icons";
import SignIn from "./src/screens/SignIn";
import Welcome from "./src/screens/Welcome";
import PriceCompare from "./src/screens/PriceCompare";
import UserInfo from "./src/screens/UserInfo";
import Shop from "./src/screens/Shop";
import ItemList from "./src/screens/ItemList";
import DrawerDesign from './src/config/DrawerDesign';
import SignUp from "./src/screens/SignUp";
import { 
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
  useFonts
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Entypo name="menu" size={30} style={{ right: 20, color: "#000" }}/>
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerLeft: () => (
          <Image source={require('./assets/logo_.png')} resizeMode={'cover'} marginStart={20}/>
        ),
        headerRight: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#F4EFEF', //Set Header color  #F4EFEF
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: '', //Set Header Title
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: '', //Set Header Title
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '', //Set Header Title
        }}
      />
      {/* <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: '', //Set Header Title
        }}
      /> */}
    </Stack.Navigator>
  );
}

function userInfoScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="UserInfo">
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}


function shopScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', //Set Header color
          },
          headerTintColor: '#000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PriceCompare"
        component={PriceCompare}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', //Set Header color
          },
          headerTintColor: '#000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function priceCompareScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="PriceCompare">
      <Stack.Screen
        name="PriceCompare"
        component={PriceCompare}
        options={{
          title: '', //Set Header Title
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function mainScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerLeft: () => (
          <Image source={require('./assets/logo_.png')} resizeMode={'cover'} marginStart={20}/>
        ),
        headerRight: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#F4EFEF', //Set Header color  #F4EFEF
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: '', //Set Header Title
        }}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: '', //Set Header Title
        }}
      />
      <Stack.Screen
        name="PriceCompare"
        component={PriceCompare}
        options={{
          title: '', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="PriceCompare" component={PriceCompare} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Welcome"
        drawerContentOptions={{
          activeTintColor: '#FF0000',
          itemStyle: { marginVertical: 5, },
          drawerPosition: "right",
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#DDDDDD',
            width: 240,
          },
          headerShown: false,
        }}
        drawerContent={(props) => <DrawerDesign {...props} />}>
        <Drawer.Screen
          name="Welcome"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="Shop"
          options={{ drawerLabel: 'Shop' }}
          component={shopScreenStack}
        />
        <Drawer.Screen
          name="SignIn"
          options={{ drawerLabel: 'Signin/SignUp' }}
          component={secondScreenStack}
        />
        {/* <Drawer.Screen
          name="UserInfo"
          options={{ drawerLabel: '' }}
          component={userInfoScreenStack}
        />
        <Drawer.Screen
          name="Shop"
          // options={{ drawerLabel: '' }}
          component={shopScreenStack}
        />
        <Drawer.Screen
          name="PriceCompare"
          options={{ drawerLabel: '' }}
          component={priceCompareScreenStack}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;