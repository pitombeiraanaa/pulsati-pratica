import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home';
import { PassageiroNovo } from './pages/PassageiroNovo';
import {Passageiros} from './pages/Passageiros';
import { PassageirosVer } from './pages/PassageirosVer';


function App(){
  return (
    <div className="App">
      <div>
        <a href="/home">Home</a>
        <a href="/passageiros">Passageiros</a>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path= '/passageiros' element= {<Passageiros/>}/>
            <Route path= '/passageiros/:id' element= {<PassageirosVer/>}/>
            <Route path= '/passageiros-criar' element= {<PassageiroNovo/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;