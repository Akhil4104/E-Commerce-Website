// Modify the products data structure to include category information
const products = [
    // Add more products with category information
    {
      id:1,
      category:"men",
      title:"Opaque Casual Shirt",
      price:200,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24411432/2023/10/20/929b2175-73ff-4c07-9635-545f1c3150761697792264191-Powerlook-Men-Brown-Opaque-Striped-Casual-Shirt-415169779226-3.jpg",
    },
    {
      id:2,
      category:"men",
      title:"Oversize Casual Shirt",
      price:150,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24580922/2023/8/21/020c7040-eb4d-443d-9489-3a1d33e7b0091692628431489OliveGreenPocketCheckedOversizeDropShoulderShirt1.jpg",
    },
    {
      id:3,
      category:"men",
      title:"Collar Casual Shirt",
      price:180,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21743698/2023/2/15/6e06a4da-903d-4a28-a288-14c16516d5891676456271080-Kook-N-Keech-Men-Shirts-3471676456270474-1.jpg",
    },
    {
      id:4,
      category:"men",
      title:"Cotton Casual Shirt",
      price:250,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24578692/2023/9/15/9f677357-4624-49a6-8ca9-9e2b9c58be541694775719690-Mast--Harbour-Men-Shirts-2931694775719259-1.jpg",
    },
    {
      id:5,
      category:"men",
      title:"Navy Blue Casual Shirt",
      price:220,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21743696/2023/2/15/5ca6c3ff-e18d-46a1-816b-885cac1df9601676456267607-Kook-N-Keech-Men-Shirts-6241676456267035-1.jpg",
    },
    {
      id:6,
      category:"men",
      title:"Checked Casual Shirt",
      price:180,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21707184/2023/2/2/cbf4271f-6221-4f9c-99f4-2c19cb0db5381675312714385-Moda-Rapido-Men-Shirts-5121675312713835-1.jpg",
    },
    {
      id:7,
      category:"men",
      title:"Cotton Spread Collar",
      price:280,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26305786/2023/12/26/af9ff580-5b62-47ca-a75b-45e86d9717af1703567120280-Mast--Harbour-Men-Black-Premium-Opaque-Casual-Shirt-36617035-7.jpg",
    },
    {
      id:8,
      category:"men",
      title:"Oversized Casual Shacket",
      price:250,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26193450/2023/12/2/3803bfc3-915e-46e0-a670-0acb7cbf5e461701501816297FUGAZEEMenBlackRelaxedCasualShirt3.jpg",
    },
    {
      id:9,
      category:"men",
      title:"Cotton Oversized Casual Shirt",
      price:180,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25183706/2023/9/25/a8d2f859-4a27-48d3-963d-085baee41e071695635789755PowerlookMenBrownOpaqueCheckedCasualShirt1.jpg",
    },
    {
      id:10,
      category:"men",
      title:"Cotton Oversized Casual Shirt",
      price:380,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24920798/2023/9/12/ed75d67d-3948-48e9-8074-4093866cd99e1694522550528PowerlookMenMulticolouredOpaqueCheckedCasualShirt1.jpg",
    },
    {
      id:11,
      category:"women",
      title:"Black Kurta",
      price:250,
      image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/e/eefe998ZISKDCR3871_1.jpg",
    },
    {
      id:12,
      category:"women",
      title:"Kurta",
      price:150,
      image:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/a/ea50998ZISKDCH3863_1.jpg",
    },
    {
      id:13,
      category:"women",
      title:"Kurta",
      price:300,
      image:"https://assets.ajio.com/medias/sys_master/root/20230821/ja4M/64e36748afa4cf41f562a5f4/-473Wx593H-466478028-mauve-MODEL.jpg",
    },
    {
      id: 14,
      category: "women",
      title: "Black Kurta",
      price: 200,
      image: "https://assets.ajio.com/medias/sys_master/root/20231004/U22L/651cf108afa4cf41f5237c06/-473Wx593H-466665100-black-MODEL5.jpg",
    },
    {
      id: 15,
      category: "women",
      title: "Black Kurta straight",
      price: 250,
      image: "https://assets.ajio.com/medias/sys_master/root/20231004/bznU/651ca9ffddf779151918293d/-473Wx593H-466665136-black-MODEL.jpg",
    },
    {
      id: 16,
      category: "women",
      title: "Floral Embroidered Net Saree",
      price: 260,
      image: "https://assets.ajio.com/medias/sys_master/root/20230628/foBC/649b6c51eebac147fc13de40/-473Wx593H-465668532-pink-MODEL2.jpg",
    },
    {
      id: 17,
      category: "women",
      title: "Silk Blend Zari",
      price: 360,
      image: "https://m.media-amazon.com/images/I/51tVPBITwKL._SY741_.jpg",
    },
    {
      id:18,
      category:"women",
      title:"Printed Straight Kurta",
      price:150,
      image:"https://assets.ajio.com/medias/sys_master/root/20230203/SzHs/63dcaaf5f997dd708e367339/-473Wx593H-443007683-yellow-MODEL2.jpg",
    },
    {
      id:19,
      category:"women",
      title:"Floral Print Round-Neck Top",
      price:250,
      image:"https://assets.ajio.com/medias/sys_master/root/20240329/gLrZ/6606dcbb16fd2c6e6a8b678d/-473Wx593H-442592942-ltblue-MODEL2.jpg",
    },
    {
      id:20,
      category:"accessories",
      title:"Watch",
      price:300,
      image:"https://assets.ajio.com/medias/sys_master/root/20221018/JC9i/634eb714aeb269659c4c04fd/-473Wx593H-464995522-blue-MODEL6.jpg",
    },
    {
      id:21,
      category:"accessories",
      title:"Cap",
      price:150,
      image:"https://m.media-amazon.com/images/I/51BlFt70R-L._SX679_.jpg",
    },
    {
      id:22,
      category:"accessories",
      title:"Sunglasses",
      price:100,
      image:"https://assets.ajio.com/medias/sys_master/root/20230706/rqBY/64a6634ca9b42d15c939db83/-1117Wx1400H-466204637-black-MODEL.jpg",
    },
    {
      id:23,
      category:"accessories",
      title:"Backpack",
      price:200,
      image:"https://assets.ajio.com/medias/sys_master/root/20231115/hK5S/6554ad3dafa4cf41f5849dbe/-473Wx593H-410409162-02a-MODEL2.jpg",
    },
    {
      id:24,
      category:"accessories",
      title:"Tie",
      price:100,
      image:"https://assets.ajio.com/medias/sys_master/root/20230925/zPyl/6511bda0ddf7791519003b7c/-473Wx593H-410386878-rmr10-MODEL.jpg",
    },
    {
      id:25,
      category:"shoes",
      title:"Sneakers",
      price:200,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24343600/2023/8/4/7c7aaeb0-f46f-4ca9-8850-c36312bfa1251691162453185ASIANMenWhiteColourblockedSneakers1.jpg",
    },
    {
      id:26,
      category:"shoes",
      title:"Red Tape",
      price:250,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24592334/2023/8/22/47cb9066-de67-4b3d-9591-7082012e2a821692714311564RedTapeMenBluePerforationsPUSneakers1.jpg",
    },
    {
      id:27,
      category:"shoes",
      title:"Men Colourblocked Sneakers",
      price:150,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27464994/2024/2/9/2c4eb26e-d3b1-4828-bef5-23a81595a3cb1707428345915adeboyMenColourblockedPUSneakers1.jpg",
    },
    {
      id:28,
      category:"shoes",
      title:"Sneakers",
      price:220,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24439310/2023/8/11/7a2776e1-f7bb-4d38-928a-d183e0c76ea91691728764899RedTapeMenWhiteStripedSkateShoes1.jpg",
    },
    {
      id:29,
      category:"shoes",
      title:"Nike",
      price:350,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28282442/2024/3/15/db83d18c-8544-4b0d-a5e5-2ca0341f99311710476866021JumpmanMVPMensShoes1.jpg",
    },
    {
      id:30,
      category:"shoes",
      title:"Sneakers",
      price:260,
      image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28026652/2024/3/5/0845194b-7510-4a5d-8a71-e81c2867feff1709621327257HRXbyHrithikRoshanMenColourblockedSneakers1.jpg",
    },

  ];

  // Function to render products based on category
  // Declare global variables
// DOM elements
const cartItemsElement = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartIconElement = document.getElementById('cartValue');
const totalBillElement = document.getElementById('totalBill');

// Initialize cart from local storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render products based on category
function renderProducts(category) {
    const productList = document.getElementById('productList');
    
    // Check if the product list element exists
    if (!productList) {
        console.error('productList element not found.');
        return;
    }

    // Clear the product list
    productList.innerHTML = "";

    // Filter products based on the category
    const filteredProducts = products.filter(product => product.category === category);

    // Render each product
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
            </div>
        `;

        productList.appendChild(productDiv);
    });

    // Add event listeners to "Add to cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Event listener for category links
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
        renderProducts(selectedCategory);
    });
});

// Initial rendering of the "men" category products on page load
renderProducts("men");

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

// Function to update cart icon
function updateCartIcon() {
    // Calculate the total number of items in the cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Update the cart icon with the total number of items
    cartIconElement.innerHTML = `<i class='bx bxs-shopping-bag'>${totalItems}</i>`;
}

// Function to render cart items
function renderCartItems() {
    cartItemsElement.innerHTML = cart.map(
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
                        <input class="cart-item-quantity"
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
    ).join("");

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    updateCartIcon();
    updateTotalBill();
}

// Function to calculate and update the total bill
function updateTotalBill() {
    const totalBill = calculateTotalBill();
    totalBillElement.textContent = `$${totalBill}`;
}

// Function to calculate total bill
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

// Function to remove an item from the cart
function removeFromCart(event) {
    const productId = parseInt(event.target.dataset.id);

    // Remove the item from the cart array
    cart = cart.filter(item => item.id !== productId);

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart items and total bill
    renderCartItems();
}

// Check if the script is running on the cart page, and render cart items if so
if (window.location.pathname.includes("cart.html")) {
    renderCartItems();
}
