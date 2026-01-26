import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartProvider.jsx"
import PageTransition from "./components/PageTransition.jsx"

import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"

import Landing from "./pages/Landing.jsx"
import ItemListContainer from "./containers/ItemListContainer.jsx"
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx"
import Cart from "./containers/Cart.jsx"
import CheckoutForm from "./components/CheckoutForm.jsx"
import PageLayout from "./components/PageLayout.jsx"

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


