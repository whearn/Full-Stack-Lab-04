//var squareId = 0;
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var addBtn = document.createElement('button');
    addBtn.innerText = 'Add Square';

    document.body.appendChild(addBtn);

    var squareId = 0;

    addBtn.addEventListener('click', function(){
        var newSquare = document.createElement('div');

        newSquare.className = 'square';
        newSquare.id = squareId;

        var hoverId = document.createElement('p');
        hoverId.innerText = squareId;
        
        newSquare.addEventListener('mouseenter', function(){
            newSquare.appendChild(hoverId);
        });

        newSquare.addEventListener('mouseleave', function(){
            newSquare.innerText = '';
        });

        newSquare.addEventListener('click', function(){
            var squareColors = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'purple', 'orange', 'grey'];
            var randomColor = squareColors[Math.floor(Math.random() * squareColors.length)];
            
            newSquare.style.backgroundColor = randomColor;
        });

        newSquare.addEventListener('dblclick', function(){
            if (isEven(newSquare.id)) {
                alert('even');
                console.log(newSquare.id);
            } else {
                alert('odd');
                console.log(newSquare.id);
            }
        });

        document.body.appendChild(newSquare);
        squareId++;
    });
});