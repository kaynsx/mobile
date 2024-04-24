//home

import {useState} from 'react' //importa estados para dinamização dos componentes
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native' //importa componentes pré-criados 

//View: div
//Text: p (todo texto precisa estar dentro da tag)
//StyleSheet: css
//Image: img
//TouchableOpacity: botão com hover
//Modal: pop-up

import Slider from '@react-native-community/slider' //importa o 'slider'
import {ModalPassword} from '../../components/modal' //importa o 'modal' (index.js)

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789)!@#$%¨&*(\|,<.>/?;:-_´`~^=+[{]}"

export function Home(){ //cria um componente

  const [size, setSize] = useState(12) //cria um estado (algo mutável)
  //const [nomeUseState, trocaValor] = useState(valorInicial)

  const [passwordValue, setPasswordValue] = useState("") //valor da senha criada

  const [modalVisible, setModalVisible] = useState(false) //cotrola o modal

  function generatePassword(){ //método
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
      //...Math.floor()...: gera número inteiro
    }
    console.log(password)
    setPasswordValue(password) //passa valor de 'password' para 'passwordValue'
    setModalVisible(true) //abre o modal
  }

  return( //retorna um jsx (estrutura)
    <View style={styles.container}> 
    
      <Image
        source={require("../../assets/padlock.png")} //caminho da imagem
        style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.slider}>
        <Slider
          style={{ height:50 }} //dupla {} quando for passar a instrução diretamente
          minimumValue={8} 
          maximumValue={24} 
          maximumTrackTintColor= "#FF0000"
          minimumTrackTintColor= "#000000"
          thumbTintColor= "#000000" //muda a cor da bolinha
          value={size} //atribui valor
          onValueChange={ (value) => setSize(value.toFixed(0)) } //passa valor do 'slider' para 'size'
          //...trocaValor(variável.toFixed(0))...: número com 0 casas decimais
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha!!</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) } />
      </Modal>

    </View>
  )
}

//por padrão, flexbox já está ativado (display: flex)

const styles = StyleSheet.create({ //cria o StyleSheet

  container:{
    flex: 1, //preenche a tela inteira
    backgroundColor: "#FFFFF",
    justifyContent: 'center', //alinha verticalmente
    alignItems: 'center' //alinha horizontalmente
  },

  logo:{
    width: 150,
    height: 150,
    marginBottom: 50
  },

  slider:{
    marginTop: 17,
    marginBottom: 17,
    width: "75%",
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    padding: 8 //espaço interno
  },

  button:{
    backgroundColor: "#222222",
    width: "37%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 17
  },
  
  buttonText:{
    color: "#FFFFFF",
    fontSize: 17
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})