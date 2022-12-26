import { StyleSheet, View, Text, ScrollView} from 'react-native'
import React, { Component } from 'react'
import { BannerSlider, HeaderComponent, ListJerseys, ListLiga, Tombol } from '../../components'
import { colors, fonts } from '../../utils'
import {dummyJerseys, dummyLigas} from '../../data'
import { Jarak } from '../../components'

export default class ListJersey extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ligas:dummyLigas,
       jerseys:dummyJerseys,
    }
  }

  render() {
    const {ligas, jerseys} = this.state
    return (
      <View style={styles.page}>
        <HeaderComponent/>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          
          <View style={styles.pilihLiga}>
            <ListLiga ligas={ligas} />
          </View>
          
          <View style={styles.pilihJersey}>
            {/* <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda Inginkan</Text> */}
            <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda Inginkan</Text>
            <ListJerseys jerseys={jerseys}/>
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
  container:{
    marginTop: -30,
  },
  pilihLiga:{
    marginHorizontal:30,
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