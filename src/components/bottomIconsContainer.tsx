import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles'

type Props = {
    setModalVisible: Dispatch<SetStateAction<boolean>>;
 }

const NavBar = ({setModalVisible}: Props) => {
    return (
        <View style={navBarStyles.container}>
            <Icon.Button name='chart-bar' backgroundColor='transparent' size={30} onPress={() => {setModalVisible(true)}} />
            <Icon.Button name='plus' backgroundColor='transparent' color={styles.color.primary} size={30} onPress={() => {setModalVisible(true)}} />
            <Icon.Button name='cog' backgroundColor='transparent' size={30} onPress={() => {setModalVisible(false)}} />
        </View>
    );
}

const navBarStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: styles.color.secondary,
        height: 50,
    }
})

export default NavBar;
