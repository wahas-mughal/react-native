import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header';
import HelpScreen from '../screens/Helpscreen';


const screens = {
    Help: {
        screen: HelpScreen,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title = 'Help'/>
            }
        }
    }
}


const Helpstack = createStackNavigator(screens, {
defaultNavigationOptions:{
    headerStyle:{
        backgroundColor: '#03c4ff'
    }
}
});

export default Helpstack;