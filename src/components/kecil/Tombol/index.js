import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack, IconKeranjang } from '../../../assets'
import { colors } from '../../../utils'
import TextOnly from './TextOnly'
import TextIcon from './TextIcon'

const Tombol = (props) => {
  const Icon = () => {
		if(icon === "keranjang"){
			return <IconKeranjang/>
		}else if(icon === "arrow-left"){
			return <IconBack />
		} 

		return <IconKeranjang/>
	}

	// const {icon, totalKeranjang, padding, type, onPress, title} = props;
	const {icon, totalKeranjang, padding, type, onPress} = props;

	if(type === "text") return <TextOnly {...props} />
	else if(type === "textIcon") return <TextIcon {...props} />

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon/>

	  {totalKeranjang && (
		  <View style={styles.notif}>
			  <Text style={styles.textNotif}>{totalKeranjang}</Text>
		  </View>
	  )}
    </TouchableOpacity>
  )
}

export default Tombol

const styles = StyleSheet.create({
	container: (padding) => ({
		backgroundColor: colors.white,
		padding: padding,
		borderRadius:5,
	}),
	notif:{
		position:'absolute',
		top: 5,
		right: 5,
		backgroundColor:'red',
		borderRadius:3,
		padding:3,
	},
	textNotif:{
		fontSize:8,
		color: colors.white,
	},
})