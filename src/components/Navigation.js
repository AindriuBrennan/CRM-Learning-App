import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import Icon from 'react-native-vector-icons/EvilIcons';


const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        showLabel: true,
        showIcon: true,
        style: {
          backgroundColor: '#26a69a'
        }
      }}>
      <Tab.Screen name='People' component={PeopleList} />
      <Tab.Screen name='Add' component={AddPerson} />
      <Tab.Screen name='Company' component={CompanyList} />
    </Tab.Navigator>
  )
}

export default Navigator