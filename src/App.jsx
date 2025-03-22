import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fields } from './FormFields/fields'
import { renderedloginfield } from './FormFields/loginForm'
import { renderedpasswordfield } from './FormFields/registerForm'

function App() {
  
  return (
    <>
    <div className={fields.loginForm.title}> LoginForm
      {
        renderedloginfield
      }
      <button>Login</button>
    </div>
    <div className={fields.registerForm.title}> RegisterForm
      {
        renderedpasswordfield
      }
      <button>Register</button>
    </div>
    </>
  )
}

export default App
