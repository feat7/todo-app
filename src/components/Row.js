/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity
} from 'react-native';

export default class Row extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let { item, index, change, deleteTodo } = this.props;
    return (
      <View style={styles.rowContainer}>
        <TouchableOpacity onLongPress= { (targetItem = index) => { deleteTodo(index) } }>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
        <Switch style={styles.switch} value={item.completed} onValueChange={ (value, targetItem = index) => { change(value, targetItem); } } />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd'
  },
  text: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 16,
    color: '#000'
  },
  switch: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})
