import {Modal, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class JerseySlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImage: false,
      previewImage: false,
    };
  }

  clickPreview = index => {
    this.setState({
      openImage: true,
      previewImage: [
        {
          url: '',
          props: {
            // Or you can set source directory.
            source: this.props.images[index],
          },
        },
      ],
    });
  };

  render() {
    console.log('IMAGES PROPS === ', this.props);
    const {images} = this.props;
    const {openImage, previewImage} = this.state;

    return (
      <View>
        <SliderBox
          images={images}
          circleLoop
          sliderBoxHeight={responsiveHeight(430)}
          imagesComponentStyle={styles.jersey}
          dotStyle={styles.dotStyle}
          dotColor={colors.primary}
          imageLoadingColor={colors.primary}
          onCurrentImagePressed={index => this.clickPreview(index)}
        />

        <Modal visible={openImage} transparent={true}>
          <ImageViewer
            imageUrls={previewImage}
            backgroundColor={colors.primary}
            onClick={()=> this.setState({openImage:false})}
            enableSwipeDown
            onSwipeDown={()=> this.setState({openImage:false})}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  jersey: {
    marginTop: 25,
    width: responsiveWidth(344),
    // backgroundColor: 'red',
  },
  dotStyle: {
    marginTop: -50,
  },
});
