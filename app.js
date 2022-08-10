const cardArray = [
    {
        name: 'bed_doggy',
        img: 'images/bed_doggy2.jpg',
    },
    {
        name: 'heart_doggy',
        img: 'images/heart_doggy2.jpg',
    },
    {
        name: 'white_doggy',
        img: 'images/white_doggy2.jpg',
    },
    {
        name: 'gray_cat',
        img: 'images/gray_cat2.jpg',
    },
    {
        name: 'sleepy_cat',
        img: 'images/sleepy-cat2.jpg',
    },
    {
        name: 'white_cat',
        img: 'images/white_cat2.jpg',
    },
    {
        name: 'bed_doggy',
        img: 'images/bed_doggy2.jpg',
    },
    {
        name: 'heart_doggy',
        img: 'images/heart_doggy2.jpg',
    },
    {
        name: 'white_doggy',
        img: 'images/white_doggy2.jpg',
    },
    {
        name: 'gray_cat',
        img: 'images/gray_cat2.jpg',
    },
    {
        name: 'sleepy_cat',
        img: 'images/sleepy-cat2.jpg',
    },
    {
        name: 'white_cat',
        img: 'images/white_cat2.jpg',
    }
]

cardArray.sort(() => 0.5 -  Math.random());
const gridDisplay = document.querySelector('#grid');
let cardsChosen = []
let cardsChosenIDs = []
let cardsWon = []
let resultDisplay = document.querySelector('#result-show')
let number = 0

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/cover2.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.append(card);
    }
}
createBoard()


function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    if(cardsChosenIDs[0] === cardsChosenIDs[1]){
        cards[cardsChosenIDs[0]].setAttribute('src','images/cover2.jpg')
        cards[cardsChosenIDs[1]].setAttribute('src','images/cover2.jpg')
        alert('You have clicked the same card!');
    }
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match !')
        cards[cardsChosenIDs[0]].setAttribute('src','images/cover22.jpg')
        cards[cardsChosenIDs[1]].setAttribute('src','images/cover22.jpg')
        cards[cardsChosenIDs[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIDs[1]].removeEventListener('click', flipCard)
        number++;
        cardsWon.push(cardsChosen)
    }
    else{
        cards[cardsChosenIDs[0]].setAttribute('src','images/cover2.jpg')
        cards[cardsChosenIDs[1]].setAttribute('src','images/cover2.jpg')
        //alert('Sorry, try again!!')
    }
    //innerHTML = textContent
    cardsChosen = []
    cardsChosenIDs = []
    resultDisplay.textContent = number

    if(cardsWon.length * 2 === cardArray.length){
        resultDisplay.innerHTML = "Congrats! you found them all ! "
    }
}

function flipCard(){
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIDs.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length  === 2){
        setTimeout(checkMatch, 500)
    }

}

