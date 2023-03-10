import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack, IconKeranjang, IconKeranjangPutih } from '../../../assets'
import { colors, fonts } from '../../../utils'

// const TextIcon = (props) => {
const TextIcon = ({icon, padding, onPress, title, fontSize} ) => {

  const Icon = () => {
		if(icon === "keranjang"){
			return <IconKeranjang/>
		}else if(icon === "arrow-left"){
			return <IconBack />
		}else if(icon === "keranjang-putih"){
			return <IconKeranjangPutih />
		} 

		return <IconKeranjang/>
	}

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon/>
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TextIcon

const styles = StyleSheet.create({
	container: (padding) => ({
		backgroundColor: colors.primary,
		padding: padding,
		borderRadius:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
	}),
  title: (fontSize) => ({
    color: colors.white,
    fontSize: fontSize? fontSize: 15,
    fontFamily: fonts.primary.bold,
  }),
})