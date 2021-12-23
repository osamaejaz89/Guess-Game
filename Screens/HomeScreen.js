import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = (props) => {
  const onGame = () => {
    props.navigation.navigate('GameLevels');
  };
  const exit = () => {
    BackHandler.exitApp();
  };
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}>
      <Image
        source={require('../assets/TextLogo.png')}
        style={{flex: 1, width: wp('90%'), height: hp('20%')}}
      />

      <View>
        <TouchableOpacity onPress={onGame}>
          <Image
            source={require('../assets/start.png')}
            style={{width: wp('150%'), height: hp('20%')}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={exit}>
          {/* <Text style={styles.ButtonText}>Exit</Text> */}
          <Image
            source={require('../assets/exit.png')}
            style={{width: wp('45%'), height: hp('20%')}}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('100%'),
    width: wp('100%'),
  },
  ButtonApp: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
