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
  const onEasy = () => {
    props.navigation.navigate('GameEasy');
  };
  const onMedium = () => {
    props.navigation.navigate('GameMedium');
  };
  const onHard = () => {
    props.navigation.navigate('GameHard');
  };
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.container}>
      <View>
        <Image
          style={{width: wp('100%'), height: hp('20%')}}
          source={require('../assets/Levels.png')}
        />
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onEasy}>
          <Image
            style={{width: wp('100%'), height: hp('10%')}}
            source={require('../assets/easy.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onMedium}>
          <Image
            style={{width: wp('100%'), height: hp('10%')}}
            source={require('../assets/medium.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onHard}>
          <Image
            style={{width: wp('100%'), height: hp('10%')}}
            source={require('../assets/hard.png')}
          />
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={exit}>
          <Image source={require('../assets/exit.png')} />
        </TouchableOpacity>
      </View> */}
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
