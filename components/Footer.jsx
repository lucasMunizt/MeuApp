import { Text, View, Keyboard } from "react-native";
import { Image, StyleSheet, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import homeImg from '../assets/icons/home.png'
import pessoaImg from '../assets/icons/pessoa.png'
import listaImg from '../assets/icons/lista.png'
export default function Footer(){


    return(

        <View style={{
            flex:1,
        }}>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopColor: "#C8C8C8", 
                    borderTopWidth: 1, 
            
                }}
            >
                <View style={{
                    alignItems:'center',
                    justifyContent:'space-around',
                    flexDirection:'row',
                    width:'100%'
                }}>
                    <Image
                        source={homeImg}
                        style={{
                            width:40,
                            height:40
                        }}
                    />

                    <Image
                        source={listaImg}
                        style={{
                            width:40,
                            height:40
                        }}
                    />

                    <Image
                        source={pessoaImg}
                        style={{
                            width:40,
                            height:40
                        }}
                    />
                </View>
            </View>
        </View>

    );



}