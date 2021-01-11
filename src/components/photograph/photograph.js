import React, {Fragment} from 'react';
import {
    Image,
    Text
} from "react-native";

import screenStyle from "./style.js";
const Photograph =() =>{
    return (
        <Fragment>
            <Image 
            source = {require ("../../../res/img/alura.jpg")}
            style = {screenStyle.userPicture}
            />    
            <Text>Descrição da foto</Text>
        </Fragment>
    )
}

export default Photograph;