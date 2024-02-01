import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Pantalla de acceso</Text>
            </View>
        )
    }
}
constructor(props) {
    super(props);
    this.state = {
        email:"",
        password:""
    };
   }
handleLogin = (email, password) => {
      firebase
      auth()
      .signInWithMyEmailAndPassword(email,password)
      .then(()=>{
        this.props.navigation.navigate("BottomTab");
      })
      .catch(error =>{
       Alert.alert(error.message);
      })
    };
const styles = StyleSheet.create({
    loginBox:
    {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin:10,
        paddingLeft:10
    }
})
