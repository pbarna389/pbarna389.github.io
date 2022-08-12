const header = logo => {
    return `
    <header>
        <span>${logo}</span>
        <span id='headerIcon' class="material-symbols-outlined">menu</span>
    </header>
    `
}


const loadEvent = () => {
    const rootEl = document.querySelector("#root");

}

window.addEventListener('load', loadEvent);