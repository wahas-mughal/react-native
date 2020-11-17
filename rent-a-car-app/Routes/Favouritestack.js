import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header';
import MyFavourites from '../screens/MyFavouritescreen';


const screens = {
    Favourites: {
        screen: MyFavourites,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation = {navigation} title = 'My Favourites'/>
            }
        }
    }
}


const Favouritestack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#03c4ff',
        }
    }
})

export default Favouritestack;
