import React, {Fragment, useState, useEffect} from 'react';
import {
        ScrollView,
        FlatList,       
} from 'react-native';

import { Header }from './src/components/header';
import { Photograph } from './src/components/photograph';
import { Comments } from './src/components/comments'
import  readPhotographs from './src/api/feed';

const App = () => {
  
  const [photographs,setPhotographs] = useState([]);

  useEffect(()=> {
    
    readPhotographs(setPhotographs);
  },[])

  
  return ( 
    <ScrollView>
   
      <FlatList
        data = {photographs}
        keyExtractor={(item) => item.id.toString()}
        renderItem = {({item}) =>
      
        <Fragment>
          <Header 
          userName = {item.userName}
          urlImage = {item.userURL}
          />
          <Photograph 
          urlPhotograph = {item.url}
          description = {item.description}
          numberLikes = {item.likes}
          />          
          <Comments comments =  {item.comentarios}/>
        </Fragment>
        }
        />
      </ScrollView>
  )
};

export default App;
