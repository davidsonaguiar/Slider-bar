import films from './lists.js';

let nFilms = films.length;
var index = 0;

films.forEach(item => {

    let title = item.titulo.split(' ');
    let firstLetter = [];

    title.forEach(text => {
        let letterCap = text.charAt(0).toUpperCase();
        let textCap = text.replace(text.charAt(0), letterCap)
        firstLetter.push(textCap);
    });

    document.getElementById('list').innerHTML += `
        <li class="list-item">
            <a class="list-item-link" href="#" title="${firstLetter.join(' ')}">
                <img src="${item.ulr}" alt="${firstLetter.join(' ')}">
            </a>
            <di>
                <p><a href="#">${firstLetter.join(' ')}</a></p>
            <di>
        </li>`
});

document.getElementById('btn-back').addEventListener('click', () =>{
    let widthBoxList = document.getElementById('box-list').offsetWidth;
    let widthScroll = document.getElementById('list').scrollWidth;
    
    if(index < 0 && index < -(widthBoxList / 4)){
        index = widthScroll - widthBoxList;
    }else{
        index -= widthBoxList / 2;
    }

    document.getElementById('list').scroll(index, 0);

});

document.getElementById('btn-forward').addEventListener('click', () =>{
    let widthBoxList = document.getElementById('box-list').offsetWidth;
    let widthScroll = document.getElementById('list').scrollWidth;

    if(index > (widthScroll - widthBoxList) + (widthBoxList / 4)){
        index = 0;
    }else{
        index += widthBoxList / 2;
    }

    document.getElementById('list').scroll(index, 0);

});
