import { useState } from 'react'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'

import './App.css';

const App = () => {
  
  const [isLogged, setLogged ] = useState(false);

  return (
    <div>
      {!isLogged ?
        <div className='AppLogin'>
          <Login setLogged = {setLogged}/>
        </div> 
        :
        <div className="AppDashboard">

          <Dashboard setLogged = {setLogged} />
        </div> 
      }
    </div>
  )
}

export default App;
