import React  from "react";
import 'react-native-gesture-handler';
import { View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from "@expo/vector-icons";
import UserIcon from './assets/svgs/user';
import SignIn from "./src/screens/SignIn";
import Welcome from "./src/screens/Welcome";
import UserInfo from "./src/screens/UserInfo";
import Shop from "./src/screens/Shop";
import DrawerDesign from './src/components/DrawerDesign';
import SignUp from "./src/screens/SignUp";
import { Provider } from 'react-redux';
import Cart from './src/screens/Cart';
import store from './store';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
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

function FirstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: '', 
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}

function SecondScreenStack({ navigation }) {
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
          backgroundColor: '#F4EFEF', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: '', 
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: '', 
        }}
      />
    </Stack.Navigator>
  );
}

function UserInfoScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="UserInfo">
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          title: '', 
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}


function ShopScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Shop">
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: '', 
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: '', 
          headerLeft: () => (
            <Image source={require('./assets/logo_.png')} resizeMode={'cover'}  marginStart={20}/>
          ),
          headerRight: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#F4EFEF', 
          },
          headerTintColor: '#000', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Welcome"
        drawerContentOptions={{
          activeTintColor:'red',
          activeBackgroundColor: "#808080",
          itemStyle: { marginVertical: 5, },
          drawerPosition: "right",
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#F4EFEF',
            width: 240,
          },
          headerShown: false,
        }}
        drawerContent={(props) => <DrawerDesign {...props} />}>
        <Drawer.Screen
          name="Welcome"
          options={{ drawerLabel: 'Home', color: "#52A860" }}
          component={FirstScreenStack}
        />
        <Drawer.Screen
          name="Shop"
          options={{ drawerLabel: 'Shop' }}
          component={ShopScreenStack}
        />
        <Drawer.Screen
          name="SignIn"
          options={{ drawerLabel: 'Signin/SignUp' }}
          component={SecondScreenStack}
        />
        <Drawer.Screen
           name={"UserInfo"}
           options={{
            title: '',
           drawerIcon:({focused})=> <UserIcon color={focused ? "#52A860" : "black"}/>}}
           component={UserInfoScreenStack}
         />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;