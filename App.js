import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


const Tela = styled.View`
  flex: 1;
  align-items: center;
`
const Titulo = styled.Text`
  margin-top: 30px;
  font-size: 25px;
`
const Input = styled.TextInput`
  width: 90%;
  background-color: #eee;
  heigth: 50px;
  font-size: 30px;
  padding-left: 20px;
  border-radus: 10px;
  margin-top: 10px;
`
const BtnCalcular = styled.Button`
  margin-top: 20px;

`
const Resultado = styled.View`
  background-color: #eee;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  padding-top: 20px;
  align-items: center;
  padding-botton: 20px;
`
const TituloResultado = styled.Text`
  font-size: 20px;
  margin-top: 15px;

`
const ItemResultado = styled.Text`
  font-size: 16px;
`

export default function App() {
  const [dolar, alteraMoeda] = useState('1')
  const [real, altera] = useState('5.18')


  const calcularMoeda = () => { 
    const indice = dolar* 5.18; 
    altera((indice).toFixed(2));   
   }

   useEffect ( () => { calcularMoeda(), [dolar]});



  return (
    <Tela>
    <Titulo> Conversor de Moedas </Titulo>
      <Input keyboardType="numeric" placeholder="Digite o valor em Dolar" value={dolar} onChangeText={ function alteraInput(textodigitado) {alteraMoeda(textodigitado)} } />
      
      <Resultado>
      <TituloResultado> Valor em dolar </TituloResultado>
      <ItemResultado> {dolar} </ItemResultado>

      <TituloResultado> Valor em Real </TituloResultado>
      <ItemResultado> {real} </ItemResultado>

      </Resultado>
    </Tela>
  );
}