import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import Animated from 'react-native-reanimated';

import {Button, TicketCard} from '../../components';
import {colors} from '../../constants';
import dimesions from '../../constants/dimesions';
import styles from './TicketBoughtScreen.styles';

const SNAP_INTERVAL = dimesions.width - (dimesions.Spacing + 10) * 2 + 20;

const TicketBoughtScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.top}>
            <Image
              source={require('../../assets/images/check.png')}
              style={styles.checkImg}
            />
            <Text style={styles.topTitle}>Payment Successful</Text>
            <Text style={styles.topDesc}>Your tickets are ready!!</Text>
          </View>
          <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToInterval={SNAP_INTERVAL}
            snapToAlignment="center"
            decelerationRate={0}
            scrollEventThrottle={16}
            bounces={false}
            keyExtractor={item => `${item.id}`}
            data={[{id: 1}, {id: 2}, {id: 3}]}
            renderItem={({item, index}) => (
              <TicketCard key={item.id} index={index} scrollX={scrollX} />
            )}
            contentContainerStyle={styles.contentContainer}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
          />
          <View style={styles.buttonView}>
            <Button type="primary" title="Done" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TicketBoughtScreen;
