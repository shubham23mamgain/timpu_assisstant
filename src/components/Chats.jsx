import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Chats = ({message, role}) => {
  return (
    <View>
      {role === 'chatbot' && (
        <View>
          <View style={{width: wp(65)}} className="bg-blue-100 p-4 rounded-3xl">
            <Text
              style={{fontSize: hp(2), marginRight: hp(2), marginLeft: hp(1)}}
              className="text-lg  text-black">
              {message}
            </Text>
          </View>
          <Text
            style={{fontSize: hp(2), marginLeft: hp(3)}}
            className="text-black">
            4:45 PM
          </Text>
        </View>
      )}

      {role == 'user' && (
        <View>
          <View className="flex-row justify-end">
            <View
              style={{width: wp(65), backgroundColor: '#DCF7C5'}}
              className="p-2 rounded-3xl flex-row justify-end">
              <Text
                style={{fontSize: hp(2), marginRight: hp(2)}}
                className="text-lg  text-black">
                {message}
              </Text>
            </View>
          </View>
          <View className="flex-row justify-end">
            <Text
              style={{fontSize: hp(2), marginRight: hp(3)}}
              className="text-black">
              4:46 PM
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
