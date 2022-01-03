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

    let widthList = document.getElementById('list').offsetWidth;
    let widthScroll = document.getElementById('list').scrollWidth;
    let widthBoxlist = document.getElementById('box-list').offsetWidth;
    let calc = parseInt((widthScroll - widthList)/widthBoxlist)

    index--

    if(index < 0){
        index = calc + 1;
        document.getElementById('list').scroll(index * widthBoxlist, 0);
    }else{
        document.getElementById('list').scroll(index * widthBoxlist, 0);
    }

    console.log(index)
});

document.getElementById('btn-forward').addEventListener('click', () =>{

    let widthList = document.getElementById('list').offsetWidth;
    let widthScroll = document.getElementById('list').scrollWidth;
    let widthBoxlist = document.getElementById('box-list').offsetWidth;
    let calc = parseInt((widthScroll - widthList)/widthBoxlist)

    index++;
    if(index <= calc + 1){
        document.getElementById('list').scroll(index * widthBoxlist, 0);
    }else{
        document.getElementById('list').scroll(0, 0);
        index = 0;
    }

    console.log(index)
});

