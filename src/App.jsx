import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import {Header, Footer} from './components/index'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'


function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    }).finally(() =>{
      setLoading(false)
    })
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
          
        </main>
        <Footer />
      </div>
    </div>
  ) : (null);
}

export default App
