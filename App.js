import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SliderComponent,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Picker} from '@react-native-community/picker';
//스크린 임포트

const axios = require('axios');
const MkPicker = require('./function/Mkpicker');
//임시데이터
const DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
    writer: '유저2',
    content:
      '토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Second Item',
    writer: '유저1',
    content:
      '강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'First Item',
    writer: '유저1',
    content:
      '고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item',
    writer: '유저5',
    content:
      '토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼토끼',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d79',
    title: 'Second Item',
    writer: '유저5',
    content:
      '강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지강아지',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'First Item',
    writer: '유저5',
    content:
      '고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이고양이',
  },
];

//인증게시판 스크린 클래스
class AuthBoardScreen extends Component {
  constructor(props) {
    super(props);
    // console.log('Auth', this.props.data2);
  }
  state = {
    major: '000',
    sido: '000',
    target: '000',
  };
  // 변경되는 것을 자동으로 리플래시 되면서 반영함.
  componentDidMount() {
    //변경되는 것 실행할 곳
  }

  render() {
    //포스트 하나 만드는 메서드
    let Item = ({title, writer}) => (
      <View style={styles.item}>
        <Text style={styles.postTitle}>{title} </Text>
        <Text style={styles.postTitle}>{writer}</Text>
      </View>
    );
    let renderItem = ({item}) => (
      <Item title={item.title} writer={item.writer} />
    );

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>인증게시판</Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 120, height: 50}}>
            <MkPicker
              filterName={'sido'}
              url={'http://myks790.iptime.org:8082/board/location'}
            />
          </View>
          <View style={{width: 120, height: 50}}>
            <MkPicker
              filterName={'major'}
              url={'http://myks790.iptime.org:8082/board/major'}
            />
          </View>
          <View style={{width: 120, height: 50}}>
            <MkPicker
              filterName={'target'}
              url={'http://myks790.iptime.org:8082/board/target'}
            />
          </View>
        </View>
        <View style={styles.tablHheader}>
          <View>
            <Text>제목</Text>
          </View>
          <View>
            <Text>작성자</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

// 자유게시판 스크린
class BoardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>자유게시판입니다.</Text>
      </View>
    );
  }
}
// 마이페이지 스크린
class Mypage extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>마이페이지입니다.</Text>
      </View>
    );
  }
}
//푸쉬알람 스크린
//스크롤뷰 + 플로팅버튼
class PushAlarm extends Component {
  render() {
    return (
      <ScrollView>
        <Text>
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다.{' '}
          {'\n'}
          푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}푸쉬입니다. {'\n'}
        </Text>
      </ScrollView>
    );
  }
}

// 탭 부분
const Tab = createBottomTabNavigator();
// 하단탭
class MyTabs extends Component {
  constructor(props) {
    super(props);
    console.log('MyTabs', this.props.data);
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="인증게시판"
          component={AuthBoardScreen}
          data2={this.props.data}
        />
        <Tab.Screen name="자유게시판" component={BoardScreen} />
        <Tab.Screen name="마이페이지" component={Mypage} />
        <Tab.Screen name="푸쉬알람" component={PushAlarm} />
      </Tab.Navigator>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'adaa'};
  }
  componentDidMount() {
    axios.get('http://myks790.iptime.org:8082/board/major').then((response) => {
      this.setState({data: response.data});
      // this.setState({data: '인증게시판'});
      // console.log(response.data);
    });
  }
  render() {
    return (
      <NavigationContainer>
        <Text>{this.state.data[0].name}</Text>
        {/* <Text>{this.state.data}</Text> */}
        <MyTabs data={this.state.data} />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginVertical: 2,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
  },
  postTitle: {
    fontSize: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tablHheader: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginVertical: 2,
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
  },
});
