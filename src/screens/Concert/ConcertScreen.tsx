import {StatusBar, Text, View, Image, SafeAreaView, Platform} from 'react-native';
import Button from '../../components/Button/index';
import React from 'react';
import {styles} from './ConcertScreen.styles';
import {colors, Spacing} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import IconHolder from '../../components/IconHolder';
import {formatDate} from '../../utils/dateFormat';
import { faCalendarAlt, faChevronLeft, faDollar, faLocation } from '@fortawesome/free-solid-svg-icons';

const ConcertScreen = ({route, navigation}: any) => {
  const {concert, img} = route.params;
  const pics = [
    require('../../assets/images/1.png'),
    require('../../assets/images/2.png'),
    require('../../assets/images/3.png'),
    require('../../assets/images/4.png'),
    require('../../assets/images/5.png'),
    require('../../assets/images/6.png'),
    require('../../assets/images/7.png'),
    require('../../assets/images/8.png'),
    require('../../assets/images/9.png'),
  ];
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={colors.primary} barStyle={ Platform.OS === 'android' ? "light-content" : "dark-content" } />
      <SafeAreaView style={styles.backHandler}>
        <IconHolder onPress={()=> navigation.goBack()} name={faChevronLeft}  />
      </SafeAreaView>
      <View style={styles.header}>
        <Image source={pics[img]} style={styles.headerImage} />
        <View style={styles.headerTextWrapper}>
          <Text numberOfLines={1} style={styles.concertTitle}>{concert?.title}</Text>
          <Text numberOfLines={1} style={styles?.concertOraganizer}>
            {concert?.organization?.name}
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.aboutWrapper}>
          <Text style={styles.aboutTitle}>About</Text>
          <View style={styles.aboutItemWrapper}>
            <View style={styles.aboutItem}>
              <IconHolder  name={faCalendarAlt} />
              <View>
                <Text style={styles.aboutDate}>
                  {formatDate(concert?.startDate)}
                </Text>
                <Text style={styles.aboutTime}>10:00-14:00</Text>
              </View>
            </View>
            <View style={styles.aboutItem}>
              <IconHolder name={faLocation} />
              <View>
                <Text style={styles.aboutDate}>{concert?.venue}</Text>
              </View>
            </View>
            <View style={styles.aboutItem}>
              <IconHolder name={faDollar} />
              <View>
                <Text style={{color: colors.primary}}>
                  {concert?.standard?.price} Rwf
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.aboutDescription}>{concert?.description}</Text>
        </View>
        {/* <View style={styles.mapWrapper}>
          <Text style={styles.title}>Map</Text>
          <Image
            source={require('../../assets/images/map.jpg')}
            style={styles.map}
          />
        </View> */}
      </ScrollView>
      <View style={styles.button}>
        <Button
          type="primary"
          title="Buy ticket"
          onPress={() => navigation.navigate('BuyTicket', {event: concert})}
        />
      </View>
    </View>
  );
};

export default ConcertScreen;
