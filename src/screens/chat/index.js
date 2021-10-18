import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container} from '../../components/container';
import {Chat} from './chatCard';
import * as Images from '../../../assets/image';
import {View, Text, TouchableOpacity} from 'react-native';
import {messagesStyles as styles} from './styles';
import {Icon, SearchIcon} from '../../../assets/svg';
import {Searchinput} from '../../components/searchInput';

const LIST = [
  {
    icon: Images.deola,
    title: 'Deola',
    toppings: 'Sticker 😍',
    time: '23 min',
  },
  {
    icon: Images.abigail,
    title: 'Abigail',
    toppings: 'typing',
    messages: '2',
    time: '27 min',
  },
  {
    icon: Images.chi,
    title: 'Chidimma',
    toppings: 'Ok, see you then.',
    messages: '1',
    time: '33 min',
  },
  {
    icon: Images.vivian,
    title: 'vivian',
    toppings: 'You: Hey! What’s up, long time..',
    time: '50 min',
  },
  {
    icon: Images.funmi,
    title: 'Funmi',
    toppings: 'You: Hello how are you?',
    time: '55 min',
  },
  {
    icon: Images.grace,
    title: 'Grace',
    toppings: 'You: Great I will write later..',
    time: '1 hour',
  },
];

function Messages({navigation}) {
  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.overall}>
          <Text style={styles.chats}>Chats</Text>
          <TouchableOpacity
            style={styles.iconcontainer}
            onPress={() => navigation.navigate('login')}>
            <Icon />
          </TouchableOpacity>
        </View>

        <Searchinput
          style={styles.input}
          icon={<SearchIcon />}
          placeholder="search"
        />
        <Text style={styles.message}>Messages</Text>
        <View style={styles.container}>
          <View>
            {LIST.map((item, index) => {
              return (
                <Chat
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  toppings={item.toppings}
                  messages={item.messages}
                  time={item.time}
                />
              );
            })}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default Messages;
