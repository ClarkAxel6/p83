import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import { Ionicons } from '@expo/vector-icons';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            }

            else if (route.name === 'CreatePost') {
              iconName = focused
                ? 'create'
                : 'create-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color}/>
         }
        })}
        
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
      >
        <Tab.Screen name = 'Feed' component = {Feed}/>
        <Tab.Screen name = 'CreatePost' component = {CreatePost}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabNavigator;