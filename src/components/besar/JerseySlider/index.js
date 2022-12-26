import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import ImageViewer from 'react-native-image-zoom-viewer';
import { SliderBox } from "react-native-image-slider-box";
import { colors, responsiveHeight, responsiveWidth } from '../../../utils';

export default class JerseySlider extends Component {
  render() {
    console.log('IMAGES PROPS === ', this.props);
    const {images} = this.props;

    return (
      <View>
        <SliderBox images={images} circleLoop sliderBoxHeight={responsiveHeight(430)} imagesComponentStyle={styles.jersey} dotStyle={styles.dotStyle} dotColor={colors.primary} imageLoadingColor={colors.primary}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  jersey:{
    marginTop: 25,
    width: responsiveWidth(344),
    // backgroundColor: 'red',
  },
  dotStyle:{
    marginTop: -50,
  },
})