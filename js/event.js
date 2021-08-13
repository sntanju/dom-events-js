function makeCyan(){
    document.body.style.backgroundColor = 'cyan';
}

//handeling make button blue onclick
const blueButton = document.getElementById('make-blue-button');
        console.log(blueButton);
        //just set the name of the function
        blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const cadetblueButton = document.getElementById('make-cadetblue-button');
// anonymous funcion s
cadetblueButton.onclick = function (){
    document.body.style.backgroundColor = 'cadetBlue';
}

//handle by using add eventlisenter
const skyblueButton = document.getElementById('make-skyblue-button');
skyblueButton.addEventListener('click', makeSkyBlue)

function makeSkyBlue(){
    document.body.style.backgroundColor = 'skyBlue';
}

//add event listener
const grayButton = document.getElementById('make-gray-button');
grayButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray';
})

  //direct shortcut
  document.getElementById('make-lightblue-button').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightBlue';
})
