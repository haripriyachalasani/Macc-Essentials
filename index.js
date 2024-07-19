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