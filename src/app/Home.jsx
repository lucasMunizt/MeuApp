import Footer from "../../components/Footer";
import { Text, View, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { Image, StyleSheet, TextInput, Pressable } from "react-native";
import cafe from "../../assets/icons/cofee.png";
import almoco from "../../assets/icons/arroz-frito.png";
import jantar from "../../assets/icons/jantar-romantico.png";
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: 370,
          height: 350,
          backgroundColor: "rgba(119, 230, 208, 0.5)",
          marginTop: 70,
          marginLeft: 11,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              width: 105,
              height: 105,
              textAlign: "center",
              color: "black",
              padding: 10,
              borderRadius: 110,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              textAlignVertical: "center",
              marginTop: 30,
              fontWeight: 500,
              borderWidth: 2,
              borderColor: "#05cdff",
            }}
          >
            1200 Consumidos
          </Text>

          <Text
            style={{
              width: 105,
              height: 105,
              textAlign: "center",
              color: "black",
              padding: 10,
              borderRadius: 110,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              textAlignVertical: "center",
              marginLeft: 40,
              marginTop: 30,
              fontWeight: 500,
              borderWidth: 2,
              borderColor: "#ff053f",
            }}
          >
            40KCal Restantes
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            width: 340,
            height: 140,
            marginTop: 10,
            marginLeft: 12,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: 700,
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Macronutrientes
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginRight: 150,
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                width: 60,
                height: 60,
                textAlign: "center",
                color: "black",
                padding: 10,
                borderRadius: 110,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                textAlignVertical: "center",
                marginLeft: 20,
                marginTop: 30,
                fontWeight: 500,
                borderWidth: 2,
                borderColor: "#ff053f",
              }}
            >
              0/40g
            </Text>
            <Text
              style={{
                width: 60,
                height: 60,
                textAlign: "center",
                color: "black",
                padding: 10,
                borderRadius: 110,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                textAlignVertical: "center",
                marginLeft: 20,
                marginTop: 30,
                fontWeight: 500,
                borderWidth: 2,
                borderColor: "#da05ff",
              }}
            >
              0/40g
            </Text>

            <Text
              style={{
                width: 60,
                height: 60,
                textAlign: "center",
                color: "black",
                padding: 10,
                borderRadius: 110,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                textAlignVertical: "center",
                marginLeft: 20,
                marginTop: 30,
                fontWeight: 500,
                borderWidth: 2,
                borderColor: "#05ffbc",
              }}
            >
              0/40g
            </Text>

            <Text
              style={{
                width: 60,
                height: 60,
                textAlign: "center",
                color: "black",
                padding: 10,
                borderRadius: 110,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                textAlignVertical: "center",
                marginLeft: 20,
                marginTop: 30,
                fontWeight: 500,
                borderWidth: 2,
                borderColor: "#b4ff05",
              }}
            >
              0/40g
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginRight: 40,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "black", fontWeight: 700 }}>Carboidratos</Text>
          <Text style={{ color: "black", fontWeight: 700 }}>Proteinas</Text>
          <Text style={{ color: "black", fontWeight: 700 }}>Fibras</Text>
          <Text style={{ color: "black", fontWeight: 700 }}>Sódio</Text>
        </View>
      </View>

      <View></View>
      <View
        style={{
          width: 370,
          height: 250,
          backgroundColor: "rgba(208, 208, 208, 0.18)",
          marginTop: 10,
          marginLeft: 10,
          borderRadius: 12,
        }}
      >
        <View
          style={{
            width: 330,
            backgroundColor: "white",
            marginLeft: 20,
            marginTop: 30,
            padding: 10,
            borderRadius: 12,
          }}
        >
          {/* Refeição 1 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20, // AQUI cria o "gap" entre os blocos
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={cafe}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              />
              <View>
                <Text>Café da Manhã</Text>
                <Text>0/1200KCal</Text>
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
              }}
            >
              +
            </Text>
          </View>

          {/* Refeição 2 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20, // MESMO esquema: espaço entre refeições
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={cafe}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              />
              <View>
                <Text>Almoço</Text>
                <Text>0/1200KCal</Text>
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
              }}
            >
              +
            </Text>
          </View>

          {/* Refeição 3 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={cafe}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  marginLeft: 10,
                }}
              />
              <View>
                <Text>Jantar</Text>
                <Text>0/1200KCal</Text>
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
              }}
            >
              +
            </Text>
          </View>
        </View>
      </View>

      <Footer />
    </View>
  );
}
