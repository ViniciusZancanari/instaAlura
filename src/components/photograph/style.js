import {
        Dimensions,
        StyleSheet,       
} from 'react-native';

const screen = Dimensions.get("screen").width;
const screenStyle = StyleSheet.create ({
    userPicture:{
    width:screen,
    height:screen
    },
    like:{
      height:20,
      width:20,
      margin:5
    },
    viewLike:{
      flexDirection:'row',
      alignItems:'center',
    }
  })

export default screenStyle;
  