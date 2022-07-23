const yourScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');
const roll = document.getElementById('roll');
const yourImg = document.getElementById('your-img');
const computerImg = document.getElementById('computer-img');
userScore = 0;
compScore = 0;

roll.addEventListener('click', () =>{
    getImage();
});

function getImage(){
    let x1 = Math.floor(Math.random()*6)+1;
    let x2 = Math.floor(Math.random()*6)+1
    if(x1==1){
        yourImg.src = 'images/one.jpg';
    }
    if(x1==2){
        yourImg.src = 'images/two.jpg';
    }
    if(x1==3){
        yourImg.src = 'images/three.jpg';
    }
    if(x1==4){
        yourImg.src = 'images/four.jpg';
    }
    if(x1==5){
        yourImg.src = 'images/five.jpg';
    }
    if(x1==6){
        yourImg.src = 'images/six.jpg';
    }
    if(x2==1){
        computerImg.src = 'images/one.jpg';
    }
    if(x2==2){
        computerImg.src = 'images/two.jpg';
    }
    if(x2==3){
        computerImg.src = 'images/three.jpg';
    }
    if(x2==4){
        computerImg.src = 'images/four.jpg';
    }
    if(x2==5){
        computerImg.src = 'images/five.jpg';
    }
    if(x2==6){
        computerImg.src = 'images/six.jpg';
    }
      getResult(x1,x2);
}

function getResult(num1,num2){
    if(num1>num2){
        userScore++;
        yourScore.innerText= userScore;
    }
    else if(num1<num2){
        compScore++;
        computerScore.innerText=compScore;
    }
}