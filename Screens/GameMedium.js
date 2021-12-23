import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BottomPopup} from './BottomPopup';

export default class GameMedium extends Component {
  constructor() {
    super();
    this.state = {
      low: 0,
      mid: 50,
      high: 100,
      guessesLeft: 6,
    };
  }
  popupref = React.createRef();
  onShowPopup = () => {
    popupref.show();
  };

  onClosePopup = () => {
    popupref.close();
    this.refresh();
  };

  onData = {
    win: require('../assets/giphy.gif'),
    loss: require('../assets/gor.gif'),
  };

  onHome = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/background1.jpg')}
        style={styles.container}>
        <Text style={styles.smallerText}>
          I will read your mind in 6 or less questions
        </Text>
        <Text style={styles.smallerText}>
          {'\n'}Guess a number between 0-99: {'\n'}
        </Text>

        <Text style={styles.biggerText}>Is your number {this.state.mid}?</Text>
        <Text>{'\n'}</Text>
        <TouchableOpacity
          onPress={this.userWon}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Yes</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <View style={styles.answerButtons}>
          <TouchableOpacity
            onPress={this.isSmaller}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>No, it's smaller</Text>
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity
            onPress={this.isBigger}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>No, it's bigger</Text>
          </TouchableOpacity>
        </View>
        <Text>{'\n'}</Text>

        <Text style={styles.smallerText}>
          {'\n'}Guesses left before you win: {this.state.guessesLeft} {'\n'}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.onHome}>
            <Image
              source={require('../assets/back.png')}
              style={{width: wp('50%'), height: hp('25%'), marginLeft: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.refresh}>
            <Image
              source={require('../assets/stone.png')}
              style={{
                width: wp('50%'),
                height: hp('28%'),
                marginRight: 50,
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <BottomPopup
            title={
              this.state.guessesLeft === 0
                ? 'THIS IS NOT POSSIBLE!!!'
                : 'I win, guessed your number'
            }
            image={
              this.state.guessesLeft === 0 ? this.onData.loss : this.onData.win
            }
            ref={(target) => (popupref = target)}
            onTouchOutside={this.onClosePopup}
          />
        </View>
      </ImageBackground>
    );
  }

  userWon = () => {
    this.onShowPopup();
    this.setState({
      low: 0,
      mid: 50,
      high: 100,
      guessesLeft: 6,
    });
  };
  isSmaller = () => {
    if (this.state.guessesLeft == 0) {
      this.onShowPopup();
    } else {
      this.setState((state) => ({
        high: state.mid,
      }));
      this.setState((state) => ({
        mid: parseInt((state.high + state.low) / 2),
        guessesLeft: state.guessesLeft - 1,
      }));
    }
  };
  isBigger = () => {
    if (this.state.guessesLeft == 0) {
      this.onShowPopup();
    } else {
      this.setState((state) => ({
        low: state.mid,
      }));
      this.setState((state) => ({
        mid: parseInt((state.high + state.low) / 2),
        guessesLeft: state.guessesLeft - 1,
      }));
    }
  };

  refresh = () => {
    this.setState({
      low: 0,
      mid: 50,
      high: 100,
      guessesLeft: 6,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  biggerText: {
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: 'white',
  },
  smallerText: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: 'white',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
