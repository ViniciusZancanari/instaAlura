import React, {Fragment} from 'react';
import {
    Image,
    Text,
    View
} from "react-native";

import screenStyle from "./style.js";
const Header = ({userName}) =>{
    return (
    <View style= {screenStyle.header}>
        <Image 
        source = {require ("../../../res/img/alura.jpg")}
        style = {screenStyle.userPicture}
        />
        <Text>{userName}</Text>
    </View>
    )
}

export default Header;