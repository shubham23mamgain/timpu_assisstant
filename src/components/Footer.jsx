import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Footer = () => {
  const [message, setMessage] = useState('');
  return (
    <View style={{marginBottom: hp(4), marginTop: hp(1)}}>
      <SafeAreaView className="">
        <View
          style={{width: wp(90), height: hp(12)}}
          className="bg-blue-100 radius items-center rounded-b-3xl">
          <View className="flex flex-row mt-3 ">
            <View
              style={{width: wp(65), height: hp(6)}}
              className="bg-white flex flex-row rounded-2xl">
              <TextInput
                placeholder=" Type Your Message"
                value={message}
                onChangeText={e => setMessage(e)}
                className="p-4"
              />
              <Image
                style={{marginTop: hp(2), marginLeft: wp(10)}}
                source={require('../../assets/images/paperclip.png')}
                className="mt-4 ml-8 justify-end"
              />
            </View>

            <View
              style={{
                marginLeft: wp(2),
                width: wp(16),
                height: hp(6),
                backgroundColor: '#4C82EF',
              }}
              className="bg-blue-200 rounded-2xl">
              <TouchableOpacity
                onPress={() => Alert.alert('Message or Pic Send', message)}>
                <Image
                  style={{marginTop: hp(2), margin: wp(7)}}
                  source={require('../../assets/images/white_arrow.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex flex-row justify-center mt-2 items-start">
            <Text
              style={{fontSize: hp(2), color: '#B1B1B1'}}
              className="text-blue-400 font-semibold items-start">
              Powered By
            </Text>

            <Text
              style={{fontSize: hp(2), marginLeft: wp(1), color: '#7A7F8C'}}
              className="text-blue-400 font-semibold items-start">
              Krunk.ai
            </Text>

            <Image
              source={require('../../assets/images/logo.png')}
              style={{marginLeft: wp(2), marginTop: hp(0.5)}}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Footer;
