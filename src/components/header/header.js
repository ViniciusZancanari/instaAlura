import React, {Fragment} from 'react';
import {
    Image,
    Text,
    View
} from "react-native";

import screenStyle from "./style.js";
const Header = ({userName,urlImage}) =>{
    return (
    <View style= {screenStyle.header}>
        <Image 
        source = {{uri: urlImage} }
        style = {screenStyle.userPicture}
        />
        <Text>{userName}</Text>
    </View>
    )
}

export default Header;