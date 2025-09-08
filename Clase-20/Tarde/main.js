let shopProducts = [
  {
    image: {
      thumbnail: './assets/images/image-waffle-thumbnail.jpg',
      mobile: './assets/images/image-waffle-mobile.jpg',
      tablet: './assets/images/image-waffle-tablet.jpg',
      desktop: './assets/images/image-waffle-desktop.jpg',
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    quantity: 2,
  },
  {
    image: {
      thumbnail: './assets/images/image-macaron-thumbnail.jpg',
      mobile: './assets/images/image-macaron-mobile.jpg',
      tablet: './assets/images/image-macaron-tablet.jpg',
      desktop: './assets/images/image-macaron-desktop.jpg',
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    quantity: 1,
  },
  /*   {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    quantity: 3,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    quantity: 3,
  }, */
]

/* Llamar a la sección cards */
let cards = document.getElementById('maincards')
let order = document.getElementById('order')
let orderdivbutton = document.getElementById('btn_order')
let orderbutton = document.getElementById('orderbtn')
let modalorder = document.getElementById('modalsito')

/* Total del precio a pagar */
let totalaPagar = 0

/* Mostrar cada arjeta */
shopProducts.forEach((product) => {
  /* Suma de cada producto que se va agregando */
  totalaPagar += product.price * product.quantity

  /* Creación de las cards */
  const productElement = document.createElement('div')
  productElement.className =
    'w-full flex flex-row p-2 border-1 border-[#f6f2ef]'
  productElement.innerHTML = `
 <div class="w-[30%] flex items-center justify-center sm:w-[15%]">
              <img
                src="${product.image.thumbnail}"
                alt=""
                class="object-cover h-full p-2"
              />
            </div>
            <!-- Information order -->
            <div class="w-full flex flex-row justify-between items-center p-2">
              <div class="flex flex-col gap-1 justify-center">
                <span
                  class="text-[1rem] font-bold text-[#483d3b] sm:text-[0.8rem]"
                  >Classic Tiramisu</span
                >
                <!-- Information from data -->
                <div class="flex flex-row gap-3">
                  <span
                    class="text-[#a15744] text-[1rem] font-bold sm:text-[0.8rem]"
                    >x${product.quantity}</span
                  >
                  <span class="text-[#a2918f] text-[1rem] sm:text-[0.8rem]"
                    >@$${product.price}</span
                  >
                </div>
              </div>
              <!--  total Cost -->
              <div class="flex justify-center items-end">
                <span
                  class="text-[1rem] font-bold text-[#362724] sm:pl-30 text-[0.6rem]"
                  >$${product.quantity * product.price}</span
                >
              </div>
            </div>
  
  `
  cards.appendChild(productElement)
})

/* Agregar el precio total después de las cards y antes del boton */
const productTotal = document.createElement('div')
productTotal.className =
  'bg-[#fcf8f5] w-full flex items-center justify-between p-6'
productTotal.innerHTML = `
 <!-- order total message -->
          <span
            class="flex justify-center items-center text-[1.1rem] text-[#5f5452] sm:text-[1rem]"
            >Order Total</span
          >
          <!-- Price -->
          <span
            class="flex justify-center items-center text-[#25100f] font-bold text-[1.6rem] sm:text-[1.4rem]"
            >$${totalaPagar}</span
          >
  
  `
order.insertBefore(productTotal, orderdivbutton)

/* Colapsar el modal */
orderbutton.addEventListener('click', function () {
  modalorder.classList.replace('flex', 'hidden')
})
