import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PessoasList from './PessoasList';

 const pessoas = [
    {
      nome: "Joao",
      endereco: "Av cerro azul",
      telefone:"44 9999 9999",
      email:"joao@hotmail.com"
    },
    {
      nome:"Lucas",
      endereco:"Av cerro azul 2",
      telefone:"44 9999 9959",
      email:"lucas@hotmail.com"
    },
    {
    nome:"Ana",
    endereco:"Av cerro azul 5",
    telefone:"44 9999 9549",
    email:"ana@hotmail.com"
    }
  ];
ReactDOM.render(
  <PessoasList
  pessoas={pessoas}/>
  , document.getElementById('root'));