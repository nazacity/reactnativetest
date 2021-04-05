import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, Platform} from 'react-native';
import {Icon} from 'react-native-elements';

import {Button, FloatingLabelInput} from '../../components';

import {COLORS} from '../../constants';

const LoginScreen = ({navigation}) => {
  // INPUT FUNCTIONS
  const [hidePassword, setHidePassword] = useState(true);
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  // FOCUSES
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {}, []);

  const onSubmit = async () => {
    setValue({
      username: '',
      password: '',
    });
    navigation.navigate('Home');
  };

  return (
    <View style={[{flex: 1, backgroundColor: COLORS.backgroundColor}]}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Image
            source={{
              uri:
                'https://cms.dmpcdn.com/travel/2016/11/07/e23d93e1-c4bd-4dfa-bceb-22e2a229da04.jpg',
            }}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </View>
        <View style={{marginHorizontal: 30}}>
          <FloatingLabelInput
            floatingLabel={'Username'}
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={text => {
              setValue({...value, username: text});
            }}
            value={value.username}
            onFocus={() => {
              setFocus({...focus, email: true});
            }}
            onBlur={() => {
              setFocus({...focus, email: false});
            }}
          />
        </View>
        <View style={{marginHorizontal: 30}}>
          <FloatingLabelInput
            floatingLabel={'Password'}
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={text => {
              setValue({...value, password: text});
            }}
            value={value.password}
            rightIcon={
              <Icon
                name={hidePassword ? 'eye-off' : 'eye'}
                type="ionicon"
                size={24}
                color={
                  value || focus.password
                    ? COLORS.pinkPastel
                    : COLORS.inputPlaceholderColor
                }
                onPress={() => setHidePassword(!hidePassword)}
              />
            }
            secureTextEntry={hidePassword}
            onFocus={() => {
              setFocus({...focus, password: true});
            }}
            onBlur={() => {
              setFocus({...focus, password: false});
            }}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            label={'Login'}
            color={
              value.username && value.password
                ? COLORS.primary
                : COLORS.inputPlaceholderColor
            }
            disabled={value.username && value.password ? false : true}
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
