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

    rootEl.insertAdjacentHTML('beforeend', header(books.logo))
}

window.addEventListener('load', loadEvent);