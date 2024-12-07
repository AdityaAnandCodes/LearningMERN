
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'


function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />}/>
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
