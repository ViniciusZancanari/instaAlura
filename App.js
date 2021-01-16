import React, {Fragment, useState, useEffect} from 'react';
import {
        ScrollView,
        FlatList,       
} from 'react-native';

import { Header }from './src/components/header';
import { Photograph } from './src/components/photograph';

const App = () => {
  
  const [photographs,setPhotographs] = useState([]);

  useEffect(()=> {
    const readPhotographs = async () =>{
      const photographHTTP = await fetch ("http://10.0.2.2:3030/feed");
      const photographJSON = await photographHTTP.json();
      setPhotographs(photographJSON);
    }
    readPhotographs();
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
          <Photograph urlPhotograph= {item.url}/>
        </Fragment>
      }/>
      </ScrollView>
  )
};

export default App;
