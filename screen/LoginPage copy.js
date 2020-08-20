import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
const axios = require('axios');
const styles = require('../css/Styles');
//추후 함수형으로 통일 하도록하자
// 
export default function LoginPage ({route,navigation}){
  const [state, setState] = React.useState({
    cookie: '',
    email: '',
    password: '',
  });
  const onChange = (e) => {
    //input의 name
    console.log(e._dispatchInstances.memoizedProps.name);
    //input의 값
    console.log(e.nativeEvent.text);
    setText({
      ...text, // 기존의 객체를 복사한 뒤
      [e._dispatchInstances.memoizedProps.name]: e.nativeEvent.text, // name 키를 가진 값을 value 로 설정
    });
  };     
    
  handleEmail = (text) => {
    this.setState({email: text});
  };
  handlePassword = (text) => {
    this.setState({password: text});
  };
  login = (email, password) => {
    //http://myks790.iptime.org:8082/login
    //post
    //myks790@gmail.com
    //비밀번호
    const jsonForLogin = {
      email: email,
      password: password,
    };
    this.postReq('http://myks790.iptime.org:8082/login', jsonForLogin);
  };
  postReq(url, json) {
    axios
      .post(url, json)
      .then((response) => {
        console.log('요청성공', response);
        alert('성공');
        this.setState({cookie: '쿠키'});
        this.onSubmit('쿠키');
        this.getLogin('쿠키');
      })
      .catch(function (error) {
        console.log('요청실패', error);
        alert('실패');
      });
  }
  onSubmit = (cookie) => {
    this.props.route.params.onSubmit('쿠키');
  };
  getLogin = (cookie) => {
    this.props.getLoginToken('쿠키');
  };
    return (
      <View style={styles.containerLogin}>
        <TextInput
          name={"email"}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={onChange}
        />
        <TextInput
          name={"password"}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={onChange}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => login(state.email, state.password)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.submitButtonText}> 회원가입 </Text>
        </TouchableOpacity>
      </View>
    );
}
// https://www.instamobile.io/react-native-tutorials/asyncstorage-example-react-native/