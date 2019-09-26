import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// const {title: theTitle, desc='desc here'} = obj;

const renderHeaderPesawat = ({
  title: theTitle,
  desc: theDesc = 'desc here',
}) => (
  <View>
    <View
      style={{
        borderRadius: 600, // border borderRadius same as width and height
        width: '200%',
        height: 800,
        top: -600,
        marginLeft: -200, // reposition the circle inside parent view
        position: 'absolute',
        bottom: 0, // show the bottom part of circle
        overflow: 'hidden',
        backgroundColor: '#0064d2',
      }}
    />
    <View
      style={{
        position: 'absolute',
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name="md-arrow-back" size={18} color="white" />
      <Text style={{fontSize: 16, flex: 1, paddingLeft: 16, color: 'white'}}>
        {theTitle} {theDesc} {theTitle}
      </Text>
    </View>
  </View>
);

export default renderHeaderPesawat;
