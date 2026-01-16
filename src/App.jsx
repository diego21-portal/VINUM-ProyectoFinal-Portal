import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartProvider"
import PageTransition from "./components/PageTransition"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import Landing from "./pages/Landing"
import ItemListContainer from "./containers/ItemListContainer"
import ItemDetailContainer from "./containers/ItemDetailContainer"
import Cart from "./containers/Cart"
import CheckoutForm from "./components/CheckoutForm"
import PageLayout from "./components/PageLayout"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>
          {/* Landing */}
          <Route path="/" element={<Landing />} />

          {/* Shop */}
          <Route
            path="/shop"
            element={
              <PageTransition>
                <NavBar />
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
                <NavBar />
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
                <NavBar />
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
                <NavBar />
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
                <NavBar />
                <PageLayout>
                  <CheckoutForm />
                </PageLayout>
                <Footer />
              </>
            }
          />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App


