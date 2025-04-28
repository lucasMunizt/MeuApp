import { Text, View, Keyboard } from "react-native";
import { useState, useEffect } from 'react';
import frasesMotivacionais from "./frasesMotivacionais";
import imagens from "../../assets/Imagens";
import { Image, StyleSheet, TextInput, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_700Bold } from "@expo-google-fonts/nunito";
import RNPickerSelect from 'react-native-picker-select';
import Cadastro from "../../src/app/Cadastro";

export default function Logins({
    telaLogin = false,
    funcaoButaoLogin,
    funcaoButaoCadastro,
    onInputChangeEmail,
    onInputChangeSenha,
    onInputChangeConfirmacaoSenha,
    valorButao,
    TelaCadastro = false,
    onInputChangeNome,
    onInputChangeIdade,
    onInputChangePeso,
    onInputChangeAltura,
    onInputChangeGenero,
}) {

    const [fontLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold
    });

    const [frase, setFrase] = useState(frasesMotivacionais[0]);
    const [imagemFrutas, setImagemFrutas] = useState(imagens[0]);
    const [etapaCadastro, setEtapaCadastro] = useState(1);
    const [keyboardVisible, setKeyboardVisible] = useState(false);  // Estado para controlar a visibilidade

    const novaFrase = () => {
        const indiceAleatorio = Math.floor(Math.random() * frasesMotivacionais.length)
        const indiceAleatorioImagem = Math.floor(Math.random() * imagens.length)
        setFrase(frasesMotivacionais[indiceAleatorio]);
        setImagemFrutas(imagens[indiceAleatorioImagem])
    }

    useEffect(() => {
        novaFrase();

        // Listener para detectar quando o teclado é mostrado
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });

        // Listener para detectar quando o teclado é escondido
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        // Limpeza dos listeners ao desmontar o componente
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.pai}>

                <View style={styles.modal}>
                    {!keyboardVisible && (
                        <>
                            <Image source={imagemFrutas} style={styles.imagem} />
                            <Text style={styles.h1}>{frase}</Text>
                        </>
                    )}

                    {telaLogin && (
                        <View style={styles.inputPai}>
                            <TextInput
                                placeholder='email'
                                underlineColorAndroid="transparent"
                                keyboardType='email-address'
                                style={styles.inputT}
                                onChangeText={onInputChangeEmail}
                            />

                            <TextInput
                                placeholder='senha'
                                secureTextEntry={true}
                                onChangeText={onInputChangeSenha}
                                style={styles.inputT}
                            />
                        </View>
                    )}

                    {TelaCadastro && (
                        <View style={styles.inputPai}>
                            {etapaCadastro === 1 && (
                                <>
                                    <TextInput
                                        placeholder='Nome'
                                        underlineColorAndroid="transparent"
                                        style={styles.inputT}
                                        onChangeText={onInputChangeNome}
                                    />

                                    <RNPickerSelect
                                        onValueChange={(value) => {
                                          onInputChangeGenero(value)
                                        }}

                                        items={[
                                            { label: 'Masculino', value: 'MAN' },
                                            { label: 'Feminino', value: 'SHER' },
                                        ]}
                                        style={{
                                            placeholder: {
                                                color: 'black'
                                            },
                                            inputAndroid: {
                                                color: 'black',
                                                marginTop: 30,
                                            },
                                            inputIOS: {
                                                color: 'black',
                                                marginTop: 30,
                                            },
                                        }}
                                        placeholder={{
                                            label: 'Selecione seu gênero',
                                            value: null,
                                            color: 'black'
                                        }}
                                    />
                                </>
                            )}
                            {etapaCadastro === 2 && (
                                <>
                                    <TextInput
                                        placeholder='Email'
                                        keyboardType='email-address'
                                        onChangeText={onInputChangeEmail}
                                        style={styles.inputT}
                                    />

                                    <TextInput
                                        placeholder='senha'
                                        secureTextEntry={true}
                                        onChangeText={onInputChangeSenha}
                                        style={styles.inputT}
                                    />
                                    <TextInput
                                        placeholder='Confirmar sua senha'
                                        secureTextEntry={true}
                                        onChangeText={ onInputChangeConfirmacaoSenha}
                                        style={styles.inputT}
                                    />
                                </>
                            )}

                            {etapaCadastro === 3 && (
                                <>
                                    <TextInput
                                        placeholder='Idade'
                                        keyboardType='numeric'
                                        style={styles.inputInfor}
                                        onChangeText={onInputChangeIdade}
                                    />
                                    <TextInput
                                        placeholder='Peso'
                                        keyboardType='numeric'
                                        style={styles.inputInfor}
                                        onChangeText={onInputChangePeso}
                                    />
                                    <TextInput
                                        placeholder='Altura'
                                        keyboardType='numeric'
                                        style={styles.inputInfor}
                                        onChangeText={onInputChangeAltura}
                                    />
                                </>
                            )}
                        </View>
                    )}

                    <View style={styles.botaoContainer}>
                        <Pressable style={styles.botao} onPress={() => {
                            if(TelaCadastro){
                                if(etapaCadastro < 3){
                                    setEtapaCadastro(etapaCadastro + 1);
                                }else if(funcaoButaoCadastro){
                                    funcaoButaoCadastro()
                                }
                            }
                            else if(telaLogin){
                                if (funcaoButaoLogin) {
                                    funcaoButaoLogin();
                                  }
                            }
                        }}>
                            <Text style={{ color: "#fff", fontSize: 18, textAlign: 'center' }}>
                                {valorButao}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    voltar: {
        marginLeft: 20,
    },
    inputPai: {
        marginTop: 10
    },
    botaoContainer: {
        position: "absolute",
        bottom: 0,
    },
    imagem: {
        width: 130,
        height: 130,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
        flex: 1,
        padding: 10
    },
    h1: {
        color: 'black',
        textAlign: 'center',
        fontFamily: "Nunito_400Regular",
        fontWeight: 400
    },
    pai: {
        backgroundColor: '#F2F2F2',
        flex: 1,
    },
    inputT: {
        borderColor: "transparent",
        color: "black",
        borderRadius: 12,
        width: 320,
        marginTop: 40,
        padding: 20,
        borderWidth: 5,
        backgroundColor: '#dee9fa',
    },
    inputInfor: {
        borderColor: "transparent",
        color: "black",
        borderRadius: 12,
        width: 320,
        marginTop: 40,
        padding: 20,
        borderWidth: 5,
        backgroundColor: '#dee9fa',
    },
    botao: {
        width: 500,
        height: 60,
        backgroundColor: '#45C8AE',
        padding: 13,
        marginTop: 20,
        borderRadius: 0,
        color: "#ffff",
        alignItems: 'center',
    }
});
