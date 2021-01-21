  
import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput
} from "react-native";

import screenStyle from './style';

const Comments = ({ comments }) => {
    const [stateComments, setComments] = useState(comments);


    const addComment = () => {
        inputClear.clear();
        const newComment = {
            date: Date.now(),
            text: inputComment,
            userName: "vini_zanca"
        }

        setComments([...stateComments, newComment]);
    }


    let inputClear;
    let inputComment = "";
    return (
        <Fragment>

            <FlatList
                data={stateComments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View style={screenStyle.inline}>
                    <Text>{item.userName} </Text>
                    <Text> {item.text}</Text>
                </View>
                }
            />
            <View style={screenStyle.inline}>
                <TextInput
                    ref={textInput => inputClear = textInput}
                    onChangeText={text => inputComment = text}
                    placeholder={"Deixe seu comentário..."}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={addComment}>
                    <Image source={require("../../../res/img/send.png")}
                        style={screenStyle.imgSend} />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Comments;