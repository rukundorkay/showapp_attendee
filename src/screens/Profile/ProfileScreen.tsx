import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    Image,
    Button,
    TextInput,
} from 'react-native';
import { globalStyles } from '../../constants';
import { style } from './ProfileScreen.styles';

const ProfileScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={globalStyles.flexer}>
                    <Image
                        style={style.profileImage}
                        source={require('../../assets/images/wall.png')}
                    />
                </View>
                <View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProfileScreen;
