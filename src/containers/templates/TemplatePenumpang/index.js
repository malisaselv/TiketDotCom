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
import {Picker} from 'react-native-wheel-pick';

class TemplatePenumpang extends Component {
  state = {
    visibleModal2: false,
    penumpangDewasa: '1 Dewasa',
    penumpangDewasaT: '1',
    penumpangAnak: '0 Anak',
    penumpangAnakT: '0',
    penumpangBayi: '0 Bayi',
    penumpangBayiT: '0',
    selectedBayi: 0,
    selectedAnak: 0,
    selectedDewasa: 0,
    arrAnak: ['0', '1', '2', '3', '4', '5', '6'],
    arrDewasa: ['1', '2', '3', '4', '5', '6', '7'],
    arrBayi: ['0', '1'],
  };

  dewasaChanged(value) {
    const oldState = {...this.state};
    const selectedDewasa = value;

    const maxAnak = 8 - selectedDewasa;
    const arrAnak = [...Array(maxAnak).keys()];

    const maxBayi = selectedDewasa >= 4 ? 4 : selectedDewasa;
    const arrBayi = [...Array(Number(maxBayi) + 1).keys()];

    let selectedAnak = oldState.selectedAnak;
    let selectedBayi = oldState.selectedBayi;

    if (Number(selectedAnak) + Number(selectedDewasa) > maxAnak) {
      selectedAnak -= 1;
    }
    if (Number(selectedBayi) >= Number(selectedDewasa)) {
      selectedBayi = selectedDewasa;
    }
    // alert(oldState.selectedBayi);

    Object.assign(oldState, {
      selectedDewasa,
      arrAnak,
      selectedAnak,
      arrBayi,
      selectedBayi,
    });
    this.setState(oldState, () => {
      console.log(this.state);
      // alert(JSON.stringify(arrBayi));
    });
    this.setState({penumpangDewasaT: value});
  }

  anakChanged = value =>
    this.setState({selectedAnak: value, penumpangAnakT: value});

  bayiChanged = value =>
    this.setState({selectedBayi: value, penumpangBayiT: value});

  toggleModal2 = () => {
    this.setState({visibleModal2: true});
  };
  onRequestClose = () =>
    this.setState({
      visibleModal2: false,
    });

  render() {
    return (
      <View>
        <FiturPesawat
          modal={this.toggleModal2}
          label="Penumpang"
          iconName="account-outline"
          content={
            this.state.penumpangDewasa +
            ', ' +
            this.state.penumpangAnak +
            ', ' +
            this.state.penumpangBayi
          }
          border="1"
          mt="1"
        />
        <Modal visible={this.state.visibleModal2} transparent={true}>
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
                    onPress={() => this.setState({visibleModal2: false})}>
                    <Icon
                      name="close"
                      size={24}
                      color="#57627A"
                      style={{paddingRight: 16}}
                    />
                  </TouchableOpacity>
                  <Text style={{fontSize: 16, fontWeight: '400', flex: 1}}>
                    Penumpang
                  </Text>
                </View>
                <View
                  style={{
                    padding: 16,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14}}>Dewasa</Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#57637a',
                        paddingBottom: 16,
                      }}>
                      Usia 12+
                    </Text>

                    <Picker
                      style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 200,
                      }}
                      selectedValue={String(this.state.selectedDewasa)}
                      pickerData={this.state.arrDewasa}
                      onValueChange={value => {
                        this.dewasaChanged(value);
                      }}
                      itemSpace={60} // this only support in android
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14}}>Anak</Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#57637a',
                        paddingBottom: 16,
                      }}>
                      Usia 12+
                    </Text>

                    <Picker
                      style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 200,
                      }}
                      key={this.state.selectedAnak}
                      selectedValue={String(this.state.selectedAnak)}
                      pickerData={this.state.arrAnak}
                      onValueChange={value => {
                        this.anakChanged(value);
                      }}
                      itemSpace={60} // this only support in android
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 14}}>Bayi</Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#57637a',
                        paddingBottom: 16,
                      }}>
                      Usia 12+
                    </Text>

                    <Picker
                      style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 200,
                      }}
                      key={this.state.selectedBayi}
                      selectedValue={String(this.state.selectedBayi)}
                      pickerData={this.state.arrBayi}
                      onValueChange={value => {
                        this.bayiChanged(value);
                      }}
                      itemSpace={60} // this only support in android
                    />
                  </View>
                </View>
                <View style={{padding: 16}}>
                  <TouchableOpacity
                    style={{
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 48,
                      borderRadius: 50,
                      backgroundColor: '#146dc2',
                    }}
                    onPress={() =>
                      this.setState({
                        visibleModal2: !this.state.visibleModal2,
                        penumpangDewasa:
                          this.state.penumpangDewasaT + ' Dewasa',
                        penumpangAnak: this.state.penumpangAnakT + ' Anak',
                        penumpangBayi: this.state.penumpangBayiT + ' Bayi',
                      })
                    }>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Selesai
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default TemplatePenumpang;
