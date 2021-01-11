import {
        Dimensions,
        StyleSheet,       
} from 'react-native';

const screen = Dimensions.get("screen").width;
const screenStyle = StyleSheet.create ({
    userPicture:{
    width:screen,
    height:screen
    }
  })

export default screenStyle;
  