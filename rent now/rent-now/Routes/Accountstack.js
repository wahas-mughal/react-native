import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header';
import MyAccount from '../screens/Myaccountscreen';
import Edit from '../screens/AccountStackScreens/Editscreen';


const screens = {
    Account: {
        screen: MyAccount,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = 'Account' />
               }
            }
    }, 

    Edit:{
        screen: Edit,
        navigationOptions: {
            title: 'Edit',
            headerTitleStyle:{
                fontSize: 20,
            }
        },
    },
}

const Accountstack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#03c4ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 18,
        },
        headerTitleAlign: 'center',
    }
});

export default Accountstack;