import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HeaderPesawat extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', padding: 16}}>
          <Text style={{fontSize: 14}}>{this.props.title}</Text>
          <Text style={{fontSize: 14, color: '#0064d2'}}>
            {this.props.delete}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name={this.props.iconName} size={15} color="#8A93A7" />
          <View>
            <Text style={{fontSize: 14}}>{this.props.dept}</Text>
            <Text style={{fontSize: 14}}>{this.props.dest}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:12, color='#8A93A7'}}>{this.props.date}</Text>
              <Text style={{fontSize:12, color='#8A93A7'}}>{this.props.passenger}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderPesawat;
