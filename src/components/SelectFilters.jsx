import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SelectFilters = () => {
  return (
    <View className="flex flex-row mt-4">
      <Text>Select Filters</Text>
      <View className="flex-1 justify-end flex-row">
        <Image source={require('../../assets/images/filter.png')} />
        <Text>Filter</Text>
      </View>
    </View>
  );
};

export default SelectFilters;

const styles = StyleSheet.create({});
