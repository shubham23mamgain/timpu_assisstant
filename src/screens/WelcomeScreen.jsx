import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{fontSize: wp(10)}}
          className="text-center font-bold text-gray-700">
          Welcome Screen
        </Text>

        <Text
          style={{fontSize: wp(5)}}
          className="text-center tracking-wider text-gray-600 font-semibold">
          The Future is Here, Powered by AI
        </Text>
      </View>

      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/chatbot.png')}
          style={{width: wp(65), height: hp(40)}}
        />
      </View>

      <TouchableOpacity
        className="bg-gray-300 mx-5 p-4 rounded-3xl"
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{fontSize: wp(6)}}
          className="text-center font-bold text-blue-500">
          Get Started Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
