import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TopHeader from '../components/Header';
import Chats from '../components/Chats';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ChatsWithProducts from '../components/ChatsWithProducts';
import SelectFilters from '../components/SelectFilters';
import DismissableChips from '../components/DismissableChips';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const categories = [
    {
      name: 'Clutch',
    },
    {
      name: 'Fabric Lining',
    },
    {
      name: 'Baggit',
    },
    {
      name: 'MultiThread',
    },
    {
      name: 'Spacious',
    },
    {
      name: 'Leather',
    },
  ];
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <TopHeader />
      <Chats
        message=" Hi Sam! I am your personal shopping assisstant, how can I help you
              today ?"
        role="chatbot"
      />

      <Chats
        message="I am looking for a hand bag, with long strap ?"
        role="user"
      />

      <View>
        <Text className="text-gray-400 mb-4">Popular Tags for Hand Bag</Text>

        <View className="flex flex-row mb-4" style={{width: wp(85)}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex gap-2 flex-row">
              {categories.map(category => (
                <View
                  key={category.name}
                  className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-blue-500  bg-blue-50 py-1.5 px-3 font-sans text-xs font-bold uppercase">
                  <Text
                    style={{fontSize: hp(2.5)}}
                    className="font-bold text-blue-500">
                    {category.name}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View className="p-2 justify-center">
            <TouchableOpacity
              onPress={() => {
                categories.filter(c => c.nam);
              }}>
              <Image
                style={{width: wp(1.5), height: hp(1.5)}}
                source={require('../../assets/images/arrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ChatsWithProducts
        message="Or set filter and help us choose the best bag for you"
        role="chatbot"
        productTitle="Bags on Timpu"
        productNumber="1123 Products"
        img="handbag"
      />

      <SelectFilters />

      <DismissableChips />

      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
