import React, {Fragment, useState} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { getLikeImage, likePhotograph} from '../../api/likes';

import screenStyle from "./style";

const Photograph =({urlPhotograph,description,numberLikes}) =>{

    const [liked, setLiked] = useState(false);
    const [likes,setLikes] = useState(numberLikes);

    const clickLike = () =>{
        const [newStateLike, numberOfLike] = likePhotograph(liked,likes)
        setLikes(numberOfLike)
        setLiked(newStateLike)
    }

    
    return (
        <Fragment>
            <Image 
            source = {{uri: urlPhotograph}}
            style = {screenStyle.userPicture}
            />    
            <Text>{description}</Text>
            <View style = {screenStyle.viewLike}>
                <TouchableOpacity onPress = {clickLike}>
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
export default Photograph;