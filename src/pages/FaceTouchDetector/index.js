import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';

import AccessDanied from '../../components/AccessDanied'

export default function App() {
  const [supported, setSupported] = useState(null)
  const [nome, setNome] = useState('Touch ID não dectado')

  useEffect(() => {
    LocalAuthentication.hasHardwareAsync()
    .then(sucesso => {
      setSupported(true)
      console.log('Touch ID habilitado')
    })
    .catch((error) => {
      console.log("Erro TOUCH: " + error)
      alert('Touch ID nao suportado/habilitado')
    })
  }, [])

  function handleLogin(){
    LocalAuthentication.authenticateAsync("Touch ID")
    .then( sucess => {
      console.log('Seja bem vindo')
      setNome('detectado')
    })
    .catch(error => {
      <AccessDanied />
      console.log('Falha na autenticacao: ' + error)
    })
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btn} onPress={ handleLogin }>
        <Text style={{color: '#FFF', fontWeight: 'bold' }}>Entrar</Text>
      </TouchableHighlight>

      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{nome}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    borderRadius: 3,
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#0391D7'
  }
});