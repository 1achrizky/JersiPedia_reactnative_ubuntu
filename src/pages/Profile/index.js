import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils'
import {dummyProfile, dummyMenu} from '../../data'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import {ListMenu} from '../../components/besar';

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       profile: dummyProfile,
       menus: dummyMenu,
    }
  }
  
  render() {
    const {profile, menus} = this.state
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.foto}/>
          <View style={styles.profile}>
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.desc}>No.HP : {profile.nomerHp}</Text>
            <Text style={styles.desc}>{profile.alamat}, {profile.kota}</Text>
          </View>

          <ListMenu menus={menus}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: colors.primary,
  },
  container:{
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(652),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  foto:{
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75),
  },
  profile:{
    marginTop: 10,
    alignItems: 'center',
  },
  nama:{
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(22, heightMobileUI),
  },
  desc:{
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(16, heightMobileUI),
  },
})