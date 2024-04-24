//banco de dados (armazenamento local)

import AsyncStorage from "@react-native-async-storage/async-storage"; //importa o 'async-storage'

const useStorage = () => {
    const getItem = async (key) => { //buscar os itens salvos
        try{
            const passwords = await AsyncStorage.getItem(key); //busca uma lista (através da 'key') no 'storage'
            return JSON.parse(passwords) || []; //retorna uma 'array' com os dados ou vazia
            //...JSON.parse(variável): converte em 'array'

        }catch(error){
            console.log("Erro ao buscar", error)
            return []; //retorna 'array' vazia
        }
    }

    const saveItem = async (key, value) => { //salvar itens no 'storage'
        try{
            let passwords = await getItem(key); //busca os itens da lista (através da 'key')
            passwords.push(value) //adiciona os itens novos
            await AsyncStorage.setItem(key, JSON.stringify(passwords)) //salva no 'storage'
            //...JSON.stringify(array)): salva como 'array'
        }catch(error){
            console.log("Erro ao salvar", error)
        }
    }

    const removeItem = async (key, item) => { //remover algo do 'storage'
        try{
            let passwords = await getItem(key); //busca os itens da lista (através da 'key')
            let myPasswords = passwords.filter( (password) => { //filtra (remove) o item desejado
                return(password !== item) //devolve os valores diferentes de 'item'
            }) 
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
            return myPasswords;
        }catch(error){
            console.log("Erro ao deletar", error)
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;