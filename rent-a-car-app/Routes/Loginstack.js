import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/LoginScreens/logins';
import SignUp from '../screens/LoginScreens/signup';
import forgotPassword from '../screens/LoginScreens/forgotpassword';
import IdentityScreen1 from '../screens/LoginScreens/identityscreena';
import IdentityScreen2 from '../screens/LoginScreens/identityscreenb';
import IdentityScreen3 from '../screens/LoginScreens/identityscreenc';
import {drawNavigation} from './drawer';



// const screens = {
//     Login: {
//         screen: Login,
//         navigationOptions:{
//             headerShown: false
//         }
//     },
    
//     Signup:{
//         screen: SignUp,
//         navigationOptions:{
//             headerShown: false
//         }
//     },

//     Forgetpassword:{
//         screen: forgotPassword,
//         navigationOptions:{
//             headerShown: false
//         }
//     },

//     'Identification (1/1)':{
//         screen: IdentityScreen1,
//     },

//     'Identification (1/2)':{
//         screen: IdentityScreen2,
//     },

//     'Identification (1/3)':{
//         screen: IdentityScreen3,
//     },

    
// }

// const LoginStack = createStackNavigator(screens, {drawNavigation);

// export default createAppContainer(LoginStack);

