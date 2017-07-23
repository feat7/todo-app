/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import RenderRow from './components/Row'
import Footer from './components/Footer'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      todoList: [
        {
          title: "This is title one!",
          completed: true
        },
        {
          title: "This is title two!",
          completed: true
        },
        {
          title: "This is title three!",
          completed: false
        }
      ],
      todo: null
    }

    this._handleAddTodo = this._handleAddTodo.bind(this);
    this._handleChange = this._handleChange.bind(this);

  }

  _renderItem = ({item, index}) => (
    <RenderRow item={item} index={index} change={this._handleChange} />
  )

  _handleAddTodo() {
    if(this.state.todo)
      this.setState({
        todoList: [
          ...this.state.todoList, {
            title: this.state.todo
          }
        ]
      });
    this.setState({todo: null});
  }

  _handleChange(value, index) {
    console.log(value);

    let newList  = this.state.todoList;

    // console.log(newList);
    newList[index].completed = value;
    this.setState({
      todoList: newList
    });

    console.log(this.state);
    // console.log("item", item);
    //toggle change
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput underlineColorAndroid='transparent'
          style={styles.textInput}
          placeholder="Add todo"
          onChangeText={(text) => {
              this.setState({todo: text})
            }
          }
          value={this.state.todo}
          >
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={this._handleAddTodo}>
            <Text style={styles.whiteText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={[styles.whiteText, {fontSize: 16}]}>Your Todos</Text>
        </View>
        <FlatList
          data={this.state.todoList}
          keyExtractor={(item, i) => i}
          renderItem={this._renderItem}
          extraData={this.state}
        />
      <Footer />
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
    flexDirection: 'row',
    padding: 4,
    borderWidth: 1,
    borderColor: '#000'
  },
  textInput: {
    flex:1,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ddd',
  },
  button: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  whiteText: {
    color: '#ffffff'
  },
  title: {
    backgroundColor: '#2c3e50',
    padding: 10,
  }
});
