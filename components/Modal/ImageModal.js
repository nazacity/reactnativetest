import React, {useState, Fragment} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {SIZES} from '../../constants';

import Modal from 'react-native-modal';

const ImageModal = ({open, source, handleClose}) => {
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={open}
      style={{margin: 0, justifyContent: 'center', zIndex: 1}}
      onBackdropPress={handleClose}
      onBackButtonPress={handleClose}
      avoidKeyboard
      onSwipeComplete={handleClose}
      useNativeDriverForBackdrop
      swipeDirection={['down', 'up']}>
      <TouchableOpacity
        activeOpacity={1}
        showsVerticalScrollIndicator={false}
        onPress={handleClose}>
        <Image
          style={{width: SIZES.width, height: '100%', resizeMode: 'contain'}}
          source={source}
        />
      </TouchableOpacity>
    </Modal>
  );
};

export default ImageModal;
