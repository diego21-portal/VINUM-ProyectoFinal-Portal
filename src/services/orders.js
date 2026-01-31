import {
  collection,
  doc,
  runTransaction,
  serverTimestamp,
  increment
} from "firebase/firestore"
import { db } from "./firebase.js"

export async function createOrder(cart, buyer, total) {
  const orderRef = doc(collection(db, "orders"))
  const userRef = doc(db, "users", buyer.uid)

  await runTransaction(db, async (transaction) => {
    // 1. Stock
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

    // 2. Orden
    transaction.set(orderRef, {
      userId: buyer.uid,
      buyer,
      items: cart,
      total,
      date: serverTimestamp()
    })

    // 3. Perfil del usuario (LA PARTE QUE FALTABA)
    transaction.update(userRef, {
      orders: increment(1),
      totalSpent: increment(total)
    })
  })

  return orderRef.id
}
