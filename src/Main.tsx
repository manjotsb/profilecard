import React from 'react'
import { StyleSheet, View } from 'react-native';
import ProfileCard from './components/ProfileCard';


export default function Main(): React.JSX.Element {
    return(
        <View>
            <ProfileCard/>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
});