import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header';
import MyAccount from '../screens/Myaccountscreen';
import BankDetails from '../screens/AccountStackScreens/Bankdetailsscreen';
import ChangePassword from '../screens/AccountStackScreens/Changepasswordscreen';
import Edit from '../screens/AccountStackScreens/Editscreen';
import Spinner from '../components/Spinner';

const screens = {
    Account: {
        screen: MyAccount,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = 'Account' />
               }
            }
    }, 

    BankDetails:{
        screen: BankDetails,
        navigationOptions: {
            title: 'Bank Details',
        },  
    },

    ChangePassword:{
        screen: ChangePassword,
        navigationOptions: {
            title: 'Change Password',
        },  
    },

    Edit:{
        screen: Edit,
        navigationOptions: {
            title: 'Edit',
        },
    },
    Spinner: {
        screen: Spinner,
        navigationOptions:{
            headerShown: false
        }
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