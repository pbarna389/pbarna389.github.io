const header = logo => {
    return `
    <header>
        <span>${logo}</span>
        <span id='headerIcon' class="material-symbols-outlined">menu</span>
    </header>
    `
};

const bookContainer = books => {
    return `
    <div class="bookWrapper">
        ${books}
    </div>
    `
};

const bookCard = (id, book, buttonText) => {
    console.log(book)
    return `
        <div class="bookCard">
            <p>${id}</p>
            <h6>${book.sub}</h6>
            <h2>${book.title}</h2>
            <p class="text">${book.text}</p>
            <button>
                <span>${buttonText}</span>
                <span class="material-symbols-sharp" id='arrowIcon'>
                    arrow_forward
                </span>
            </button>
        </div>
    `
}

const createCard = (data, card, buttonText) => {
    let result = "";

    data.forEach((book, index) => result += card(index + 1, book, buttonText))

    return result;
}


const loadEvent = () => {
    const rootEl = document.querySelector("#root");

    rootEl.insertAdjacentHTML('beforeend', header(books.logo));
    rootEl.insertAdjacentHTML('beforeend', bookContainer(createCard(books.cards, bookCard, books.button)));
}

window.addEventListener('load', loadEvent);