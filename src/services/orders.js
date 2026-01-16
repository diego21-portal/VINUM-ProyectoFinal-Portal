import {
  collection,
  doc,
  runTransaction,
  serverTimestamp
} from "firebase/firestore"
import { db } from "./firebase"

export async function createOrder(cart, buyer, total) {
  const orderRef = doc(collection(db, "orders"))

  await runTransaction(db, async (transaction) => {
    for (const item of cart) {
      const productRef = doc(db, "products", item.id)
      const productSnap = await transaction.get(productRef)

      if (!productSnap.exists()) {
        throw new Error("Producto no existe")
      }

      const currentStock = productSnap.data().stock

      if (currentStock < item.quantity) {
        throw new Error(
          `Stock insuficiente para ${productSnap.data().name}`
        )
      }

      transaction.update(productRef, {
        stock: currentStock - item.quantity
      })
    }

    transaction.set(orderRef, {
      buyer,
      items: cart,
      total,
      date: serverTimestamp()
    })
  })

  return orderRef.id
}
