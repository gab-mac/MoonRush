import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavBar = () => {
    return (
        <View style={styles.container}>
            <Icon.Button name='chart-bar' backgroundColor='transparent' size={30} />
            <Icon.Button name='plus' backgroundColor='transparent' size={30} />
            <Icon.Button name='cog' backgroundColor='transparent' size={30} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000000c0',
        height: 50,
        borderRadius: 20,
        overlayColor: 'red'
    }
})

export default NavBar;
