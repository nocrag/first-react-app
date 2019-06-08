import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function CartaoDeVisitas(props) {
  return (
    <div className="cartao">
      <label style={{fontWeight: 700}}>
        Nome: {props.nome}
      </label>
      <br/>
      <label>Endereço: {props.endereco} </label>
      <br/>
      <label>Telefone: {props.telefone} </label>
      <br/>
      { props.email !== undefined  
      ? <label>Email: {props.email} </label> 
      : undefined
      } 
    </div>
  ) 
}
export default CartaoDeVisitas;


 
 