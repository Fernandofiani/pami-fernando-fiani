import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

  var [nome, setNome] = useState('');
 

  return (
    <View style={estilos.Body}>
 
    <Text style={estilos.titulo}>Bem Vindo</Text>

<TextInput
style={estilos.input}
placeholder='Coloque seu nome aqui'
value={nome}
onChangeText={setNome}

/>

<Button
title='Clique para enviar'

/>

    </View>
  );
}

var estilos = StyleSheet.create({
  Body: {
    flex: 1,                  
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#ffffffff',  
  },

  titulo: {
    fontSize: 20,
    marginBottom: 30,
    color: '#020202ff',

  },

  input: {
    width: '40%',
    borderWidth: 2,
    borderColor: '#756b6bff',
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#d8d5d5ff',
  },
});
