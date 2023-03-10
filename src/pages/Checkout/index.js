import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {colors, fonts, numberWithCommas, responsiveHeight} from '../../utils'
import { dummyPesanans, dummyProfile } from '../../data'
import {CardAlamat, Jarak, Pilihan, Tombol} from '../../components'

export default class Checkout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       profile: dummyProfile,
       pesanan: dummyPesanans[0],
       expedisi: [],
    }
  }
  
  render() {
    const {profile, pesanan, expedisi} = this.state;
    // console.log('checkout', profile);

    return (
      <View style={styles.pages}>
        <View style={styles.isi}>
          <Text style={styles.textBold}>Apakah Benar Alamat ini ?</Text>
          <CardAlamat profile={profile}/>

          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(pesanan.totalHarga)}
            </Text>
          </View>

          <Pilihan label="Pilih Expedisi" datas={expedisi}/>

          <Jarak height={10}/>
          <Text style={styles.textBold}>Biaya Ongkir :</Text>
          
          <View style={styles.ongkir}>
            <Text style={styles.text}>Untuk Berat : {pesanan.berat} kg</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(15000)}
            </Text>
          </View>
          
          <View style={styles.ongkir}>
            <Text style={styles.text}>Estimasi Waktu :</Text>
            <Text style={styles.textBold}>
              2-3 Hari
            </Text>
          </View>          

        </View>

        {/* <View  style={styles.fo}>
          <Text>Test</Text>
        </View> */}

        <View style={styles.footer}>
          {/* Total Harga */}
          <View style={styles.totalHarga}>
            <Text style={styles.textBold}>Total Harga :</Text>
            <Text style={styles.textBold}>
              Rp. {numberWithCommas(pesanan.totalHarga+15000)}
            </Text>
          </View>

          <Tombol
            title="Check Out"
            type="textIcon"
            fontSize={18}
            padding={responsiveHeight(15)}
            icon="keranjang-putih"
            onPress={()=> this.props.navigation.navigate('Bayar')}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages:{
    flex: 1,
    backgroundColor: colors.white,
    paddingTop:30,
    justifyContent:'space-between',
  },
  isi:{
    paddingHorizontal: 30,
  },
  textBold:{
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  text:{
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  totalHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  ongkir:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,

    elevation: 11,
    paddingBottom: 30,
  },
})