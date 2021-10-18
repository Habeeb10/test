import React from 'react';
import {Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Container} from '../../components/container';

function Profile() {
  return (
    <Container>
      <KeyboardAwareScrollView></KeyboardAwareScrollView>
    </Container>
  );
}

export default Profile;
