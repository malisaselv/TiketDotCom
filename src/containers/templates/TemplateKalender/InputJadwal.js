import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  SafeAreaView,
  Switch,
  Modal,
} from 'react-native';
import moment from 'moment';
import InputDate from './InputDate';

class InputJadwal extends Component {
  state = {
    toggleSwitchValue: false,
    // startDate: '',
    depatureDate: new Date(),
    arrivalDate: new Date(),
  };

  _onToggleSwitch = () =>
    this.setState({
      toggleSwitchValue: !this.state.toggleSwitchValue,
    });

  handleDateChange = startDate => this.setState({startDate});

  test = tipe => {
    let minDate = '';
    if (tipe === 'Pergi') {
      minDate = new Date();
      return minDate;
    } else {
      minDate = this.startDate;
      return minDate;
    }
  };

  render() {
    const {toggleSwitchValue} = this.state;
    console.log(this.state.depatureDate);
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <InputDate
            modal="1"
            title="Pergi"
            iconName="calendar-outline"
            border="0"
            // onDateChange={this.handleDateChange}
            // minDate={this.test('Pergi')}
            value={this.state.depatureDate}
            minDate={this.state.depatureDate}
            onChange={data => {
              console.log('data', data);
              this.setState({
                depatureDate: data,
                arrivalDate: data,
              });
            }}
          />
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 14, color: '#8A93A7'}}>Pulang-Pergi?</Text>
            <Switch
              onValueChange={this._onToggleSwitch}
              value={this.state.toggleSwitchValue}
              thumbColor={{true: '#0064D2', false: '#ffffff'}}
              trackColor={{true: '#0064d2', false: '#DDDDDD'}}
              ios_backgroundColor="#FFFFFF"
              style={{
                justifyContent: 'flex-end',
                transform: [{scaleX: 1.1}, {scaleY: 1.1}],
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#dee2ee',
            borderBottomWidth: 1,
            marginTop: 10,
          }}
        />
        {toggleSwitchValue ? (
          <InputDate
            modal="2"
            title="Pulang"
            iconName="calendar-outline"
            onDateChange={this.startDate}
            border="1"
            mt="1"
            mb="1"
            minDate={moment(this.state.depatureDate).format(
              'ddd, DD MMMM YYYY',
            )}
            value={this.state.arrivalDate}
            onChange={data => {
              console.log('data', data);
              this.setState({
                arrivalDate: data,
              });
            }}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default InputJadwal;
