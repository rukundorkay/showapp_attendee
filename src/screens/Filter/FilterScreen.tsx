import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './FilterScreen.styles';
import {Button} from '../../components';

const {width} = Dimensions.get('window');

const Filter = ({visible, close}: {visible: Boolean; close: any}) => {
  const EVENTTYPES = ['concert', 'Art', 'Conferences', 'Networkin', 'Confer'];
  const PRICIN = [' Low', 'Low '];
  const OPTIONS = [
    {
      title: '',
      key: '0',
      data: [
        {id: 1, name: 'All', selected: true},
        {id: 2, name: 'Currently_Open', selected: false},
        {id: 3, name: 'Less_than_500m', selected: false},
        {id: 4, name: 'Currently_Closed', selected: false},
      ],
    },
    {
      title: 'Type',
      key: '1',
      data: [
        {id: 5, name: 'home:Burger', selected: false},
        {id: 6, name: 'home:Pizza', selected: false},
        {id: 7, name: 'home:Bunch', selected: false},
        {id: 8, name: 'home:Italian', selected: false},
        {id: 9, name: 'home:Libanese', selected: true},
        {id: 10, name: 'home:Japanese', selected: false},
        {id: 11, name: 'home:Vegetarian', selected: true},
        {id: 12, name: 'home:Dim_sum', selected: false},
        {id: 13, name: 'home:Sushi', selected: false},
        {id: 14, name: 'home:Spanish', selected: false},
        {id: 15, name: 'home:Sandwiches', selected: false},
        {id: 16, name: 'home:Sandwich', selected: true},
      ],
    },
    {
      title: 'home:Availability',
      key: '2',
      data: [
        {id: 17, name: 'home:Today', selected: false},
        {id: 18, name: 'home:Tomorrow', selected: false},
      ],
    },
  ];
  const [selectedOptions, setSelectedOptions] = useState([
    OPTIONS[0].data[0],
    OPTIONS[1].data[4],
    OPTIONS[1].data[6],
    OPTIONS[1].data[11],
  ]);

  const findIndex = (arr: any, key: any, val: any) =>
    arr.findIndex((obj: any) => obj[key] === val);
  const isOptionSelected = (optionId: any) =>
    selectedOptions[findIndex(selectedOptions, 'id', optionId)];

  const selectOption = (option: any) => {
    const items = isOptionSelected(option.id)
      ? selectedOptions.filter(item => item.id !== option.id)
      : [...selectedOptions, option];

    setSelectedOptions(items);
  };

  return (
    // <Modal
    //   isVisible={visible}
    //   backdropColor="#FFF"
    //   backdropOpacity={1}
    //   propagateSwipe
    //   hideModalContentWhileAnimating={true}
    //   style={styles.filterModal}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.centerView}>
          <Text style={styles.title}>{'home:Filters'}</Text>
        </View>
        <View style={styles.rightView}>
          <Pressable style={styles.icon} onPress={close}>
            <Icon name="close" size={24} color="#1F1F1F" />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Price Rane</Text>
            <View style={styles.sectionContent}>
              <MultiSlider
                trackStyle={styles.trackStyle}
                selectedStyle={styles.selectedStyle}
                showSteps={true}
                showStepMarkers={true}
                sliderLength={width - 40}
                values={[10, 40]}
                min={0}
                max={60}
                step={5}
                showStepLabels={true}
                markerStyle={styles.markerStyle}
                onValuesChange={val => console.log(val)}
                // onValuesChangeStart={(val: any) => console.log(val)}
                // onValuesChangeFinish={(val: any) => console.log(val)}
              />
            </View>
          </View>
          <View>
            <Text>Event Type</Text>
            <View style={{flexDirection: 'row', padding: 10, flexWrap: 'wrap'}}>
              {EVENTTYPES.map((option: String, id: number) => (
                <Pressable key={id}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      backgroundColor: '#efefef',
                      margin: 10,
                      borderRadius: 5,
                    }}>
                    {option}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          <View>
            <Text>Price</Text>
            <View style={{flexDirection: 'row', padding: 10, flexWrap: 'wrap'}}>
              {PRICIN.map((option: String, id: number) => (
                <Pressable key={id}>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      backgroundColor: '#efefef',
                      margin: 10,
                      borderRadius: 5,
                    }}>
                    {option}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          <View>
            <Text>Location</Text>
            <View>
              <Text>Location dropdown</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button title="Cancel" type="primary" />
            <Button title="Apply" />
          </View>
          {/* {EVENTTYPES.map((option: String) => (
            <View key={option} style={styles.section}>
              <Text style={styles.sectionTitle}>{option}</Text>
              {option ? (
                <Text style={styles.sectionTitle}>{option.title}</Text>
              ) : null}
              <View style={styles.sectionContent}>
                {option.data.map(item => (
                  <Pressable
                    key={item.id}
                    style={[
                      styles.optionBtn,
                      isOptionSelected(item.id) &&
                        isOptionSelected(item.id).id === item.id &&
                        styles.selected,
                    ]}
                    // onPress={() => selectOption(item)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isOptionSelected(item.id) &&
                          isOptionSelected(item.id).id === item.id &&
                          styles.selectedText,
                      ]}>
                      {item.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))} */}
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={close}
          style={styles.button}>
          <Text style={styles.buttonText}>home:See_67_packed_meals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
