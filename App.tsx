import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {DropMenu} from './src/component/dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from './src/styles';
import {SearchBar} from './src/component/SearchBar';
import {ItemProps} from 'rn-dropdown-picker';
import {DropdownComp} from './src/component/dropdowenComp';

const data = [
  {
    label: 'Nature',
    value: [
      {label: 'Gym1', value: 'HomeWorkOut'},
      {label: 'Food2', value: 'GermanFood'},
    ],
  },
  {
    label: 'Lifestyle',
    value: [
      {label: 'Gym', value: 'HomeWorkOut'},
      {label: 'Food', value: 'GermanFood'},
    ],
  },
  {
    label: 'Lifele',
    value: 'jdk',
  },
];

const BadgeBgColor = ['#D3EFD3', '#D3EFEC'];
const ListHeaderIcon = <Icon name="dot-single" size={30} color="black" />;
const ListRightIcon = <Icon name="shopping-cart" size={20} color="black" />;
const SubLevelLeftIcon = <Icon name="list" size={15} color="black" />;

export default function App() {
  return (
    <View style={{flex: 1, paddingVertical: 30}}>
      {/* <DropMenu
        renderItemsBelowPicker={false}
        showMultipleAsBadge={true}
        data={data}
        badgeBackgroundColor={BadgeBgColor}
        onSelected={(e: string[]) => {
          return null;
        }}
        radius={20}
        borderless={true}
        dropdownIndicator="plus"
        listItemLeftIconComp={ListHeaderIcon}
        ListItemSelectedIconComp={ListRightIcon}
        sublistItemLeftIconComp={SubLevelLeftIcon}
      /> */}

      <DropdownComp
        showMultipleAsBadge={true}
        radius={20}
        borderless={true}
        onSelected={(e: string[]) => {
          return null;
        }}
        data={data}
        badgeBackgroundColor={BadgeBgColor}
        listItemLeftIconComp={ListHeaderIcon}
        ListItemSelectedIconComp={ListRightIcon}
        searchable
        dropdownIndicator='arrow'
        // sublistItemLeftIconComp={SubLevelLeftIcon}
      />
    </View>
  );
}
