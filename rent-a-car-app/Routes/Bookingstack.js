import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header';
import MyBookings from '../screens/Mybookingscreen';
import BookingHistory from '../screens/BookingStackScreens/Bookinghistoryscreen';


const screens = {
    Bookings: {
        screen: MyBookings,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = 'My Bookings'/>
               } 
        
            }
    }, 
    BookingHistory:{
        screen: BookingHistory,
        navigationOptions:{
            title: 'Booking History'
        }
    }
   
   
}

const bookingStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#03c4ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            fontSize: 20,
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
    }
});

export default bookingStack;