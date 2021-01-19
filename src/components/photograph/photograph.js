import React, {Fragment, useState} from 'react';
import {
    Image,
    Text,
    TouchableOpacity
} from "react-native";

import screenStyle from "./style.js";

const Photograph =({urlPhotograph,description}) =>{

    const [liked, setLiked] = useState(false);

    const likePhotograph = () => {
        setLiked(!liked);
    }
    return (
        <Fragment>
            <Image 
            source = {{uri: urlPhotograph}}
            style = {screenStyle.userPicture}
            />    
            <Text>{description}</Text>
            <TouchableOpacity onPress = {likePhotograph}>
                <Image 
                source = {getLikeImage(liked)}
                style = {screenStyle.like}
                />
            </TouchableOpacity>
        </Fragment>
    )
}

const getLikeImage = (liked) =>{
    if (liked > 0){
        return require('../../../res/img/s2-checked.png')
    }
    else{
        return require('../../../res/img/s2.png')
    }

}

export default Photograph;