import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FiturPesawat from '../../../components/molecules/FiturPesawat';

const arrClass = [
  {
    id: 1,
    value: 'Ekonomi',
  },
  {
    id: 2,
    value: 'Bisnis',
  },
  {
    id: 3,
    value: 'First',
  },
];

class TemplateKabin extends Component {
  state = {
    visibleModal: false,
    classCabin: 'Ekonomi',
  };
  changeCabin = item => {
    this.setState({classCabin: item, visibleModal: !this.state.visibleModal});
  };
  toggleModal = () => {
    this.setState({visibleModal: true});
  };

  render() {
    return (
      <View>
        <FiturPesawat
          modal={this.toggleModal}
          label="Kelas Kabin"
          iconName="seat-recline-extra"
          content={this.state.classCabin}
          border="1"
          mt="1"
        />
        <Modal visible={this.state.visibleModal} transparent={true}>
          <View
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 1}}></View>
            <View
              style={{
                borderTopLeftRadius: 13,
                borderTopRightRadius: 13,
                position: 'relative',
                bottom: 0,
                backgroundColor: 'white',
              }}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 16,
                    borderBottomWidth: 1,
                    borderColor: '#dee2ee',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({visibleModal: false})}>
                    <Icon
                      name="close"
                      size={24}
                      color="#57627A"
                      style={{paddingRight: 16}}
                    />
                  </TouchableOpacity>
                  <Text style={{fontSize: 16, fontWeight: '400', flex: 1}}>
                    Kelas Kabin
                  </Text>
                </View>
                <View>
                  <View
                    style={{flexDirection: 'column', paddingHorizontal: 16}}>
                    {arrClass.map(item => {
                      return (
                        <TouchableOpacity
                          key={item.value}
                          onPress={() => {
                            this.changeCabin(item.value);
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              paddingTop: 16,
                              paddingBottom: 16,
                              borderBottomWidth: 1,
                              borderColor: '#dee2ee',
                            }}>
                            <View style={{flex: 1}}>
                              <Text style={{fontSize: 14}}>{item.value}</Text>
                            </View>
                            <View>
                              {this.state.classCabin === item.value ? (
                                <Icon name="check" size={14} color="#3999f0" />
                              ) : null}
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default TemplateKabin;
