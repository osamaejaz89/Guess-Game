import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import {ThemeColors} from 'react-navigation';
import {render} from 'react-dom';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const deviceHeight = Dimensions.get('window').height;
export class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };

  close = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  render() {
    let {show} = this.state;
    const {onTouchOutside, title, image} = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              margin: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{flex: 1, width: wp('80%'), height: hp('50%')}}
                source={image}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                {title}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
