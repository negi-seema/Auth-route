import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRouting from './routes/PrivateRouting'
import PublicRouting from './routes/PublicRouting'
import Login from './common/Login'
import Todo from './components/Todo'
import PageNoFound from './components/PageNoFound'
import './App.css'
import SearchFunctionality from './components/SearchFunctionality'
import Cards from './common/Cards'
import ProductDetails from './components/ProductDetails'
import Carousel from './components/Carousel'


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          {/*==================================== Public Routing =================================== */}
          <Route element={<PublicRouting />}>
            <Route
              path='/'
              element={<Login />}
            />
          </Route>
          {/*==================================== Private Routing =================================== */}

          <Route element={<PrivateRouting />}>
            <Route
              path='/card'
              element={<Cards />}
            />
            <Route
              path='/todo'
              element={<Todo />}
            />
            <Route
              path='/products'
              element={<SearchFunctionality />}
            />
            <Route
              path='/products/:id'
              element={<ProductDetails />}
            />
              <Route
              path='/carousel'
              element={<Carousel />}
            />
          </Route>
          {/*==================================== Common Routing =================================== */}
          <Route
            path='/404'
            element={<PageNoFound />} />
          <Route
            path='*'
            element={<Navigate to='/404' />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
