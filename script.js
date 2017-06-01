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
            var getSquares = document.getElementsByClassName('square');

            //"Original Attempt"
            /*if (isEven(newSquare.id)) {
                var rightSquare = Number(newSquare.id) + 1;
                
                if(getSquares[rightSquare] !== undefined) {
                    getSquares[rightSquare].remove();
                } else {
                    alert('There is not a square to the right of this one');
                }    
            } else {
                var leftSquare = Number(newSquare.id) - 1;

                if(getSquares[leftSquare] !== undefined) {
                    getSquares[leftSquare].remove();
                } else {
                    alert('There is not a square to the left of this one');
                }
            }*/

            if (isEven(newSquare.id)) {
                var rightSquare = Number(newSquare.id) + 1;
                
                if(rightSquare > getSquares.length) {
                    alert('There is not a square to the right of this one');
                } else {
                    getSquares[rightSquare].remove();
                }    
            } else {
                var leftSquare = Number(newSquare.id) - 1;

                if(leftSquare < 0) {
                    alert('There is not a square to the left of this one');
                } else {
                    getSquares[leftSquare].remove();
                }
            }
        });

        document.body.appendChild(newSquare);
        squareId++;
    });
});