export default class GameView{
    constructor(){
        this.rootElement = document.getElementById('root');
        this.playersElement = Object.assign(document.createElement('div'), {id: "players-container"});
        this.handList = Object.assign(document.createElement('ol'), { id: "handList" });
        this.button = Object.assign(document.createElement('button'), { id: "btnPlay" });

        this.button.innerText = 'Play Hand';
        
        this.rootElement.appendChild(this.playersElement);
        this.rootElement.appendChild(this.button);
        this.rootElement.appendChild(this.handList);

        
    }

    bindPlayButton(handler) {
        this.button.addEventListener("click", handler);
    }

    renderPlayers(p1, p2){
        this.playersElement.innerHTML =  
        `<div class="p1">
                <span class="p1Name">${p1.name}</span>: <span class="p1Score">${p1.cards.length}</span> 
            </div>
                
            <div class="p2">
                <span class="p2Name">${p2.name}</span>: <span class="p2Score">${p2.cards.length}</span> 
            </div>
        `
    }

    renderHand(p1Hand, p2Hand, winner){
        let tempHTML = this.handList.innerHTML;
        this.handList.innerHTML =
         `
        <li class="hand-row">
            <div class="player-hand p1Hand">
                <div class="cards">
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="handCard">
                        <span class="cardName">${p1Hand[0].name}</span>
                        <span class="cardSuit">${p1Hand[0].suit}</span>
                    </div>
                </div>
            </div>

            <div class="hand-result">
                ${winner ? winner + " has won the hand!" : "War!"}
            </div>

            <div class="player-hand p2Hand">
                <div class="cards">
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="handCard">
                        <span class="cardName">${p2Hand[0].name}</span>
                        <span class="cardSuit">${p2Hand[0].suit}</span>
                    </div>
                </div>
            </div>
        </li>    
    ` + tempHTML;
    }
    
    renderWinner(winner){
        this.handList.innerHTML = 
        `
        <div class="hand-result">${winner.name} has won the game!</div>
        `
    }
}

