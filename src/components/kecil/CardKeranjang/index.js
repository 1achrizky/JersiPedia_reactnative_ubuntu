import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils'
import { IconHapus } from '../../../assets'
import Jarak from '../Jarak'

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <Image source={keranjang.product.gambar[0]} style={styles.gambar}/>
      <View style={styles.desc}>
        <Text style={styles.nama}>{keranjang.product.nama}</Text>
        <Text style={styles.text}>Rp. { numberWithCommas(keranjang.product.harga)}</Text>
        
        <Jarak height={responsiveHeight(14)}/>

        <Text style={styles.textBold}>Pesan : 
          <Text style={styles.text}>{ keranjang.jumlahPesan}</Text>
        </Text>
        <Text style={styles.textBold}>Ukuran: 
          <Text style={styles.text}>{ keranjang.ukuran}</Text>
        </Text>
        <Text style={styles.textBold}>Total Harga: 
          <Text style={styles.text}>Rp. { numberWithCommas(keranjang.totalHarga) }</Text>
        </Text>
        <Text style={styles.textBold}>Keterangan:</Text>
        <Text style={styles.text}>{ keranjang.keterangan}</Text>
      </View>
      <View style={styles.hapus}>
        <IconHapus />
      </View>
    </View>
  )
}

export default CardKeranjang

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
		marginTop: 15,
		// justifyContent: 'space-between',
		backgroundColor: colors.white,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,

		marginHorizontal:30,
		borderRadius: 10,
		alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  gambar:{
    width: responsiveWidth(77),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  hapus:{
    flex: 1,
    alignItems: 'flex-end',
  },
  nama:{
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  text:{
    fontFamily: fonts.primary.regular,
    fontSize: 11,
  },
  textBold:{
    fontFamily: fonts.primary.bold,
    fontSize: 11,
  },
})