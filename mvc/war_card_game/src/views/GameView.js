export default class GameView{
    constructor(){
        this.rootElement = document.getElementById('root');
        this.playersElement = Object.assign(document.createElement('div'), {id: "players-container"});
        this.handList = Object.assign(document.createElement('ol'), { id: "handList" });

        
        this.rootElement.appendChild(this.playersElement);
        this.rootElement.appendChild(this.handList);
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
            <li>
                <span class="p1Hand">
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="handCard">
                        <span class="cardName">${p1Hand[0].name}</span>
                        <span class="cardSuit">${p1Hand[0].suit}</span>
                    </div>
                </span>

                <span class="p2Hand">
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="blankCard"></div>
                    <div class="handCard">
                        <span class="cardName">${p2Hand[0].name}</span>
                        <span class="cardSuit">${p2Hand[0].suit}</span>
                    </div>
                </span>

                <div>${winner ? winner.name + " has won the hand!" : 'War!'}</div>
            </li>    
         ` + tempHTML;
    console.log(`Incoming: `,p1Hand, p2Hand, winner)
    }
}