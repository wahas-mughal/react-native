import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header';
import ReferScreen from '../screens/AccountStackScreens/Referscreen';


const screens = {
    Help: {
        screen: ReferScreen,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title = 'Refer and Earn'/>
            }
        }
    }
}


const Referstack = createStackNavigator(screens, {
defaultNavigationOptions:{
    headerStyle:{
        backgroundColor: '#03c4ff'
    }
}
});

export default Referstack;