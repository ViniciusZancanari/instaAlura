import React, {Fragment} from 'react';
import {
        ScrollView,
        FlatList,       
} from 'react-native';

import { Header }from './src/components/header';
import { Photograph } from './src/components/photograph';

const information = [
  {id: 1,user:"Vinicius"},
  {id: 2,user:"Victor"},
  {id: 3,user:"Felipe"}
]

const App = () => {
  return ( 
    <ScrollView>
   
      <FlatList
        data = {information}
        keyExtractor={(item) => item.id.toString()}
        renderItem = {({item}) =>
      
        <Fragment>
          <Header userName = {item.user}/>
          <Photograph/>
        </Fragment>
      }/>
      </ScrollView>
  )
};

export default App;
