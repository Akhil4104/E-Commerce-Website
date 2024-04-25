// Modify the products data structure to include category information
const products = [
    {
        id:1,
        category:"men",
        title:"Opaque Casual Shirt",
        price:200,
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24411432/2023/10/20/929b2175-73ff-4c07-9635-545f1c3150761697792264191-Powerlook-Men-Brown-Opaque-Striped-Casual-Shirt-415169779226-3.jpg",
      },
    {
        id: 2,
        category: "women",
        title: "Black Kurta straight",
        price: 260,
        image: "https://assets.ajio.com/medias/sys_master/root/20231004/bznU/651ca9ffddf779151918293d/-473Wx593H-466665136-black-MODEL.jpg",
    },
    // Add more products with category information
    {
      id:3,
      category:"men",
      title:"Oversize Casual Shirt",
      price:150,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24580922/2023/8/21/020c7040-eb4d-443d-9489-3a1d33e7b0091692628431489OliveGreenPocketCheckedOversizeDropShoulderShirt1.jpg",
    },
    {
        id: 4,
        category: "women",
        title: "Black Kurta",
        price: 200,
        image: "https://assets.ajio.com/medias/sys_master/root/20231004/U22L/651cf108afa4cf41f5237c06/-473Wx593H-466665100-black-MODEL5.jpg",
      },
    {
      id:5,
      category:"men",
      title:"Collar Casual Shirt",
      price:180,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21743698/2023/2/15/6e06a4da-903d-4a28-a288-14c16516d5891676456271080-Kook-N-Keech-Men-Shirts-3471676456270474-1.jpg",
    },
    {
      id:6,
      category:"men",
      title:"Cotton Casual Shirt",
      price:250,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24578692/2023/9/15/9f677357-4624-49a6-8ca9-9e2b9c58be541694775719690-Mast--Harbour-Men-Shirts-2931694775719259-1.jpg",
    },
    {
        id:7,
        category:"accessories",
        title:"Watch",
        price:300,
        image:"https://assets.ajio.com/medias/sys_master/root/20221018/JC9i/634eb714aeb269659c4c04fd/-473Wx593H-464995522-blue-MODEL6.jpg",
      },
      {
        id:8,
        category:"accessories",
        title:"Sunglasses",
        price:100,
        image:"https://assets.ajio.com/medias/sys_master/root/20230706/rqBY/64a6634ca9b42d15c939db83/-1117Wx1400H-466204637-black-MODEL.jpg",
      },
    {
      id:9,
      category:"men",
      title:"Cotton Spread Collar",
      price:280,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26305786/2023/12/26/af9ff580-5b62-47ca-a75b-45e86d9717af1703567120280-Mast--Harbour-Men-Black-Premium-Opaque-Casual-Shirt-36617035-7.jpg",
    },
    {
        id:10,
        category:"shoes",
        title:"Red Tape",
        price:250,
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24592334/2023/8/22/47cb9066-de67-4b3d-9591-7082012e2a821692714311564RedTapeMenBluePerforationsPUSneakers1.jpg",
      },
    {
      id:11,
      category:"men",
      title:"Cotton Oversized Casual Shirt",
      price:180,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25183706/2023/9/25/a8d2f859-4a27-48d3-963d-085baee41e071695635789755PowerlookMenBrownOpaqueCheckedCasualShirt1.jpg",
    },
    {
        id:12,
        category:"shoes",
        title:"Sneakers",
        price:220,
        image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24439310/2023/8/11/7a2776e1-f7bb-4d38-928a-d183e0c76ea91691728764899RedTapeMenWhiteStripedSkateShoes1.jpg",
      },
    {
        id:13,
        category:"women",
        title:"Kurta",
        price:300,
        image:"https://assets.ajio.com/medias/sys_master/root/20230821/ja4M/64e36748afa4cf41f562a5f4/-473Wx593H-466478028-mauve-MODEL.jpg",
      }
    // Add more products with category information
  ]; 

// HTML elements for products and cart
const productList = document.getElementById('productList');
const cartItemsElement = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartIconElement = document.getElementById('cartValue');

// Initialize cart from local storage or as an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        // Increment quantity if the item already exists in the cart
        cartItem.quantity++;
    } else {
        // Add a new item to the cart with quantity 1
        cart.push({ id: productId, quantity: 1 });
    }

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart icon
    updateCartIcon();
}


// Function to update the cart icon with the total number of items
// Function to update the cart icon in the navbar
function updateCartIcon() {
    // Calculate the total number of items in the cart
    totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    // Update the cart icon with the total number of items
    const cartIcon = document.getElementById('cartValue');
    cartIcon.innerHTML = `<i class='bx bxs-shopping-bag'>${totalItems}</i>`;
}

// Function to render products in the product list
function renderProducts() {
    productList.innerHTML = products
        .map(
            (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
            </div>
        </div>`
        )
        .join("");

    updateCartIcon();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to render cart items and update total bill
function renderCartItems() {
    cartItemsElement.innerHTML = cart
        .map(
            (cartItem) => {
                const product = products.find((product) => product.id === cartItem.id);
                
                // Error handling: skip this cart item if the product is not found
                if (!product) {
                    console.error(`Product with ID ${cartItem.id} not found.`);
                    return "";
                }

                return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.title}">
                <div class="cart-item-info">
                    <h2 class="cart-item-title">${product.title}</h2>
                    <input 
                        class="cart-item-quantity" 
                        type="number" 
                        min="1" 
                        value="${cartItem.quantity}" 
                        data-id="${product.id}"
                        oninput="updateCartItemQuantity(event)">
                </div>
                <h2 class="cart-item-price">$${(product.price * cartItem.quantity).toFixed(2)}</h2>
                <button class="remove-from-cart" data-id="${product.id}">Remove</button>
            </div>`;
            }
        )
        .join("");

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    updateCartIcon();
    updateTotalBill();
}

// Function to remove an item from the cart
function removeFromCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        event.target.closest('.cart-item').remove();
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
    updateTotalBill();
}

// Function to calculate the total bill
function calculateTotalBill() {
    const subtotal = cart.reduce((total, item) => {
        const product = products.find(product => product.id === item.id);
        
        // Error handling: skip this cart item if the product is not found
        if (!product) {
            console.error(`Product with ID ${item.id} not found.`);
            return total;
        }
        
        return total + (product.price * item.quantity);
    }, 0);
    
    return subtotal.toFixed(2);
}

// Function to update the total bill display
function updateTotalBill() {
    const totalBillElement = document.getElementById('totalBill');
    const totalBill = calculateTotalBill();
    totalBillElement.textContent = `$${totalBill}`;
}

// Function to update cart item quantity
function updateCartItemQuantity(event) {
    const productId = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value);

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateCartIcon();
    updateTotalBill();
}
// Initialize the app by rendering products or cart items based on the page URL
if (window.location.pathname.includes("cart.html")) {
    renderCartItems();
} else {
    renderProducts();
}
