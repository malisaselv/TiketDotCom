import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStore} from 'redux';

const rootReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DESC':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(rootReducer);

const dispatch = type => {
  store.dispatch({type});
};

class FingerPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {val: 0};
  }
  render() {
    store.subscribe(() => {
      this.setState({val: store.getState()});
    });
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
        }}>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            backgroundColor: 'red',
          }}
          onPress={() => dispatch('DESC')}>
          -
        </Text>
        <View style={{backgroundColor: '#ddd', flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{this.state.val}</Text>
        </View>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            backgroundColor: 'red',
          }}
          onPress={() => dispatch('INC')}>
          +
        </Text>
      </View>
    );
  }
}

export default FingerPrint;
