import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Counter from '../../../redux/actions/Counter';
const {increaseCount, decreaseCount, setCount} = Counter;
// import {Counter as counterAction} from '../../../redux/actions';
// import {counter as counterAction} from '../../../redux/actions';

class CounterApp extends Component {
  render() {
    console.log(this.props.increaseCont);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 200,
          padding: 16,
        }}>
        <TouchableOpacity onPress={() => this.props.decreaseCounter(1)}>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: 'red',
            }}>
            -
          </Text>
        </TouchableOpacity>
        <View style={{backgroundColor: '#ddd', alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>{this.props.counter}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.increaseCounter({value: 1})}>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: 'blue',
            }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.setCounter(123)}>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: 'red',
            }}>
            SET
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({counter: state.root.counter});

const mapDispatchToProps = {
  increaseCounter: increaseCount,
  decreaseCounter: decreaseCount,
  setCounter: setCount,
};

// function mapDispatchToProps(dispatch) {
//   // increaseCounter: dispatch(counterAction.increase);
//   return {
//     increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
//     decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
//     setCounter: counter_value =>
//       dispatch({type: 'SET_COUNTER', payload: {counter_value}}),
//   };
// }
const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(CounterApp);
