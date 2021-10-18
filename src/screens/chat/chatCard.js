import React from 'react';
import {Image, Text, View} from 'react-native';
import {messagesStyles as styles} from './styles';

export const Chat = ({icon, title, toppings, messages, time}) => {
  return (
    <View style={styles.base}>
      <View style={styles.left}>
        <Image resizeMode="contain" style={styles.image} source={icon} />
        <View style={styles.chatcontainer}>
          <View style={styles.top}>
            <Text style={styles.title}>{title}</Text>
            {messages && (
              <View style={styles.messages}>
                <Text style={styles.chat}>{messages}</Text>
              </View>
            )}
          </View>
          <View>
            <Text style={styles.toppings}>{toppings}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};
