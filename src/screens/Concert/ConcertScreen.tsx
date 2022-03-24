import {StatusBar, Text, View, Image} from 'react-native';
import Button from '../../components/Button/index';
import React from 'react';
import {styles} from './ConcertScreen.styles';
import {colors} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import IconHolder from '../../components/IconHolder';
import {formatDate} from '../../utils/dateFormat';
import { faCalendar, faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';

const ConcertScreen = ({route, navigation}: any) => {
  const {concert, img} = route.params;
  const pics = [
    require('../../assets/images/1.png'),
    require('../../assets/images/2.png'),
    require('../../assets/images/3.png'),
    require('../../assets/images/4.png'),
  ];
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} />

      <View style={styles.header}>
        <Image source={pics[img]} style={styles.headerImage} />
        <View style={styles.headerTextWrapper}>
          <Text style={styles.concertTitle}>{concert.title}</Text>
          <Text style={styles.concertOraganizer}>
            {concert.organization.name}
          </Text>
        </View>
      </View>
      <ScrollView style={{zIndex: 1, marginTop: 200}}>
        <View style={{flex: 1}}>
          <View style={styles.body}>
            <View style={styles.aboutWrapper}>
              <Text style={styles.aboutTitle}>About</Text>
              <View style={styles.aboutItemWrapper}>
                <View style={styles.aboutItem}>
                  <IconHolder type="AntDesign" name={faCalendar} />
                  <View>
                    <Text style={styles.aboutDate}>
                      {formatDate(concert.startDate)}
                    </Text>
                    <Text style={styles.aboutTime}>10:00-14:00</Text>
                  </View>
                </View>
                <View style={styles.aboutItem}>
                  <IconHolder type="FontAwesome" name={faLocation} />

                  <View>
                    <Text style={styles.aboutDate}>{concert.venue}</Text>
                  </View>
                </View>
                <View style={styles.aboutItem}>
                  <IconHolder type="Feather" name={faDollar} />
                  <View>
                    <Text style={{color: 'red'}}>
                      {concert.standard.price} Rwf
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.aboutDescription}>{concert.description}</Text>
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
          onPress={() => navigation.navigate('BuyTicket')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConcertScreen;
