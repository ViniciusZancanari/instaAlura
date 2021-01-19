import React, {Fragment, useState} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import screenStyle from "./style.js";

const Photograph =({urlPhotograph,description,numberLikes}) =>{

    const [liked, setLiked] = useState(false);
    const [likes,setLikes] = useState(numberLikes);

    const likePhotograph = () => {
        let numberOfLike = likes;
        if(liked){
            numberOfLike --;
        }
        else{
            numberOfLike ++;
        }
        setLikes(numberOfLike);
        setLiked(!liked);
    }
    return (
        <Fragment>
            <Image 
            source = {{uri: urlPhotograph}}
            style = {screenStyle.userPicture}
            />    
            <Text>{description}</Text>
            <View style = {screenStyle.viewLike}>
                <TouchableOpacity onPress = {likePhotograph}>
                    <Image 
                        source = {getLikeImage(liked)}
                        style = {screenStyle.like}
                    />
                </TouchableOpacity>
                <Text>{likes}</Text>
            </View>
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