import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ChatsWithProducts = ({
  message,
  role,
  productTitle,
  productNumber,
  img,
}) => {
  return (
    <View>
      {role === 'chatbot' && (
        <View>
          <View style={{width: wp(70)}} className="bg-blue-100 p-4 rounded-3xl">
            {/* <Text
              style={{fontSize: hp(2), marginRight: hp(2), marginLeft: hp(1)}}
              className="text-lg  text-black">
              {message}
            </Text> */}

            <View
              style={{width: wp(62)}}
              className="bg-white p-4 rounded-3xl flex flex-row justify-center items-center">
              <Image
                source={require('../../assets/images/handbag.png')}
                style={{width: wp(20), height: hp(8)}}
              />

              <View className="mx-3">
                <View className="flex flex-row justify-center items-baseline mt-2 mb-2">
                  <Text
                    style={{fontSize: hp(2)}}
                    className="mt-2 mr-2 ml-2 text-black">
                    {productTitle}
                  </Text>
                  <Image source={require('../../assets/images/tick.png')} />
                </View>

                <View className="flex flex-row justify-center items-baseline mt-2 mb-2">
                  <Text className="mt-2 mr-2 ml-2">{productNumber}</Text>
                  <Image source={require('../../assets/images/arrow.png')} />
                </View>
              </View>
            </View>

            <Text
              style={{fontSize: hp(1.5), marginRight: hp(2), marginLeft: hp(1)}}
              className="text-lg  text-black">
              {message}
            </Text>
          </View>

          <Text
            style={{fontSize: hp(2), marginLeft: hp(3)}}
            className="text-black">
            4:48 PM
          </Text>
        </View>
      )}
    </View>
  );
};

export default ChatsWithProducts;
