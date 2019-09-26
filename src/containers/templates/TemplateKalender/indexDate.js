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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

class InputDate extends Component {
  tipe = 'pergi';
  handleSelected = () => {};
  minDate = new Date();
  onDateChange = () => {};

  constructor(props) {
    super(props);
    const {title, onDateChange, minDate, iconName, modal} = props;

    this.title = title;
    this.iconName = iconName;
    this.state.modalSelected = modal;

    if (minDate) this.minDate = minDate;

    if (onDateChange) this.onDateChange = onDateChange;
  }
  render() {
    <View>
      <TouchableOpacity onPress={() => this.toggleModal(modal)}>
        <View>
          <Text>{title}</Text>
          <Icon
            name={iconName}
            size={15}
            color="#0064d2"
            style={{paddingRight: 16}}
          />
          <Text style={{fontSize: 14, color: 'black'}}>{startDate}</Text>
          <CalendarPicker
            minDate={this.minDate}
            onDateChange={date => this.onDateChange(date)}
          />
        </View>
      </TouchableOpacity>
    </View>;
  }
}

export default InputDate;
