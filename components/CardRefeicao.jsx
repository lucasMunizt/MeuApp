import { Text, View, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { Image, StyleSheet, TextInput, Pressable } from "react-native";
export default function CardRefeicao ({ imagem, nome, kcal, onAdicionar }){
    return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={imagem}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
                marginLeft: 10,
              }}
            />
            <View>
              <Text>{nome}</Text>
              <Text>{kcal}</Text>
            </View>
          </View>
          <Text
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#004B2A",
              color: "white",
              textAlignVertical: "center",
              textAlign: "center",
              borderRadius: 110,
              marginRight:20,
              fontSize:20
            }}
            onPress={onAdicionar}
          >
            +
          </Text>
        </View>
      );
}

