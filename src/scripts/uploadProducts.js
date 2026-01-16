import { db } from "./firebaseNode.js"
import { doc, setDoc } from "firebase/firestore"

/**
 * IMPORTANTE PARA QUIEN LO VEA EN EL FUTURO:
 * - setDoc pisa el documento completo
 * - siempre se debe definir el producto entero, aunqeu existe otra forma de actualizar solo campos específicos
 * - este script se corre UNA SOLA VEZ para cargar los productos iniciales a Firestore
 * - para correrlo, usar el comando: npm run seed
 */

const products = [
    {
    id: "rutini-trumpeter-malbec",
    name: "Trumpeter Malbec",
    price: 9800,
    stock: 12,
    category: "vino",
    image: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61963_default_big.jpeg",
    shortDescription: "Malbec expresivo y moderno.",
    description:
        "El Trumpeter Malbec de Rutini Wines es un vino argentino vibrante, 100% Malbec, con un intenso color violeta y aromas a frutas rojas (ciruela, cereza), especias (canela, cardamomo, pimienta) y notas florales como violetas, complementado por un toque de roble que aporta complejidad. En boca es de gran cuerpo, frutal y especiado, con taninos intensos pero aterciopelados y una acidez vivaz, ideal para maridar con carnes rojas y asados.",
    winery: "Rutini Wines",
    varietal: "Malbec",
    alcohol: 13.5,
    origin: "Mendoza, Argentina",
    capacity: 750,
    boxQuantity: 6,
    harvest: 2022
    },
    {
    id: "luigi-bosca-malbec-doc",
    name: "Luigi Bosca Malbec DOC",
    price: 16500,
    stock: 7,
    category: "vino",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4X2fgEvvWW2ivfWON0l2YwTjOLyyu3iy7Q&s",
    shortDescription: "Malbec estructurado y elegante.",
    description:
        "El Luigi Bosca Malbec DOC es un vino argentino de Luján de Cuyo, caracterizado por su color rojo violáceo profundo y aromas intensos a frutas rojas y negras (cereza, ciruela, mora), especias dulces y notas florales y de torrefacción (café) de su crianza en roble francés. En boca es voluptuoso y franco, con taninos finos y firmes, acidez equilibrada, cuerpo medio a firme y un final largo y persistente, mostrando gran carácter y potencial de guarda.",
    winery: "Luigi Bosca",
    varietal: "Malbec",
    alcohol: 14.2,
    origin: "Luján de Cuyo, Mendoza",
    capacity: 750,
    boxQuantity: 6,
    harvest: 2021
    },
    {
    id: "salentein-reserva-chardonnay",
    name: "Salentein Reserva Chardonnay",
    price: 11200,
    stock: 9,
    category: "vino-blanco",
    image: "https://http2.mlstatic.com/D_844517-MLA99817031713_112025-C.jpg",
    shortDescription: "Chardonnay fresco y balanceado.",
    description:
        "El Salentein Reserva Chardonnay es un vino blanco argentino del Valle de Uco, destacándose por su color amarillo pálido con reflejos verdosos, complejo aroma a cítricos, durazno blanco y notas florales/minerales, y un paladar suave, fresco, untuoso y equilibrado con acidez natural, que combina elegancia con notas frutales y un toque de roble. Ideal para maridar con pescados, mariscos y platos cremosos.",
    winery: "Bodegas Salentein",
    varietal: "Chardonnay",
    alcohol: 13.8,
    origin: "Valle de Uco, Mendoza",
    capacity: 750,
    boxQuantity: 1,
    harvest: 2022
    },
    {
    id: "catena-alta-malbec",
    name: "Catena Alta Malbec",
    price: 24000,
    stock: 4,
    category: "vino",
    image: "https://f.fcdn.app/imgs/da852e/lavigne.com.uy/laviuy/4e84/original/catalogo/779445000823777944500082371/2000-2000/vino-catena-alta-malbec-750ml-vino-catena-alta-malbec-750ml.jpg",
    shortDescription: "Malbec de altura y gran complejidad.",
    description:
        "El Catena Alta Malbec es un vino tinto argentino de alta gama, conocido por su elegancia, complejidad y gran concentración, con un color violeta profundo y aromas intensos a frutos negros maduros (cassis, ciruela), flores silvestres, especias (canela, pimienta) y notas terrosas/minerales (grafito, moca) y de vainilla, ofreciendo un paladar sedoso, estructurado y un final largo y persistente con acidez refrescante y taninos finos.",
    winery: "Catena Zapata",
    varietal: "Malbec",
    alcohol: 14,
    origin: "Valle de Uco, Mendoza",
    capacity: 750,
    boxQuantity: 6,
    harvest: 2020
    },
    {
    id: "chandon-extra-brut",
    name: "Chandon Extra Brut",
    price: 8700,
    stock: 15,
    category: "espumante",
    image: "https://acdn-us.mitiendanube.com/stores/005/297/373/products/chandon-extra-brut-x-750ml-6fffb72c33599ca96e17497414048160-1024-1024.webp",
    shortDescription: "Espumante fresco y vibrante.",
    description:
        "El Chandon Extra Brut es un espumante argentino clásico, fresco, frutado y elegante, elaborado con una mezcla de Chardonnay y Pinot Noir, destacando por su color amarillo pálido, burbujas finas y aromas a cítricos, manzana verde y notas de pan brioche o tostado; ofrece un sabor equilibrado, seco y con una acidez vibrante, ideal para aperitivos o acompañando mariscos, quesos frescos y cocina japonesa/peruana.",
    winery: "Chandon Argentina",
    varietal: "Chardonnay / Pinot Noir",
    alcohol: 12.5,
    origin: "Mendoza, Argentina",
    capacity: 750,
    boxQuantity: 6,
    harvest: 0
        },
    {
    id: "veuve-clicquot-yellow-label",
    name: "Veuve Clicquot Yellow Label",
    price: 45000,
    stock: 3,
    category: "espumante",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rYO41c7WdXCdAeUmhPtsmuR5S8IYPxyuTQ&s",
    shortDescription: "Champagne francés intenso y refinado.",
    description:
        "El Veuve Clicquot Yellow Label es un champán Brut emblemático, conocido por su equilibrio entre frescura, fuerza y riqueza aromática, dominado por la Pinot Noir, que le da estructura, complementado con Pinot Meunier y Chardonnay para elegancia y finura. Tiene un color dorado pajizo con burbujas finas, aromas a frutas blancas/amarillas (pera, limón), vainilla y brioche, y un sabor vibrante, frutal, bien estructurado y con un final largo y sedoso.",
    winery: "Veuve Clicquot",
    varietal: "Pinot Noir / Chardonnay / Pinot Meunier",
    alcohol: 22,
    origin: "Champagne, Francia",
    capacity: 750,
    boxQuantity: 6,
    harvest: 0
    }
]

async function uploadProducts() {
  try {
    for (const product of products) {
      const ref = doc(db, "products", product.id)
      await setDoc(ref, product)
      console.log(`✔ Producto cargado: ${product.name}`)
    }
    console.log("✔ Todos los productos fueron cargados correctamente")
  } catch (error) {
    console.error("❌ Error al cargar productos:", error)
  }
}

uploadProducts()