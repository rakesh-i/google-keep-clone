import './newnotes.css';

function noteprompt(){
    const container = document.createElement('div');
    container.id = 'promptcontainer';

    const take = document.createElement('input');
    take.id = 'take';
    take.placeholder = 'Take a note...'

    const newlist = document.createElement('button');
    newlist.id = 'newlist';
    const newlistsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`;
    newlist.innerHTML = newlistsvg;

    container.appendChild(take);
    container.appendChild(newlist);
    
    return container;


}

export{
    noteprompt
}