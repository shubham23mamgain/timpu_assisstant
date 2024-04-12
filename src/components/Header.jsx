import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TopHeader = () => {
  return (
    <View style={{marginBottom: hp(6)}}>
      <SafeAreaView className="flex-1 flex justify-start">
        <View
          style={{width: wp(90), height: hp(10)}}
          className="flex flex-row bg-blue-100 radius items-center rounded-t-3xl ml-1">
          <View
            style={{width: wp(12), height: hp(6), borderRadius: wp(6)}}
            className="bg-white ml-1">
            <Image
              source={require('../../assets/images/chatbot.png')}
              className="bg-contain bg-fixed"
              style={{width: wp(12), height: hp(6)}}
            />
            <View className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0.5 right-0.5"></View>
          </View>

          <View className="flex-1 justify-center ml-5 items-start">
            <View className="flex flex-row items-center justify-start">
              <Text
                style={{fontSize: hp(3)}}
                className="text-blue-400 font-bold">
                Timpu
              </Text>

              <Image
                source={require('../../assets/images/tick.png')}
                className="ml-2"
              />
            </View>

            <Text
              style={{fontSize: hp(2)}}
              className="text-blue-400 font-semibold items-start">
              Chat assistant
            </Text>
          </View>

          <View className="flex-1 flex-row justify-end items-baseline mr-4 mt-8">
            <View className="w-3 h-3 rounded-full bg-green-500 mr-2 mt-2"></View>
            <Text style={{fontSize: hp(2)}} className="text-blue-400 font-bold">
              Online
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TopHeader;
