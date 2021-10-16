import React, {useState} from 'react';
import {Alert, View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Input} from '../../components/input';
import {Button} from '../../components/button';
import {Coolicon, Secure} from '../../../assets/svg';
import {LoginStyles as styles} from './styles';
import {Container} from '../../components/container';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleStart = () => {
    if (!email || !username) {
      return Alert.alert('Warning', 'Email or Username is Required');
    } else navigation.navigate('home');
  };
  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.coolcontainer}>
          <View style={styles.coolicon}>
            <Coolicon />
          </View>
          <View>
            <Text style={styles.spec}>Spec</Text>
          </View>
          <View>
            <Text style={styles.love}>find love here</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email or Username"
            value={email}
            onchange={setEmail}
          />
          <View style={styles.secureContainer}>
            <Input
              placeholder="Password"
              value={password}
              onchange={setPassword}
              icon={<Secure />}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetpassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button title="Log In" style={styles.button} onPress={handleStart} />
        <View style={styles.signupcontainer}>
          <TouchableOpacity>
            <Text style={styles.account}> Don’t have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}
