function redirectToCategory() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  
    const categoryLinks = {
        "fruits": "fruits.html",
        "vegetables": "vege.html",
        "dairy": "dairy.html",
        "snacks": "snacks.html",
        "staples": "staples.html",
        "dry fruits": "dry fruits.html"
    };
    
     if (categoryLinks[searchTerm]) {
        window.location.href = categoryLinks[searchTerm];
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        redirectToCategory();
    }
});



if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready);
}

else{
    ready();
}


 function ready(){
    var removeCartItemButton = document.getElementsByClassName('btn-danger');
    for (var i = 0 ; i < removeCartItemButton.length; i++){
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(var i = 0 ;i < quantityInputs.length ; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(var i = 0; i< addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click',addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
 }


 function purchaseClicked(){
     
     var cartItems = document.getElementsByClassName('cart-items')[0];
     while(cartItems.hasChildNodes()){
         cartItems.removeChild(cartItems.firstChild)
     }
     updateCartTotal();
 }

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    
}

function  quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateCartTotal();
}


function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var weight = shopItem.getElementsByClassName('shop-item-weight')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title,weight,price,imageSrc);
    updateCartTotal();
}

function addItemToCart(title, weight, price, imageSrc){
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

    for (i = 0; i< cartItemNames.length ; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item already has added to the cart!');
            return
        }
    }
    var cartRowContents = `

        <td class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="50" height="50">
            <span class="cart-item-title">${title}</span>                  
        </td>
        <td class="cart-item cart-column">
        <span class="cart-weight cart-column">${weight}</span>
        </td>
        <td class="cart-item cart-column">
            <span class="cart-price cart-column">${price}</span>
        </td>
        <td class="cart-item cart-column">
            <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
            <button class="btn btn-danger" type="button">Remove</button>
        </td>        
    `;
     
            
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0 ; i< cartRows.length ; i++){
        var cartRow =cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('₹ ' , ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity);
         
    }
    total = Math.round(total * 100 )/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '₹ '+ total + '.00';
 
}

// Get the modal, image element, and other elements
let modal = document.getElementById("lightbox-modal");
let modalImg = document.getElementById("lightbox-img");
let lightboxItems = document.querySelectorAll('.lightbox-item');
let closeBtn = document.querySelector('.close');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentIndex = -1;  // To track the current image index

// Function to open the modal
function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = lightboxItems[currentIndex].getAttribute('href');
}

// Loop through all the gallery items and set up the click event
lightboxItems.forEach((item, index) => {
  item.onclick = function(event) {
    event.preventDefault();
    openModal(index);
  };
});

// Close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Navigate to the next image
nextBtn.onclick = function() {
  currentIndex = (currentIndex + 1) % lightboxItems.length;
  modalImg.src = lightboxItems[currentIndex].getAttribute('href');
};

// Navigate to the previous image
prevBtn.onclick = function() {
  currentIndex = (currentIndex - 1 + lightboxItems.length) % lightboxItems.length;
  modalImg.src = lightboxItems[currentIndex].getAttribute('href');
};

// Close the modal if clicked outside the image
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
function ourFunction(){
    var email=document.getElementById('email').value;
    if(email){
        alert('Subscribed Successfully!!');
    }else{
        document.getElementById("errorMessage").textContent="Please fill out all fields.";
    }
}

function myFunction(){
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var address=document.getElementById('address').value;
    var number=document.getElementById('number').value;
    if (username && email && password && address && number) {
        alert(`Registration Successfully!`);
      } else {
        document.getElementById("errorMessage").textContent = "Please fill out all fields.";
      }
}
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const submit = document.getElementById('submit');

    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address!';
        submit.disabled = true;
        return false;
    } else {
        emailError.textContent = '';
        submit.disabled = false;
        return true;
    }
}
function validatenumber() {
    const numberInput = document.getElementById('number');
    const errorMessage = document.getElementById('error-message');
    const submit = document.getElementById('submit');
    
    // Check if the phone number contains exactly 10 digits
    const numberPattern = /^[0-9]{10}$/;
    
    if (!numberPattern.test(numberInput.value)) {
        errorMessage.textContent = 'Please enter exactly 10 digits.';
        submit.disabled = true;  // Disable submit button until valid
    } else {
        errorMessage.textContent = '';
        submit.disabled = false; 
    }
}
document.getElementById('scroll-icon').addEventListener('click', function() {
    // Scroll down to the next section (for example, 1000px down)
    window.scrollBy({
        top: window.innerHeight, 
        behavior: 'smooth' 
    });
});



