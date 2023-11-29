import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageIndex } from './pages/index'

const root = ReactDOM.createRoot(document.querySelector("#root"));

function Main() {
  return (
    <>
      <PageIndex />
    </>
  )
}


root.render(<Main />);