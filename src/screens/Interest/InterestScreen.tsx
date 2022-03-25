import { Pressable, Text, View, Animated, ViewToken, FlexStyle, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './Interest.styles'
import { Button } from '../../components'
import { borderRadius, colors, globalStyles, Spacing, width } from '../../constants'
import { FlatList } from 'react-native-gesture-handler'
import Art from '../../assets/images/art.png'
import Conference from '../../assets/images/conference.png'
import Community from '../../assets/images/community.png'
import Festival from '../../assets/images/festival.png'
import Food from '../../assets/images/food.png'
import Music from '../../assets/images/music.png'
import Sports from '../../assets/images/sports.png'
import Seminar from '../../assets/images/seminar.png'
import Travel from '../../assets/images/travel.png'
import Charity from '../../assets/images/charity.png'
import Exhibition from '../../assets/images/exhibition.png'
import Fashion from '../../assets/images/fashion.png'
import Networking from '../../assets/images/networking.png'
import Trails from '../../assets/images/trails.png'
import Wellness from '../../assets/images/wellness.png'
import Workshop from '../../assets/images/workshop.png'
import InterestCard from '../../components/InterestCard'
import { Interest, RootStackParamList } from '../../../types'
import { useNavigation } from '@react-navigation/native'
import { useContextMode } from '../../context/useContext'
import { AddInterests } from '../../context/Actions'

const data:Interest[] = [
    {
        title:'Art',
        image: Art,
        status:false
    },{
        title:'conference',
        image: Conference,
        status:false
    },{
        title:'community',
        image: Community,
        status:false,
    },{
        title:'festival',
        image: Festival,
        status:false
    },{
        title:'Food',
        image: Food,
        status:false
    },{
        title:'Music',
        image: Music,
        status:false
    },{
        title:'Sports',
        image: Sports,
        status:false
    },{
        title:'Seminar',
        image: Seminar,
        status:false
    },{
        title:'Travel',
        image: Travel,
        status:false
    },
    {
        title:'Charity',
        image: Charity,
        status:false
    },{
        title:'Exhibition',
        image: Exhibition,
        status:false
    },{
        title:'Fashion',
        image: Fashion,
        status:false
    },{
        title:'Trails',
        image: Trails,
        status:false
    },{
        title:'Welless',
        image: Wellness,
        status:false
    },{
        title:'Workshop',
        image: Workshop,
        status:false
    },{
        title:'Networking',
        image: Networking,
        status:false
    }
]

const InterestScreen = () => {
    const { handleInterests } = useContextMode()
    const [ interests,setInterests ] = useState(data);
    const [ loading,setLoader ] = useState<boolean>(false);
    const SlideOneScale:any = useRef(new Animated.Value(3)).current;
    const SlideTwoScale:any = useRef(new Animated.Value(1)).current;
    const [ currentIndex,setCurrentIndex ] = useState<number | null>(0);

    const navigation = useNavigation<RootStackParamList>()

    const InterestSelector = (interest:Interest) => {
        setInterests(prev => prev.map(one => {
            if(one.title == interest.title){
                return { ...one, status: !one.status }
            }else{
                return one
            }
        }))
    }

    const In = (toValue:number,ref:Animated.Value) => {
        const options = {
          toValue,
          duration:500,
          easing: Easing.ease,
          useNativeDriver:true,
        }
        return Animated.timing(ref,options).start()
      }

    const Out = (toValue:number,ref:Animated.Value) => {
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
                Out(1,SlideTwoScale)
                In(2,SlideOneScale)
            }else{
                Out(1,SlideOneScale)
                In(2,SlideTwoScale)
            }
            return clearTimeout(id)
        },200)
    },[currentIndex])

    const viewableItemChange = useRef(({ viewableItems }:{ viewableItems:ViewToken[] }) => setCurrentIndex(viewableItems[0].index)).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold:20 }).current;

    const handleSubmit = () => {
        const validInterests = interests.filter( one => one.status ) // those with status === true 
        if(validInterests[0]){
            setLoader(true)
            Promise.resolve(handleInterests(AddInterests,validInterests))
            .then(() =>{
                setLoader(false);
                navigation.navigate('login');
            })
        }
    }

    return (
        <View style={styles.screen}>
            <View />
            <View>
                <Text style={styles.mainText}>Let's Set You Up</Text>
                <Text style={styles.secondaryText}>In the below categories, please choose the most interesting to you.</Text>
            </View>
            <View>
                <FlatList 
                    data={[1,2]}
                    showsHorizontalScrollIndicator={false} 
                    alwaysBounceHorizontal={false} 
                    snapToInterval={width}
                    horizontal={true} 
                    pagingEnabled 
                    bounces={false}
                    keyExtractor={(one)=> one.toString()}
                    onViewableItemsChanged={viewableItemChange}
                    viewabilityConfig={viewConfig}
                    renderItem={({ item }) => {
                        if(item === 1){
                            return (
                                <FlatList
                                    numColumns={3}
                                    data={interests.slice(0,9)}
                                    keyExtractor={(_, i) => i.toString()}
                                    renderItem={({ item, index }) => 
                                        <InterestCard 
                                            handleChange={()=>InterestSelector(item)} 
                                            item={item} index={index} 
                                            /> 
                                        } 
                                />
                            )
                            
                        }else {
                            return (
                                <FlatList
                                    numColumns={3}
                                    style={{marginLeft:10}}
                                    data={interests.slice(9,16)}
                                    keyExtractor={(_, i) => i.toString()}
                                    renderItem={({ item, index }) => 
                                        <InterestCard 
                                            handleChange={()=>InterestSelector(item)} 
                                            item={item} index={index} 
                                            />
                                        } 
                                    />
                            )
                        }
                    }}
                />
                <View style={styles.IndicatorWrapper}>
                    <Animated.View style={[styles.SlideIndicator,{ transform:[{ scaleX: SlideOneScale }], borderRadius: currentIndex ? borderRadius.SM : 3 , backgroundColor: currentIndex ? colors.lightPrimary : colors.primary }]}/>
                    <View style={{marginHorizontal:5}} />
                    <Animated.View style={[styles.SlideIndicator,{ transform:[{ scaleX: SlideTwoScale }], borderRadius: !currentIndex ? borderRadius.SM : 2 , backgroundColor: !currentIndex ? colors.lightPrimary : colors.primary }]}/>
                </View>
            </View>
            <View style={globalStyles.centerd}>
                <Button
                    type="primary"
                    title='Continue'
                    isLoading={loading}
                    onPress={handleSubmit}
                />
                <Pressable onPress={()=> navigation.navigate('login')}>
                    <Text style={styles.skip}>Skip for now</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default InterestScreen