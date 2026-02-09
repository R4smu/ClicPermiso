import './App.css'
import Boton from './components/Boton.tsx'
import Input from './components/Input.tsx'

function App() {
  return (
    <>
      <Boton texto="otra" estilo="primario" />
      <Boton texto="prueba" estilo="secundario" />

      <Input label="Un input" tipo="text" placeholder="pon algo"/>
    </>
  )
}

export default App