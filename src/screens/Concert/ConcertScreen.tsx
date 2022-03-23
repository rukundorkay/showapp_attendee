import {StatusBar, Text, View, Image} from 'react-native';
import Button from '../../components/Button/index';
import React, {useContext} from 'react';
import {styles} from './ConcertScreen.styles';
import {colors} from '../../constants';
import {StoreContext} from '../../context';
import {useContextMode} from '../../context/useContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import IconHolder from '../../components/IconHolder';

const ConcertScreen = () => {
  // const {authInfo} = useContextMode();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} />

      <View style={styles.header}>
        <Image
          source={require('../../assets/images/wall.png')}
          style={styles.headerImage}
        />
        <View style={styles.headerTextWrapper}>
          <Text style={styles.concertTitle}>Trappish Concert</Text>
          <Text style={styles.concertOraganizer}>Intore Entertainmeent</Text>
        </View>
      </View>
      <ScrollView style={{zIndex: 1, marginTop: 200}}>
        <View style={{flex: 1}}>
          <View style={styles.body}>
            <View style={styles.aboutWrapper}>
              <Text style={styles.aboutTitle}>About</Text>
              <View style={styles.aboutItemWrapper}>
                <View style={styles.aboutItem}>
                  <IconHolder type="AntDesign" name="calendar" />
                  <View>
                    <Text style={styles.aboutDate}>25 october 2022</Text>
                    <Text style={styles.aboutTime}>10:00-14:00</Text>
                  </View>
                </View>
                <View style={styles.aboutItem}>
                  <IconHolder type="FontAwesome" name="location" />

                  <View>
                    <Text style={styles.aboutDate}>Kigali Arena</Text>
                  </View>
                </View>
                <View style={styles.aboutItem}>
                  <IconHolder type="Feather" name="dollar" />

                  <View>
                    <Text style={{color: 'red'}}>10,000 - 25,000 Rwf</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.aboutDescription}>
                Isn't this a worse answer than the original question? This
                method requires that you have space around the container and the
                guttering must always be an even number.
              </Text>
            </View>
            <View style={styles.mapWrapper}>
              <Text style={styles.title}>Map</Text>
              <Image
                source={require('../../assets/images/map.jpg')}
                style={styles.map}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          type="primary"
          title="Buy ticket"
          onPress={() => console.log('buy ticket')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConcertScreen;
