import React, { useState } from "react"
import Tour from "reactour"
import Router from "./router"

const tourConfig = [
  {
    selector: '[data-tut="Viagens"]',
    content: `Veja o seu histórico de viagens aqui!`
  },
  {
    selector: '[data-tut="Pacotes"]',
    content: () => (
      <div>
        <h1>TEXTO</h1>
        <b>Aqui você encontra todos os pacotes disponíveis na nossa plataforma</b>
      </div>
    ),
    style: {
      backgroundColor: "black",
      color: "white",
    }
  },
  {
    selector: '[data-tut="Email"]',
    content: `Notificaremos você por aqui das nossa novidades! `

  },
  {
    selector: '[data-tut="Pacotes promocionais"]',
    content: () => (
      <div>
        <b>Veja aqui todas as nossas promoções!</b>
      </div>
    ),
  },
  {
    selector: '[data-tut="Histórico"]',
    content: `Veja aqui todas as suas viagens conosco!`
  },
  {
    selector: '[data-tut="Meus Emails"]',
    content: `Suas mensagens!`
  },
  {
    selector: '[data-tut="Favoritos"]',
    content: `Marcados como gostei :)!`
  },
  {
    selector: '[data-tut="Login"]',
    content: 'Faça seu Login!'
  },
  {
    selector: '[data-tut="Registre-se"]',
    content: `Cadastre-se no sistema!`
  },
  {
    selector: '[name="Home"]',
    content: `Volte para tela principal`
  },
  {
    selector: '[data-tut="Teste"]',
    content: `Titulo principal `
  },
];

function App() {

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [isShowingMore, setIsShowingMore] = useState(false)

  const accentColor = "#5cb7b7"

  // const disableBody = target => disableBodyScroll(target)
  // const enableBody = target => enableBodyScroll(target)

  const toggleShowMore = () => {
    setIsShowingMore(prevState => ({
      isShowingMore: !prevState.isShowingMore
    }))
  }
 
  return (
    <>
      <Router 
        setIsTourOpen={setIsTourOpen}
        toggleShowMore={toggleShowMore} />
      <Tour
        onRequestClose={() => {setIsTourOpen(false)}}
        steps={tourConfig}
        isOpen={isTourOpen}
        className="helper"
        rounded={5}
        accentColor={accentColor}
        // onAfterOpen={disableBody}
        // onBeforeClose={enableBody}
      />
    </>
  );
}

export default App;
 


//prop reverso