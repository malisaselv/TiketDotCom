import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  Switch,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FiturPesawat from '../../../components/molecules/FiturPesawat';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

class InputSchedule extends Component {
  state = {
    startDate: '',
    pulang,
  };
  constructor(props) {
    super(props);

    const {onHandleCalendarPergi, onHandleCalendarPulang} = props;

    this.onHandleCalendarPergi = onHandleCalendarPergi;
    this.onHandleCalendarPulang = onHandleCalendarPulang;
  }
  handleDateChange = startDate => this.setState({startDate});
  render() {
    let minDate;
    if (tipe === 'pergi') minDate = new Date();
    else minDate = this.startDate;
    return (
      <View>
        <InputDate
          title="pergi"
          modal="1"
          iconName="calendar-outline"
          onDateChange={this.handleDateChange}
        />
        <View />
        {pulang ? (
          <InputDate
            title="pulang"
            modal="2"
            iconName="calendar-outline"
            minDate={this.startDate}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default InputSchedule;
