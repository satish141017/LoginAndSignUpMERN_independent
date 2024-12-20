import React, { useState } from 'react'
import Switch from './compnent/Switch'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
function App() {


  const [login, setLogin] = useState(true)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div>
        {login == true ? <Login /> : <Signup />}

        <Switch login={login} setLogin={setLogin} />
      </div>

    </div>
  )

}




export default App
