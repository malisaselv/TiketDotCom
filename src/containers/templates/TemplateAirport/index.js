import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FiturPesawat from '../../../components/molecules/FiturPesawat';
import Dash from 'react-native-dash';

class TemplateAirport extends Component {
  state = {
    visibleModalFrom: false,
    visibleModalTo: false,
    departAirport: 'Jakarta (JKTC)',
    returnAirport: 'Denpasar-Bali (DPS)',
    dataSource: [],
    modalSelected: 0,
  };

  componentDidMount() {
    const url =
      'https://m.tiket.com/ms-gateway/tix-flight-master-discovery/popularDestination/findPopularCity';
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          dataSource: responseJson.data,
        });
      })
      .catch(error => console.log(error));
  }

  toggleModalFrom = select => {
    this.setState({visibleModalFrom: true, modalSelected: select});
  };

  _departAirport = item => {
    if (this.state.modalSelected == 1) {
      this.setState({
        departAirport: item,
        visibleModalFrom: !this.state.visibleModalFrom,
      });
    } else {
      this.setState({
        returnAirport: item,
        visibleModalFrom: !this.state.visibleModalFrom,
      });
    }
  };

  _onSwitchAirport = () => {
    const {departAirport, returnAirport} = this.state;
    this.setState({
      departAirport: returnAirport,
      returnAirport: departAirport,
    });
  };

  onRequestClose = () =>
    this.setState({
      visibleModalFrom: false,
      visibleModalTo: false,
    });

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.airportName}
        onPress={() => {
          this._departAirport(
            item.airportName + ' ' + '(' + item.airportCode + ')',
          );
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 16,
            marginVertical: 10,
          }}>
          <View>
            <Icon name="city-variant-outline" size={20} color="#57627A" />
          </View>
          <View style={{flex: 1, paddingHorizontal: 24}}>
            <View>
              <Text style={{fontSize: 14, color: 'black'}}>
                {item.airportName}
              </Text>
              <Text style={{fontSize: 14, color: '#8A93A7'}}>
                {item.airportLocation}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#EFF1F6',
              borderRadius: 4,
              paddingHorizontal: 16,
              paddingVertical: 4,
              margin: 8,
            }}>
            <Text style={{fontSize: 12, color: 'darkgrey'}}>
              {item.airportCode}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{marginBottom: 8}}>
        <FiturPesawat
          withAnimation
          position="top"
          modal={() => {
            this.toggleModalFrom(1);
          }}
          label="Dari"
          iconName="airplane-takeoff"
          content={this.state.departAirport}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Dash
            style={{
              marginRight: 0,
              alignItems: 'center',
              flex: 1,
            }}
            dashColor="#dee2ee"
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderWidth: 0.3,
              borderColor: '#8a93a7',
              borderRadius: 50,
              width: 35,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this._onSwitchAirport}>
            <Icon name="sync" size={15} color="#0064d2" />
          </TouchableOpacity>
        </View>
        <FiturPesawat
          withAnimation
          position="bottom"
          modal={() => {
            this.toggleModalFrom(2);
          }}
          label="Ke"
          iconName="airplane-landing"
          content={this.state.returnAirport}
          border="1"
        />

        <Modal
          visible={this.state.visibleModalFrom}
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
                  onPress={() => this.setState({visibleModalFrom: false})}>
                  <Icon name="close" size={24} color="white" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    flex: 1,
                    paddingLeft: 16,
                    color: 'white',
                  }}>
                  Pilih Keberangkatan
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  marginHorizontal: 16,
                  marginVertical: 16,
                  borderRadius: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 8,
                }}>
                <Icon name="map-marker-outline" size={24} color="#DDDDDD" />
                <TextInput
                  style={{height: 40, flex: 1, marginHorizontal: 6}}
                  placeholderTextColor="#8A93A7"
                  placeholder="Cari kota atau bandara"
                />
              </View>
            </SafeAreaView>
          </View>
          <Text style={{fontSize: 16, color: '#8A93A7', padding: 16}}>
            Tujuan Terpopuler
          </Text>
          <FlatList data={this.state.dataSource} renderItem={this.renderItem} />
        </Modal>
      </View>
    );
  }
}

export default TemplateAirport;
