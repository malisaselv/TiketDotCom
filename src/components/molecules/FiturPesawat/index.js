import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class FiturPesawat extends Component {
  state = {
    content_internal: '',
  };

  constructor(q) {
    super(q);
    this.animatedX = new Animated.Value(1);
  }

  componentWillMount() {
    this.setState({content_internal: this.props.content});
  }

  componentDidUpdate(oldProps) {
    // let contentOld = oldProps.content;
    const {content: contentOld} = oldProps;
    const {withAnimation, content} = this.props;
    if (withAnimation && content !== contentOld) {
      // Animated.timing(this.animatedX, {
      //   toValue: 0.01, // output
      //   duration: 300, // duration of the animation
      // }).start(() => {
      //   Animated.spring(this.animatedX, {
      //     toValue: 1, // output
      //     friction: 5,
      //     // duration: 100, // duration of the animation
      //   }).start();
      // });
      Animated.timing(this.animatedX, {
        toValue: 0.01,
        duration: 1000,
      }).start(() => {
        this.setState({content_internal: this.props.content});

        Animated.spring(this.animatedX, {
          toValue: 1,
          // duration: 1000,
          friction: 3,
        }).start();
      });
    } else if (content !== contentOld) {
      this.setState({content_internal: content});
    }
  }

  render() {
    const {position = 'bottom'} = this.props;
    return (
      <TouchableOpacity onPress={this.props.modal}>
        <View
          style={{
            borderBottomColor: '#dee2ee',
            borderBottomWidth: this.props.border == '1' ? 1 : 0,
            marginTop: this.props.mt == '1' ? 10 : 0,
          }}>
          <Text style={{fontSize: 14, color: '#8A93A7'}}>
            {this.props.label}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              paddingBottom: this.props.border == '1' ? 10 : 0,
            }}>
            <Icon
              name={this.props.iconName}
              size={15}
              color="#0064d2"
              style={{paddingRight: 16}}
            />
            <Animated.View
              style={{
                transform: [{scale: this.animatedX}],

                // [position]: this.animatedX.interpolate({
                //   inputRange: [0, 1],
                //   outputRange: [0, 80],
                // }),
              }}>
              <Text style={{fontSize: 14, color: 'black'}}>
                {this.state.content_internal}
              </Text>
            </Animated.View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FiturPesawat;
