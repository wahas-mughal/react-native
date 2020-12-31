import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';


const CustomHeaderBtn = props => {
return <HeaderButton {...props} 
IconComponent = {Ionicons} 
iconSize = {30} 
color = '#0065ff'/>
}

export default CustomHeaderBtn;