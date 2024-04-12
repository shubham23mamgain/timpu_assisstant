import {View, Alert} from 'react-native';
import React, {useState} from 'react';
import {Chip} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DismissableChips = () => {
  const dataSource = ['Strap - Long', 'Colour', 'Size', 'Brand', 'Material'];
  const [items, setItems] = useState(['Strap - Long']);
  const gray = 'rgba(156,163,175,1)';
  const blue = 'rgba(59, 130, 246, 1)';
  const lightblue = 'rgba(239,246,255,1)';

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {dataSource.map((item, index) => {
        return (
          <View
            style={{
              marginTop: wp(1),
              marginRight: wp(1),
              flexWrap: 'wrap',
              justifyContent: 'start',
              alignItems: 'center',
            }}>
            <Chip
              key={index}
              mode="outlined"
              height={hp(4.5)}
              onClose={() => {}}
              width={wp(40)}
              textStyle={{
                color: items.includes(item) ? blue : '#737373',
                fontSize: hp(2),
              }}
              style={{
                backgroundColor: items.includes(item) ? lightblue : '#F4F4F4',
              }} //display diff color BG
              onPress={() => Alert.alert(item)}>
              {item}
            </Chip>
          </View>
        );
      })}
    </View>
  );
};

export default DismissableChips;
