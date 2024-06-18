const arrowItem = document.querySelector('.navigation__dropdown-items--arrow');
const asideContent = document.querySelector('.navigation__dropdown-content-aside');

arrowItem.addEventListener('mouseenter', function() {
    asideContent.style.display = 'flex';
});

arrowItem.addEventListener('mouseleave', function() {
    asideContent.style.display = 'none';
});

asideContent.addEventListener('mouseenter', function() {
    asideContent.style.display = 'flex';
});

asideContent.addEventListener('mouseleave', function() {
    asideContent.style.display = 'none';
});

