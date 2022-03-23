import { View, Image, Text, StatusBar, Animated, Easing, FlatList, ViewToken} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {styles} from './Welcome.styles';
import Button from '../../components/Button';
import {borderRadius, colors, globalStyles, width} from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';
import Image1 from '../../assets/images/welcome.png';
import Image2 from '../../assets/images/events.png';

const carouselData = [
  {
    image: Image1,
    title: `Explore Events Around\n You!`,
    content: `Tired of staying in ? Want to network more?\n Explore various events and tag along :)`
  },{
    image: Image2,
    title:'Create Events Around\n You!',
    content: `It’s too calm? You have what it takes ?\n Create events uniquely`
  }
]

const WelcomeScreen = () => {
  const [ currentIndex,setCurrentIndex ] = useState<number | null>(0);
  const SlideOneScale:any = useRef(new Animated.Value(3)).current;
  const SlideTwoScale:any = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation<RootStackParamList>();

  const animate = (toValue:number,ref:Animated.Value) => {
    const options = {
      toValue,
      duration:500,
      easing: Easing.ease,
      useNativeDriver:true,
    }
    return Animated.timing(ref,options).start()
  }


  useEffect(()=>{
    const id:any = setTimeout(()=>{
        if(!currentIndex){
            animate(1,SlideTwoScale)
            animate(2,SlideOneScale)
        }else{
            animate(1,SlideOneScale)
            animate(2,SlideTwoScale)
        }
        return clearTimeout(id)
    },200)
  },[currentIndex])


  const viewableItemChange = useRef(({ viewableItems }:{ viewableItems:ViewToken[] }) => setCurrentIndex(viewableItems[0].index)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold:50 }).current;


  return (
    <View style={styles.container}>
      <View style={[globalStyles.centerd, { flex:.7 }]}>
        <StatusBar backgroundColor={colors.primary} />
        <View style={{flex:.9}}>
          <FlatList 
              data={carouselData}
              showsHorizontalScrollIndicator={false} 
              alwaysBounceHorizontal={false} 
              snapToInterval={width}
              horizontal={true} 
              pagingEnabled 
              bounces={false}
              style={{flex:1}}
              keyExtractor={(_,i)=> i.toString()}
              onViewableItemsChanged={viewableItemChange}
              viewabilityConfig={viewConfig}
              
              renderItem={({ item }) => (
                <View>
                  <View style={styles.imageWrapper}>
                    <Image
                      style={styles.image}
                      source={item.image}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.content}</Text>
                </View>
              )}
          />
          <View style={styles.IndicatorWrapper}>
              <Animated.View style={[styles.SlideIndicator,{ transform:[{ scaleX: SlideOneScale }], borderRadius: currentIndex ? borderRadius.SM : 3 , backgroundColor: currentIndex ? colors.lightPrimary : colors.primary }]}/>
              <View style={{marginHorizontal:5}} />
              <Animated.View style={[styles.SlideIndicator,{ transform:[{ scaleX: SlideTwoScale }], borderRadius: !currentIndex ? borderRadius.SM : 2 , backgroundColor: !currentIndex ? colors.lightPrimary : colors.primary }]}/>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          type="primary"
          title="Create New Account"
          onPress={() => navigation.navigate('register')}
        />
        <Button type="secondary" title="Sign In" onPress={() => navigation.navigate('login')} />
        <Text style={styles.skip} onPress={() => navigation.navigate('home')}>Skip for now</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
