//maak 50 background foto's en steek ze in array
    var backgroundCards = [];
    var gameElement = document.querySelector("#game");
    for (var i=0;i<50;i++)
    {
        var backgroundImage = document.createElement("img");
        backgroundImage.classList.add("backgroundimage");
        backgroundImage.setAttribute("src","Assets/Images/card.png");
        gameElement.append(backgroundImage);

        backgroundCards.push(backgroundImage);
    }

//maak gameCards aan: 1x, queen 5x bom, 44x empty
var gameCards = [
    {
        name: "bomb",
        img: "Assets/Images/bomb.png"
    },
    {
        name: "bomb",
        img: "Assets/Images/bomb.png"
    }, 
    {
        name: "bomb",
        img: "Assets/Images/bomb.png"
    }, 
    {
        name: "bomb",
        img: "Assets/Images/bomb.png"
    }, 
    {
        name: "bomb",
        img: "Assets/Images/bomb.png"
    },  
    {
        name: "queen",
        img: "Assets/Images/save-the-queen.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    },
    {
        name: "empty",
        img: "Assets/Images/empty-card.png"
    }   
]

//random sorteren
gameCards.sort(() => (Math.random() > .5) ? 1 : -1);

//andere manier om gameCards aan te maken
    /*var gameCards = [];
    //1x queen
    var queenCard = document.createElement("img");
    queenCard.classList.add("backgroundimage");
    queenCard.setAttribute("src", "Assets/Images/save-the-queen.png");
    gameCards.push(queenCard);

    //5x bom
    for (var i=0; i<5;i++)
    {
        var bombCard = document.createElement("img");
        bombCard.classList.add("backgroundimage");
        bombCard.setAttribute("src", "Assets/Images/bomb.png");
        gameCards.push(bombCard);
    }
    //44x empty
    for (var i=0; i<44;i++)
    {
        var emptyCard = document.createElement("img");
        emptyCard.classList.add("backgroundimage");
        emptyCard.setAttribute("src","Assets/Images/empty-card.png");
        gameCards.push(emptyCard);
    }*/

//timer
var time =0; 
var clockElement = document.querySelector("#clock");
var interval = setInterval(function(){
    time++;
    clockElement.innerHTML=time;
},1000)  


//klik event 
var livesElement = document.querySelector("#counter");
var amountOfLives = 3;
var endgameElement = document.querySelector("#endgame");


for (var i=0;i<50;i++)
{
    var index = -1;
    backgroundCards[i].addEventListener("click", function(){
      
        index++;
        console.log(index);
        this.setAttribute("src", gameCards[index].img);

        if (gameCards[index].name == "bomb")
        {
            amountOfLives--;
            livesElement.innerHTML = amountOfLives;

            if (amountOfLives==0)
            {
                setTimeout(function(){
                    gameElement.remove();
                    clearInterval(interval);
                    var endgame = document.createElement("p");
                    endgame.innerHTML = "You are dead!";
                    endgameElement.append(endgame);
                },1500);
            }
        }

        else if (gameCards[index].name =="queen")
        {
            setTimeout(function(){
                gameElement.remove();
                clearInterval(interval);
                var winStatement = document.createElement("p");
                winStatement.innerHTML = "You saved the queen at " + time + "! Nice job.";
                endgameElement.append(winStatement)
            },1500);
            ;
        }

    });
}

