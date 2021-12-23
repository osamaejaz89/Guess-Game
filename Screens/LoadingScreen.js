import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import all the components we are going to use
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';

const LoadingScreen = (props) => {
  // const [align, setAlign] = useState('center');
  // const [alignsecond, setAlignsecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/GuessLogo.png')}
        style={{width: wp('100%'), height: hp('50%')}}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
});
