import {SafeAreaView, View, Image, Text} from 'react-native';
import React from 'react';
import {styles} from './Welcome.styles';
import Button from '../../components/Button';
import {globalStyles} from '../../constants';

const WelcomeScreen: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/welcome.png')}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>Explore Events Around{'\n'} You!</Text>
          <Text style={styles.subtitle}>
            Tired of staying in? Want to network more?{'\n'}Explore various
            events and tag along :)
          </Text>
        </View>
        <View style={[globalStyles.centerd, {marginVertical: 70}]}>
          <Button
            type="primary"
            title="Create An account"
            onPress={() => navigation.navigate('Register')}
          />
          <View style={[globalStyles.centerd, {marginVertical: 10}]} />
          <Button type="background" title="Sign In" onPress={() => {}} />
          <View style={[globalStyles.centerd, {marginVertical: 10}]} />
          <Text style={styles.textalign}>Skip for now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
