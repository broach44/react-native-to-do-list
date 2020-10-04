// @flow

import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import Styles from './styles';
import IconButton from '../icon-button';

type OptionsContainerPropsType = {
  itemId: string
};

export default function OptionsContainer(props: OptionsContainerPropsType): Object {
  const [isEnabled, setEnabled] = useState(false);

  return (
    <View style={Styles.OptionsContainer}>
      <View style={Styles.Button}>
        <IconButton iconName="edit" color="black" onPress={() => true} />
      </View>

      <View style={Styles.Button}>
        <IconButton iconName="remove" color="black" onPress={() => true} />
      </View>

      <View style={Styles.Switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
