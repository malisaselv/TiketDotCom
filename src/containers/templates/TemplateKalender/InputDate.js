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
  state = {
    visibleModal: false,
    selectedStartDate: this.props.value,
    selectedEndDate: moment(new Date()).format('ddd, DD MMMM YYYY'),
    modalSelected: 0,
    minDated: '',
  };

  toggleModal = select => {
    this.setState({
      visibleModal: !this.state.visibleModal,
      modalSelected: select,
    });
  };

  onDateChange = date => {
    console.log('DATE', date);
    const formattedDate = moment(date).format('ddd, DD MMMM YYYY');

    this.setState(
      {
        visibleModal: !this.state.visibleModal,
      },
      () => {
        const {onChange} = this.props;
        if (onChange) onChange(formattedDate);
      },
    );
  };

  onRequestClose = () =>
    this.setState({
      visibleModal: false,
    });

  render() {
    console.log(this.props.value);
    const {selectedStartDate, selectedEndDate} = this.state;
    if (this.props.title === 'pergi') minDate = new Date();
    else minDate = this.startDate;
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleModal(this.props.modal)}>
          <View
            style={{
              borderBottomColor: '#dee2ee',
              borderBottomWidth: this.props.border == '1' ? 1 : 0,
              marginTop: this.props.mt == '1' ? 10 : 0,
            }}>
            <Text style={{fontSize: 14, color: '#8A93A7'}}>
              {this.props.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <Icon
                name={this.props.iconName}
                size={15}
                color="#0064d2"
                style={{paddingRight: 16}}
              />
              <Text style={{marginBottom: this.props.mb == '1' ? 10 : 0}}>
                {moment(`${this.props.value}`).format('ddd, DD MMMM YYYY')}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Modal
          visible={this.state.visibleModal}
          onRequestClose={this.onRequestClose}>
          <View
            style={{
              backgroundColor: '#0064d2',
            }}>
            <SafeAreaView>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.setState({visibleModal: false})}>
                  <Icon name="close" size={24} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    flex: 1,
                    paddingLeft: 16,
                    color: 'white',
                  }}>
                  Tanggal
                </Text>
              </View>
            </SafeAreaView>
          </View>
          <CalendarPicker
            key={this.props.value}
            startFromMonday={true}
            weekdays={['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']}
            previousTitle="Prev"
            nextTitle="Next"
            minDate={this.props.minDate}
            todayBackgroundColor="yellow"
            selectedDayColor="yellow"
            selectedDayTextColor="#000"
            onDateChange={this.onDateChange}
          />
        </Modal>
      </View>
    );
  }
}

export default InputDate;
