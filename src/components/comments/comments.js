import React from 'react';
import {     
        FlatList,
        Text      
} from 'react-native';

const Comments = ( {comments} ) => {
    return (
        <FlatList
        data = {comments}
        keyExtractor = {(item, index) => index.toString()}
        renderItem = {({item}) => 
            <Text>{item.text}</Text>}
        />
    );
};
export default Comments;