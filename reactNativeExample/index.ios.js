/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput
} from 'react-native';

export default class reactNativeExample extends Component {
  constructor () {
    super()
    this.onGet = this.onGet.bind(this)
    this.state = {
      rules: [],
      text: '陈林'
    }
  }


  onGet () {
    fetch('https://active.wsloan.com/json/active_may/rule.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          rules: data.rank.items
        })
      }).catch(err => {
        console.log('error')
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({text})}
        />
        <Text style={styles.welcome}>
          Hello React Native {this.state.text}
        </Text>
        <Button
          onPress={this.onGet}
          title="获取数据"
          color="#f23b66"
        />
        <Image
          style={styles.icon}
          source={require('./images/icon.png')}
        />
        {this.state.rules.map(item =>
          <Text style={styles.list} key={item.index}>{item.text}</Text>
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  list: {
    marginLeft: 32,
    marginRight: 32,
    marginBottom: 12
  }
});

AppRegistry.registerComponent('reactNativeExample', () => reactNativeExample);
