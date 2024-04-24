//pop-up

import {View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import * as Clipboard from 'expo-clipboard' //importa o 'async-clipboard' (ctrl c + ctrl v)
import useStorage from '../../hooks/useStorage' //importa o 'useStorage'

//Pressable: botão sem estilo visual

export function ModalPassword({password, handleClose}){ //parâmetros passados pela 'home'
    const {saveItem} = useStorage(); //pega a função 'saveItem'

    async function handleCopyPassword(){ //copia a senha gerada
        await Clipboard.setStringAsync(password) //salva a senha no 'ctrl c'
        await saveItem("@pass", password) //...(key, value)
        alert("Senha salva com sucesso!!")
        handleClose(); //fecha o modal
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada!!</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}   >
                        <Text>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
        //é possível atribuir dois estilos ao mesmo componente
    )
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: "rgba(0, 0, 0, 0.6)", //opacidade
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#FFFFFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
        marginBottom: 24,
    },
    innerPassword:{
        backgroundColor: "#222222",
        width: '75%',
        padding: 14,
        borderRadius: 8
    },
    password:{
        color: "#FFFFFF",
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonArea:{
        flexDirection: 'row',
        width: "75%",
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: "#EDEDED",
        borderRadius: 8
    },
    buttonText:{
        fontWeight: 'bold'
    }
})