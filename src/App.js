/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import RenderRow from './components/Row'
import Footer from './components/Footer'

export default class App extends Component {

  constructor() {
    super()


    this.state = {
      todoList: [

      ],
      todo: null,
      show: 'All'
    }

    this._handleAddTodo = this._handleAddTodo.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._changeTodo = this._changeTodo.bind(this);
    this._showData = this._showData.bind(this);

  }

  componentDidMount() {
    this.setState({}, () => this._get());
  }


  async _save() {
    try {
      await AsyncStorage.setItem('@TodoApp:todo', JSON.stringify(this.state));
      console.log("saved!");
    } catch (error) {
      console.error(error);
      // Error saving data
    }
  }

  async _get() {
    try {
      const myArray = await AsyncStorage.getItem('@TodoApp:todo');
      if (myArray !== null) {
        // We have data!!
        this.setState(JSON.parse(myArray));
        console.log(JSON.parse(myArray));
      }
    } catch (error) {
      console.error(error);
      // Error retrieving data
    }
  }


  _renderItem = ({item, index}) => (
    <RenderRow item={item} index={index} change={this._handleChange} />
  )

  _handleAddTodo() {
    if(this.state.todo) {
      this.setState({
        todoList: [
          ...this.state.todoList, {
            title: this.state.todo
          }
        ],
        todo: null
      }, () => this._save());
    }



  }

  _handleChange(value, index) {
    console.log(value);

    let newList  = this.state.todoList;

    // console.log(newList);
    newList[index].completed = value;
    this.setState({
      todoList: newList
    }, () => this._save());

    console.log(this.state);
    // console.log("item", item);
    //toggle change
  }

  _changeTodo(type = 'All') {
    this.setState({
      show: type
    })
  }

  _showData() {
    switch (this.state.show) {
      case 'All':
        return this.state.todoList;
        break;
      case 'Completed':
        return this.state.todoList.filter((value) => value.completed );
        break;
      case 'Active':
        return this.state.todoList.filter((value) => !value.completed );
        break;
      default:
        return this.state.todoList;
    }
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
          <Text style={[styles.whiteText, {fontSize: 16}]}>{this.state.show}</Text>
        </View>
        <FlatList
          data={this._showData()}
          keyExtractor={(item, i) => i}
          renderItem={this._renderItem}
          extraData={this.state}
        />
      <Footer changeTodo={this._changeTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  },
  header: {
    flexDirection: 'row',
    padding: 4,
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
    borderWidth: 1,
    borderColor: '#000'
  }
});
