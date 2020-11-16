import React, { Component, Fragment } from 'react'

import './styles.css'

import Header from '../../components/Header'
import Cards from '../../components/Card'

const detectives = [
  {
    image: "https://miro.medium.com/max/699/0*9uzKBadP-YeWMsNR.jpg",
    name: "Hercule Poirot",
    description: "Hercule Poirot um detetive de 1,60 m, que resolve seus casos usando as células cinzentas, e que é muitas vezes comparado a Sherlock Holmes. Começou sua carreira como oficial de justiça, mas passou a atuar como detetive particular, e auxiliar a polícia em casos complicados.",
    books: ""
  },
  {
    image: "https://static.wikia.nocookie.net/p__/images/0/05/Miss-Marple-Geraldine-McEwan-1.jpg/revision/latest?cb=20200522054014&path-prefix=protagonist",
    name: "Miss Jane Marple",
    description: "Miss Marple não se parece em nada com um detetive, mas para uma solteirona que nunca saiu de St. Mary Mead ela é surpreendentemente astuta. Jane Marple, resolve seus crimes de uma forma muito diferente de outros detetives, ela não faz interrogatórios, não procura pistas, só usa o seu conhecimento da natureza humana",
    books: ""
  },
  {
    image: "https://i2-prod.mirror.co.uk/incoming/article6120456.ece/ALTERNATES/s615b/Tuppence-Beresford-JESSICA-RAINE-Tommy-Beresford-DAVID-WALLIAMS-in.jpg",
    name: "Tommy e Tuppence Beresford",
    description: "Apenas após a Primeira Guerra Mundial, que os jovens Tuppence Cowley e Tommy Beresford, criam a Jovens Aventureiros Ltd. Agatha descreve Tommy como agradavelmente feio, mas inequivocamente um cavalheiro, é considerado lento o que é o contraponto perfeito à impetuosidade de Tuppence, os amigos casam-se no final do primeiro livro e têm três filhos: os gêmeos Derek e Deborah, e a filha adotiva Betty.",
    books: ""
  },
  {
    image: "https://static.wikia.nocookie.net/agathachristie/images/3/3f/Parker-Pyne_jpg_235x611_q95.jpg/revision/latest/scale-to-width-down/340?cb=20120922144808",
    name: "Parker Pyne",
    description: "Pyne não se considerava um detetive, mas sim um especialista em coração, cuja especialidade era curar a infelicidade das pessoas. Pyne anunciava seus serviços nos classificados do Times, onde convidava os leitores infelizes a o visitarem na Richmond Street, 17. O detetive, ou melhor, médico do coração, é descrito como um homem gordo, careca, por volta de seus 60 anos, possui uma teoria, segundo a qual, existem 5 tipos de infelicidade, mas todas elas têm cura, Pyne usa métodos nada tradicionais, e engenhosamente engana os suspeitos e cura a infelicidade. E em algum momento as histórias de Parker Pyne e Hercule Poirot se cruzam, Mrs. Ariadne Oliver, amiga de Pyne, auxilia Poirot em alguns crimes.",
    books: ""
  },
  {
    image: "https://i.pinimg.com/originals/98/a0/fc/98a0fc866dd8009f85c1e44433a74c38.jpg",
    name: "Ariadne Oliver",
    description: "Começando como uma simples escritora de mistério, Ariadne chega a participar de 6 romances com o próprio Hercule Poirot, começando por Cards on the Table. Ariadne, ao contrário de Miss Marple, é muito mal-humorada, e considera que a Scotland Yard seria melhor gerida por uma mulher, e nela podemos encontrar muito de Agatha Christie, uma vez que, além de ser escritora de romances policiais, Oliver ainda possui uma certa antipatia por seu personagem Sven Hjerson, assim como Agatha, em diversas situações demonstrou sentir por Poirot.",
    books: ""
  },

]

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="content">
          <h1>Detetives principais</h1>
          <Cards detectives={detectives} />
        </div>
      </Fragment>
    )
  }
}