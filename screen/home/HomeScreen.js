import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Alert,
  BackHandler,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {Button, ImageModal} from '../../components';
import {COLORS, SIZES} from '../../constants';

const HomeScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    picture_url: '',
  });
  const handleClose = () => {
    setOpen(false);
  };
  const promote_activities = [
    {
      id: '1',
      onPress: () => {
        Linking.openURL('https://www.thelivingos.com/');
      },
      picture_url:
        'https://cms.dmpcdn.com/travel/2016/11/07/e23d93e1-c4bd-4dfa-bceb-22e2a229da04.jpg',
    },
    {
      id: '2',
      onPress: () => {
        Linking.openURL(
          `https://www.google.com/maps/search/?api=1&query=13.767507,100.5457123`,
        );
      },
      picture_url:
        'https://findingbeautyeverywhere.com/wp-content/uploads/2019/05/57-600x381.jpg',
    },
    {
      id: '3',
      onPress: () => {
        setOpen(true);
      },
      picture_url:
        'https://findingbeautyeverywhere.com/wp-content/uploads/2019/05/58-678x381.jpeg',
    },
  ];

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Do you want to exit the app?', 'Are you sure?', [
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
        ]);
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const Card = ({item}) => {
    return (
      <ImageBackground
        source={{uri: item.picture_url}}
        style={{
          width: SIZES.width,
          height: (SIZES.width * 2) / 3,
          resizeMode: 'cover',
        }}>
        <TouchableOpacity
          style={{
            width: SIZES.width,
            height: (SIZES.width * 2) / 3,
          }}
          onPress={() => {
            setItem(item);
            item.onPress();
          }}></TouchableOpacity>
      </ImageBackground>
    );
  };

  const onLogout = async () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
      <View
        style={{
          height: (SIZES.width * 2) / 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.backgroundColor,
        }}>
        <Swiper
          height={(SIZES.width * 2) / 3}
          autoplay
          dotColor="rgba(255,255,255,0.6)"
          activeDotColor={COLORS.backgroundColor}>
          {promote_activities.map((item, index) => {
            return <Card key={index} item={item} index={index} />;
          })}
        </Swiper>
        <ImageModal
          open={open}
          handleClose={handleClose}
          source={{uri: item.picture_url}}
        />
      </View>
      <View style={{flex: 1}} />
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Button
          label={'ListView'}
          color={COLORS.primary}
          onPress={() => {
            navigation.navigate('ListView');
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Button label={'Logout'} color={COLORS.primary} onPress={onLogout} />
      </View>
    </View>
  );
};

export default HomeScreen;
