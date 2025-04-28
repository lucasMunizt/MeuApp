import { Text, View, Keyboard, Pressable, Image, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from 'react';
import homeImg from '../assets/icons/home.png';
import pessoaImg from '../assets/icons/pessoa.png';
import listaImg from '../assets/icons/lista.png';
import { useRouter } from 'expo-router';

export default function Footer() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopColor: "#C8C8C8",
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          {/* HOME */}
          <Pressable onPress={() => router.push('/Home')}>
            <Image
              source={homeImg}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </Pressable>

          {/* LISTA */}
          <Pressable onPress={() => router.push('/Lista')}>
            <Image
              source={listaImg}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </Pressable>

          {/* PERFIL */}
          <Pressable onPress={() => router.push('/Perfil')}>
            <Image
              source={pessoaImg}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
