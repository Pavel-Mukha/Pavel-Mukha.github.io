function showFiltersPanel(e) {
    e.preventDefault();
    filtersPanel.classList.remove('close-filters-panel');
    filtersPanel.classList.add('show-filters-panel');
    bgPopUp.classList.add('background-popup');
}
function closeFiltersPanel(e) {
    e.preventDefault();
    filtersPanel.classList.remove('show-filters-panel');
    filtersPanel.classList.add('close-filters-panel');
    bgPopUp.classList.remove('background-popup');
}
var showFiltersButton = document.getElementById('shop-page-filters');
var filtersPanel = document.getElementById('filters-panel');
var closeIndicator = document.getElementById('indicator-close');
var bgPopUp = document.getElementById('background-popup');
showFiltersButton.addEventListener('click', showFiltersPanel);
closeIndicator.addEventListener('click', closeFiltersPanel);
window.addEventListener('resize', function () {
   if(document.documentElement.clientWidth >= 768){
       filtersPanel.classList.remove('close-filters-panel');
       filtersPanel.classList.remove('show-filters-panel');
       bgPopUp.classList.remove('background-popup');
    }
});