/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      todoList: [
        {
          id: 1,
          title: "This is title one!"
        },
        {
          id: 2,
          title: "This is title two!"
        },
        {
          id: 3,
          title: "This is title three!"
        }
      ]
    }

  }

  _renderItem = ({item}) => (
    <Text>{item.title}</Text>
  )


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.todoList}
          keyExtractor={item => item.id}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03d387'
  },
});
