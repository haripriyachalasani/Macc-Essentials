// nav code start
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
// Nav code end
// new product code start
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.cards-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let cardWidth = document.querySelector('.card').offsetWidth + 20; 
    let visibleCards = Math.floor(wrapper.offsetWidth / cardWidth);
  
    let currentPosition = 0;
  
    leftArrow.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updatePosition();
        }
    });
  
    rightArrow.addEventListener('click', () => {
        if (currentPosition < wrapper.children.length - visibleCards) {
            currentPosition++;
            updatePosition();
        }
    });
  
    function updatePosition() {
        wrapper.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        updateArrowVisibility();
    }
  
    function updateArrowVisibility() {
        leftArrow.style.display = currentPosition === 0 ? 'none' : 'block';
        rightArrow.style.display = currentPosition >= wrapper.children.length - visibleCards ? 'none' : 'block';
    }
  
    updateArrowVisibility();
  
    window.addEventListener('resize', () => {
        cardWidth = document.querySelector('.card').offsetWidth + 20;
        visibleCards = Math.floor(wrapper.offsetWidth / cardWidth);
        currentPosition = 0;
        updatePosition();
    });
  });
// new product code end
// Weekely Discounts Code start
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.discounts-cards-wrapper');
    const leftArrow = document.querySelector('.discounts-left-arrow');
    const rightArrow = document.querySelector('.discounts-right-arrow');
    const cardElements = document.querySelectorAll('.discounts-card');

    function calculateCardDimensions() {
        if (cardElements.length === 0) return { cardWidth: 0, visibleCards: 0 };
        
        const cardWidth = cardElements[0].offsetWidth + parseInt(window.getComputedStyle(cardElements[0]).marginRight, 10);
        const wrapperWidth = wrapper.offsetWidth;
        const visibleCards = Math.floor(wrapperWidth / cardWidth);
        return { cardWidth, visibleCards };
    }

    let { cardWidth, visibleCards } = calculateCardDimensions();
    let currentPosition = 0;

    function updatePosition() {
        wrapper.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        updateArrowVisibility();
    }

    function updateArrowVisibility() {
        leftArrow.style.display = currentPosition === 0 ? 'none' : 'block';
        rightArrow.style.display = currentPosition >= cardElements.length - visibleCards ? 'none' : 'block';
    }

    leftArrow.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updatePosition();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentPosition < cardElements.length - visibleCards) {
            currentPosition++;
            updatePosition();
        }
    });

    window.addEventListener('resize', () => {
        ({ cardWidth, visibleCards } = calculateCardDimensions());
        currentPosition = Math.min(currentPosition, cardElements.length - visibleCards);
        updatePosition();
    });

    updateArrowVisibility();
});
// Weekely Section Code End
// Top Sellings Section Code start
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.top-sellings-cards-wrapper');
    const leftArrow = document.querySelector('.top-sellings-left-arrow');
    const rightArrow = document.querySelector('.top-sellings-right-arrow');
    const cardElements = document.querySelectorAll('.top-sellings-card');

    function calculateCardDimensions() {
        if (cardElements.length === 0) return { cardWidth: 0, visibleCards: 0 };
        
        const cardWidth = cardElements[0].offsetWidth + parseInt(window.getComputedStyle(cardElements[0]).marginRight, 10);
        const wrapperWidth = wrapper.offsetWidth;
        const visibleCards = Math.floor(wrapperWidth / cardWidth);
        return { cardWidth, visibleCards };
    }

    let { cardWidth, visibleCards } = calculateCardDimensions();
    let currentPosition = 0;

    function updatePosition() {
        wrapper.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        updateArrowVisibility();
    }

    function updateArrowVisibility() {
        leftArrow.style.display = currentPosition === 0 ? 'none' : 'block';
        rightArrow.style.display = currentPosition >= cardElements.length - visibleCards ? 'none' : 'block';
    }

    leftArrow.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updatePosition();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentPosition < cardElements.length - visibleCards) {
            currentPosition++;
            updatePosition();
        }
    });

    window.addEventListener('resize', () => {
        ({ cardWidth, visibleCards } = calculateCardDimensions());
        currentPosition = Math.min(currentPosition, cardElements.length - visibleCards);
        updatePosition();
    });

    updateArrowVisibility();
});
// Top Sellings Section Code end
// checkout code start
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Check if the form is valid
    if (this.checkValidity()) {
        // Redirect to the payments page
        window.location.href = 'payments.html';
    } else {
        // Show alert if form is not valid
        alert('Please fill out all required fields.');
    }
});

// checkout code end
// ALL PRODUCTS PAGE CODE

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  });

// payment success message code start

function showSuccessMessage() {
    // Get all input fields in the payment section
    const inputs = document.querySelectorAll('#payment-section input');
    
    // Check if all inputs are filled
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    
    if (allFilled) {
        // Apply blur effect to payment-section
        document.getElementById('payment-section').style.filter = 'blur(15px)';
        
        // Display success message
        document.getElementById('success-message').style.display = 'block';
        
        // Optionally, hide the success message after a few seconds
        // setTimeout(() => {
        //     document.getElementById('success-message').style.display = 'none';
        //     document.getElementById('payment-section').style.filter = 'none';
        // }, 3000); // Adjust delay as needed
    } else {
        alert('Please fill in all the required fields.');
    }
}

// payment success message code end

// add to cart code 
const cart = [];

function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.classList.toggle('open');
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        totalPrice.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
}

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const product = JSON.parse(button.getAttribute('data-product'));
        addToCart(product);
    });
});
  
  
