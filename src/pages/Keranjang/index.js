import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {dummyPesanans} from '../../data'
import {ListKeranjang} from '../../components'
import { colors } from '../../utils'

export default class Keranjang extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pesanan: dummyPesanans[0]
    }
  }

  render() {
    const {pesanan} = this.state

    return (
      <View style={styles.page}>
        <ListKeranjang keranjangs={pesanan.pesanans} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    backgroundColor: colors.white,
    flex:1,
  }
})