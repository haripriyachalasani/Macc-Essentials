// nav code start
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
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