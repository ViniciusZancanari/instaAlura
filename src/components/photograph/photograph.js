import React, {Fragment} from 'react';
import {
    Image,
    Text
} from "react-native";

import screenStyle from "./style.js";

const Photograph =({urlPhotograph,description}) =>{
    return (
        <Fragment>
            <Image 
            source = {{uri: urlPhotograph}}
            style = {screenStyle.userPicture}
            />    
            <Text>{description}</Text>
            <Image 
            source = {getLikeImage(0)}
            style = {screenStyle.like}
            />
        </Fragment>
    )
}

const getLikeImage = (numberLikes) =>{
    if (numberLikes > 0){
        return require('../../../res/img/s2-checked.png')
    }
    else{
        return require('../../../res/img/s2.png')
    }

}

export default Photograph;