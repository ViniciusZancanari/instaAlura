import React, {Fragment} from 'react';
import {
    Image,
    Text
} from "react-native";

import screenStyle from "./style.js";
const Photograph =({urlPhotograph}) =>{
    return (
        <Fragment>
            <Image 
            source = {{urlPhotograph}}
            style = {screenStyle.userPicture}
            />    
            <Text>Descrição da foto</Text>
        </Fragment>
    )
}

export default Photograph;