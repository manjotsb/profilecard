import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileCard(): React.JSX.Element{
    return(
        <View style={styles.card}>
            <Image source={require('../../src/assets/banner.jpg')} style={styles.banner}/>
            <Image source={require('../../src/assets/profilePhoto.jpeg')} style={styles.profilepfp}/>
            <Text style={styles.name}>Manjot Singh</Text>
            <Text style={styles.subtitle}>Student</Text>
            <Text style={styles.introduction}>Just a student, looking to pass!!</Text>

            <View style={styles.socialIconview}>
                <Image source={require('../../src/assets/fb.png')} style={styles.socialicons}/>
                <Image source={require('../../src/assets/insta.png')} style={styles.socialicons}/>
                <Image source={require('../../src/assets/linkedin.png')} style={styles.socialicons}/>
                <Image source={require('../../src/assets/twitter.png')} style={styles.socialicons}/>
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    card:{
        height: 500,
        width: '80%',
        elevation: 20, 
        borderRadius: 20,
        backgroundColor:'white',
        alignItems:'center',
        position:'relative',
    },

    banner:{
        height:180,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        resizeMode:'cover',
    },

    profilepfp:{
        height:140,
        width:140,
        borderRadius:140/2,
        position:'absolute',
        top: 110,
        borderWidth:7,
        borderColor:'white',
        resizeMode:'cover',
    },

    name:{
        marginTop:50,
        fontSize:30,
        fontWeight:600,
        fontFamily:'Pacifico',
    },

    subtitle:{
        fontSize:25,
        fontWeight:400,
        fontFamily:'Pacifico',
    },

    introduction:{
        fontSize:22,
        fontFamily:'sans-serif',
        fontWeight:400,
        resizeMode:'cover',
    },

    socialIconview:{
        flexDirection:'row',
        marginTop:20,
    },

    socialicons:{
        height:30,
        width:30,
        borderRadius:30/2,
        resizeMode:'cover',
        marginHorizontal:10,
    },
});