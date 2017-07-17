/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';

import RenderRow from './components/Row'

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
    <RenderRow item={item} />
  )


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput style={styles.textInput}
          placeholder="Add todo"></TextInput>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.whiteText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={styles.whiteText}>Your Todos</Text>
        </View>
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
    backgroundColor: '#F5FCFF'
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: 8
  },
  textInput: {
    flex:1,
    flexDirection: 'column'
  },
  button: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    backgroundColor: '#9b59b6',
    borderRadius: 50,
  },
  whiteText: {
    color: '#ffffff'
  },
  title: {
    backgroundColor: '#8e44ad',
    padding: 10,
  }
});
