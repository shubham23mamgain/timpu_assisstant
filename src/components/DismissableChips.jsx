import {View, Alert, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Chip} from 'react-native-paper';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DismissableChips = () => {
  const dataSource = ['Strap - Long', 'Colour', 'Material', 'Size', 'Brand'];
  const [items, setItems] = useState(['Strap - Long']);
  const newItem = '';
  const gray = 'rgba(156,163,175,1)';
  const blue = 'rgba(59, 130, 246, 1)';
  const lightblue = 'rgba(239,246,255,1)';

  return (
    <ScrollView horizontal={true} style={{flex: 1, flexDirection: 'row'}}>
      {dataSource.map((item, index) => {
        console.log('Item', item);
        console.log('Items', items);
        return (
          <View
            style={{
              marginTop: wp(1),
              marginRight: wp(1),
              flexWrap: 'wrap',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}>
            <Chip
              key={index}
              mode="outlined"
              height={hp(4.5)}
              onClose={() => {
                if (items.includes(item))
                  setItems(items.filter(a => a !== item));
              }}
              width={wp(40)}
              textStyle={{
                color: items.includes(item) ? blue : '#737373',
                fontSize: hp(2),
              }}
              style={{
                backgroundColor: items.includes(item) ? lightblue : '#F4F4F4',
              }}
              onPress={() => {
                // Alert.alert(item.name);
                if (items.includes(item)) setItems([...items]);
                else setItems([...items, item]);
              }}>
              {item}
            </Chip>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DismissableChips;
