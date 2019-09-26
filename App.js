/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderPesawat from './src/components/molecules/HeaderPesawat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TemplateAirport from './src/containers/templates/TemplateAirport';
import TemplateKabin from './src/containers/templates/TemplateKabin';
import TemplateKalender from './src/containers/templates/TemplateKalender';
import TemplatePenumpang from './src/containers/templates/TemplatePenumpang';
import FingerPrint from './FingerPrint';
import CounterApp from './src/components/molecules/CounterApp';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/reducers/ReducerCount';
import {composeWithDevTools} from 'redux-devtools-extension';
import InputJadwal from './src/containers/templates/TemplateKalender/InputJadwal';

const store = createStore(
  combineReducers({root: rootReducer}),
  composeWithDevTools(),
);
class App extends Component {
  state = {};

  handleCalendarPergi = () => (
    <CalendarPicker type="pergi" onSelected={handleSelectedPergi} />
  );

  handleCalendarPulang = () => (
    <CalendarPicker type="pergi" onSelected={handleSelectedPulang} />
  );

  render() {
    return (
      <SafeAreaView style="flex: 1">
        <View style={{backgroundColor: '#FFFFFF'}}>
          <HeaderPesawat title="xxxxx" />
          <View style={{padding: 16}}>
            <View style={styles.secondContainer}>
              <TemplateAirport />
              {/* <TemplateKalender /> */}
              {/* <InputJadwal
                onHandleCalendarPergi={this.handleCalendarPergi}
                onHandleCalendarPulang={this.handleCalendarPulang}
              /> */}
              <InputJadwal />
              <TemplatePenumpang />
              <TemplateKabin />

              <FingerPrint />
              <Provider store={store}>
                <CounterApp />
              </Provider>

              <TouchableOpacity
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 48,
                  borderRadius: 50,
                  backgroundColor: '#ffdd00',
                }}
                onPress={() => Alert.alert('Button pressed')}>
                <Text
                  style={{color: '#146dc2', fontSize: 16, fontWeight: '600'}}>
                  CARI PENERBANGAN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    color: Colors.dark,
  },
  secondContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    marginTop: 60,
    borderRadius: 4,
    width: '100%',
    elevation: 1,
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
    },
  },
  bottomModal: {
    flex: 1,
    justifyContent: 'flex-end',
    // margin: 0,
  },
});

export default App;
