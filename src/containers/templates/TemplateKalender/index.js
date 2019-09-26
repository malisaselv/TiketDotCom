import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FiturPesawat from '../../../components/molecules/FiturPesawat';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

class TemplateKalender extends Component {
  state = {
    toggleSwitchValue: false,
    visibleModalToGo: false,
    visibleModalBack: false,
    selectedStartDate: moment(new Date()).format('dddd, DD MMMM YYYY'),
    selectedEndDate: moment(new Date()).format('dddd, DD MMMM YYYY'),
    modalSelected: 0,
    minDateBack: new Date(),
  };

  toggleModalToGo = select => {
    this.setState({
      visibleModalToGo: !this.state.visibleModalToGo,
      modalSelected: select,
    });
  };

  _onToggleSwitch = () =>
    this.setState(state => ({
      toggleSwitchValue: !this.state.toggleSwitchValue,
    }));

  onDateChange = (date, type) => {
    console.log('DATE', date._d);
    const formattedDate = moment(date).format('dddd, DD MMMM YYYY');
    if (this.state.modalSelected == 1) {
      this.setState({
        selectedStartDate: formattedDate,
        selectedEndDate: this.state.selectedEndDate,
        visibleModalToGo: !this.state.visibleModalToGo,
        minDateBack: new Date(),
      });
    } else {
      this.setState({
        selectedEndDate: formattedDate,
        visibleModalToGo: !this.state.visibleModalToGo,
        minDateBack: this.state.selectedStartDate,
      });
    }
  };

  onRequestClose = () =>
    this.setState({
      visibleModalToGo: false,
      visibleModalBack: false,
    });

  render() {
    const {
      toggleSwitchValue,
      selectedStartDate,
      selectedEndDate,
      minDateBack,
    } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    const minDated = minDateBack;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#dee2ee',
            paddingBottom: 10,
          }}>
          <View style={{flex: 1}}>
            <FiturPesawat
              modal={() => {
                this.toggleModalToGo(1);
              }}
              label="Pergi"
              iconName="calendar-outline"
              content={startDate}
              border="0"
            />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 14, color: '#8A93A7'}}>Pulang-Pergi?</Text>
            <Switch
              onValueChange={this._onToggleSwitch}
              value={this.state.toggleSwitchValue}
              thumbColor={{true: '#0064D2', false: '#ffffff'}}
              trackColor={{true: '#B3E0F0', false: '#DDDDDD'}}
              ios_backgroundColor="#FFFFFF"
              style={{
                justifyContent: 'flex-end',
                transform: [{scaleX: 1.1}, {scaleY: 1.1}],
              }}
            />
          </View>
        </View>
        {toggleSwitchValue ? (
          <FiturPesawat
            modal={() => {
              this.toggleModalToGo(2);
            }}
            label="Pulang"
            iconName="calendar-outline"
            content={endDate}
            border="1"
            mt="1"
          />
        ) : null}
        <Modal
          visible={this.state.visibleModalToGo}
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
                  onPress={() => this.setState({visibleModalToGo: false})}>
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
            startFromMonday={true}
            weekdays={['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']}
            previousTitle="Prev"
            nextTitle="Next"
            minDate={minDated}
            todayBackgroundColor="yellow"
            selectedDayColor="yellow"
            selectedDayTextColor="#000000"
            scaleFactor={375}
            onDateChange={this.onDateChange}
          />
        </Modal>
      </View>
    );
  }
}

export default TemplateKalender;
