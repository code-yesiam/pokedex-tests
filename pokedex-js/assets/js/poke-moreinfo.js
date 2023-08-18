const showOverlayButton = document.querySelector('.open-pokeinfo');
const overlay = document.getElementById('pokemonList');
const closeOverlayButton = document.querySelector('.close-pokeinfo');

showOverlayButton.addEventListener('click', () => {
    dialog.showModal()
    openCheck(dialog)
});

closeOverlayButton.addEventListener('click', () => {
    dialog.close('pokemonNotChosen')
    openCheck(dialog)
});

