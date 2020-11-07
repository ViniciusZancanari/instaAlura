import React, {Fragment} from 'react';
import {
    Image,
    Text
} from "react-native";

import screenStyle from "./screen.js";
const Header = ({userName}) =>{
    return (
    <Fragment>
    <Image 
    source = {require ("../../../res/img/alura.jpg")}
    style = {screenStyle.userPicture}
    />
    <Text>{userName}</Text>
    </Fragment>
    )
}

export default Header;