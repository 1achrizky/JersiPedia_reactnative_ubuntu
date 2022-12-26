import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconHome,IconHomeAktif,IconJersey,IconJerseyAktif,IconProfile,IconProfileAktif} from '../../../assets'
import {colors, fonts} from '../../../utils'

const TabItem = ({index, isFocused,onLongPress,onPress,label}) => {
	const Icon = () =>{
		if(label === "Home") return isFocused? <IconHomeAktif/> : <IconHome/>;
		if(label === "Jersey") return isFocused? <IconJerseyAktif/> : <IconJersey/>;
		if(label === "Profile") return isFocused? <IconProfileAktif/> : <IconProfile/>;

		return <IconHome/>;
	}

  return (
    <TouchableOpacity
			onPress={onPress}
			onLongPress={onLongPress}
			// style={{ flex: 1 }}
			style={styles.container}
		>
			<Icon />
			{/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}> */}
			<Text style={styles.text(isFocused)}>
				{label}
			</Text>
		</TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
	container:{
		alignItems:'center',
		// flex:1,
	},
	text:(isFocused) => ({
		color: isFocused? colors.white : colors.secondary,
		fontSize: 11,
		marginTop: 4,
		fontFamily: fonts.primary.bold,
	})
});