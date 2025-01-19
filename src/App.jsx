import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from '@pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigate to='/home' replace />} />
          <Route exact  path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
