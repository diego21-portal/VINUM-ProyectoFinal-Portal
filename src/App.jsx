import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageTransition from "./components/PageTransition.jsx"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

import Landing from "./pages/Landing.jsx"
import ItemListContainer from "./containers/ItemListContainer.jsx"
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx"
import Cart from "./containers/Cart.jsx"
import CheckoutForm from "./components/CheckoutForm.jsx"
import PageLayout from "./components/PageLayout.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Profile from "./pages/Profile.jsx"

function App() {
  return (
      <BrowserRouter>

        <Routes>
          {/* Landing */}
          <Route path="/" element={<Landing />} />

          {/* Shop */}
          <Route
            path="/shop"
            element={
              <PageTransition>
                <Navbar />
                <PageLayout>
                  <ItemListContainer />
                </PageLayout>
                <Footer />
              </PageTransition>
            }
          />

          <Route
            path="/category/:categoryId"
            element={
              <>
                <Navbar />
                <PageLayout>
                  <ItemListContainer />
                </PageLayout>
                <Footer />
              </>
            }
          />

          <Route
            path="/item/:itemId"
            element={
              <>
                <Navbar />
                <PageLayout>
                <ItemDetailContainer />
                </PageLayout>
                <Footer />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <PageLayout>
                  <Cart />
                </PageLayout>
                <Footer />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <PageLayout>
                  <CheckoutForm />
                </PageLayout>
                <Footer />
              </>
            }
          />
          
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <PageLayout>
                  <Login />
                </PageLayout>
                <Footer />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <PageLayout>
                  <Register />
                </PageLayout>
                <Footer />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <PageLayout>
                  <Profile />
                </PageLayout>
                <Footer />
              </>
            }
          />
        </Routes>

      </BrowserRouter>
    )
}

export default App


