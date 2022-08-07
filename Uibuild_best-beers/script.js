const header = beers => {
    return `
    <header>
        <h1>
           Best Beers
        </h1>
        <div>
            <span class="material-icons-outlined">
                dehaze
            </span>
        </div>
    </header>
    `
}

const cardWrapper = (cards) => {
    return `
        <div class="cardWrapper">
            ${cards}   
        </div>
    `
}

const cardsCreator = (data, card) => {
    let result = "";

    data.forEach(element => result += card(element.id, element.title, element.sub, element.text))

    return result;
}

const card = (id, title, sub, text) => {
    return `
        <div class="card">
            <div class="id">${id}</div>
                <h2>${title}</h2>
            <div class="text-wrapper">
                <p>${sub}</p>
                <p>${text}</p>           
            </div>
            <button><span>Details</span><span class="material-icons-outlined">
            arrow_forward
            </span></button>
        </div>
    `
}

const loadEvent = () => {
    console.log(beers.logo)
    const rootEl = document.querySelector('#root');

    const beerData = beers.cards.map((element, index) => element = { "id": index + 1, "title": element.title, "sub": element.sub, "text": element.text });
    console.log(beerData)

    rootEl.insertAdjacentHTML('beforeend', header());
    rootEl.insertAdjacentHTML('beforeend', cardWrapper(cardsCreator(beerData, card)));

}

window.addEventListener('load', loadEvent);