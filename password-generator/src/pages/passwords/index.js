//passwords

import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context' //importa o 'SafeAreaView'
import {useIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'

//SafeAreaView: texto abaixo da barra de status
//useEffect: efeito colateral
//FlatList: exibir listas (ListView)

export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused(); //boolean (sair e entrar na página)
    const {getItem} = useStorage(); //pega a função 'getItem'

    useEffect(() => {
        async function loadPasswords(){ //busca as listas de senhas
            const passwords = await getItem("@pass") //...(key)
            console.log(passwords);
            setListPasswords(passwords) //passa os valores de 'passwords' para 'listPasswords'
        }
        loadPasswords();
    }, [focused]) //'array' de dependência (roda sempre que entrar na tela)

    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas!!</Text>
            </View>

            <View style={styles.content}>
                    <FlatList style={{flex: 1, paddingTop: 14, }}
                        data={listPasswords} //caminho da lista
                        keyExtractor={(item) => String(item)} //identifica itens únicos
                        renderItem={({item}) => <Text>{item}</Text>} //renderização dos itens (senha que será exibida)
                    />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#222222",
        paddingTop: 58,
        paddingBottom: 14, 
        paddingLeft: 14, 
        paddingRight: 14
    },
    title:{
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold'
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})