import React, { Component, Fragment } from 'react'

import './styles.css'

import Header from '../../components/Header'
import Table from '../../components/Table'

const data = [
  {
    title: "O Misterioso Caso de Styles",
    year: "1920",
    read: "Não",
  },
  {
    title: "O Adversário Secreto",
    year: "1922",
    read: "Não",
  },
  {
    title: "Assassinato no Campo de Golfe",
    year: "1923",
    read: "Não",
  },
  {
    title: "Poirot Investiga",
    year: "1924",
    read: "Não",
  },
  {
    title: "O Homem do Terno Marrom",
    year: "1924",
    read: "Não",
  },
  {
    title: "O Segredo de Chimneys",
    year: "1925",
    read: "Não",
  },
  {
    title: "O Assassinato de Roger Ackroyd",
    year: "1926",
    read: "Não",
  },
  {
    title: "Os Quatro Grandes",
    year: "1927",
    read: "Não",
  },
  {
    title: "O Mistério do Trem Azul",
    year: "1928",
    read: "Não",
  },
  {
    title: "O Mistério dos Sete Relógios",
    year: "1929",
    read: "Não",
  },
  {
    title: "Sócios no Crime",
    year: "1929",
    read: "Não",
  },
]

const head = {
  title: "título",
  year: "ano",
  read: "lido"
}

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="content">
          <Table data={data} head={head}/>
        </div>
      </Fragment>
    )
  }
}