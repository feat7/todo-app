/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Footer extends Component {
  render() {
    let { changeTodo } = this.props;
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => changeTodo('All')}><Text style={styles.text}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeTodo('Active')}><Text style={styles.text}>Active</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => changeTodo('Completed')}><Text style={styles.text}>Completed</Text></TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 2
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2ecc71',
    borderRadius: 20,
    justifyContent: 'space-around'
  },
  text: {
    color: '#000',
    fontWeight: '100'
  }
});
