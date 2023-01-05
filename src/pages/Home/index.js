import { StyleSheet, View, Text, ScrollView} from 'react-native'
import React, { Component } from 'react'
import { BannerSlider, HeaderComponent, ListJerseys, ListLiga, Tombol } from '../../components'
import { colors, fonts } from '../../utils'
import {dummyJerseys, dummyLigas} from '../../data'
import { Jarak } from '../../components'

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ligas:dummyLigas,
       jerseys:dummyJerseys,
    }
  }

  render() {
    const {ligas, jerseys} = this.state;
    // console.log("Navigasi=== ", this.props.navigation);
    const {navigation} = this.props;

    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation}/>
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga ligas={ligas} />
          </View>

          {/* <Text style={{fontFamily:'CourierPrime-Italic',fontSize:30,}}>Testing</Text>
          <Text>Testing</Text>
          <Text>Testing</Text> */}

          <View style={styles.pilihJersey}>
            {/* <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda Inginkan</Text> */}
            <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda Inginkan</Text>
            <ListJerseys jerseys={jerseys} navigation={navigation}/>

            <Tombol title="Lihat Semua" type="text" padding={7}/>
          </View>

          <Jarak height={100}/>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // page:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
  page:{ flex: 1, backgroundColor: colors.white },
  pilihLiga:{
    marginHorizontal:30,
    marginTop:10,
  },
  pilihJersey:{
    marginHorizontal:30,
    marginTop:10,
  },
  label:{
    fontSize:18,
    fontFamily:fonts.primary.regular,
  },
  boldLabel:{
    fontSize:18,
    fontFamily:fonts.primary.bold,
  },
})