import React, {Fragment} from 'react';
import {
        Image,
        ScrollView,
        Dimensions,
        StyleSheet,
        FlatList
} from 'react-native';
import Header from './src/components/header';

const screen = Dimensions.get("screen").width;
const information = [
  {id: 1,user:"Vinicius"},
  {id: 2,user:"Victor"},
  {id: 3,user:"Felipe"}
]

const App = () => {
  return ( 
    <ScrollView>

      {/* SEM JSX

      ESCREVENDO APENAS COM JS

      {information.map(photography => 
      <Fragment>
        <Text>{photography.user}</Text>
        <Image
        source={require ("./res/img/alura.jpg")}
        style={screenStyle.image}
      />
      </Fragment>
      )}
      </ScrollView>
    )
  };
*/}

   
      <FlatList
        data = {information}
        keyExtractor={(item) => item.id.toString()}
        renderItem = {({item}) =>
      
        <Fragment>
          <Header userName = {item.user}/>
          <Image
          source={require ("./res/img/alura.jpg")}
          style={screenStyle.userPicture}
          />
        </Fragment>
      }/>
      </ScrollView>
  )
};

const screenStyle = StyleSheet.create ({
  userPicture:{
  width:screen,
  height:screen
  }
})


export default App;
