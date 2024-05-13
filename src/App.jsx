
import './App.css'
import Countries from './components/Countries'
import Header from './components/Header'

function App() {
 

  return (
    <section>
      <Header></Header>
        <h1 className="text-3xl font-bold text-center my-4">
    Visiting Every Countries of The World !
    </h1>
    <Countries></Countries>
    </section>
  )
}

export default App
