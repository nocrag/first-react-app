import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import CartaoDeVisitas from './CartaoDeVisitas'


function PessoasList(props) {
  return props.pessoas.map(pessoa=>{
    return (
    <CartaoDeVisitas
  nome={pessoa.nome}
  endereco={pessoa.endereco}
  telefone={pessoa.telefone}
  email={pessoa.email}
  />
  ) 
  } )
  
}
export default PessoasList;