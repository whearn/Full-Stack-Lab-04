document.addEventListener('DOMContentLoaded', function(){
    var addBtn = document.createElement('button');
    addBtn.innerText = 'Add Square';

    document.body.appendChild(addBtn);

    addBtn.addEventListener('click', function(){
        var newSquare = document.createElement('div');
        newSquare.className = 'square';

        document.body.appendChild(newSquare);
    });
});