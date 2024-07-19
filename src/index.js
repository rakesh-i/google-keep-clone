import './style.css';
import { noteprompt } from './newnotes';

function createToggle() {
    let value = 0;

    return function() {
        value = value === 0 ? 1 : 0;
        return value;
    };
}

function topbar(){
    const header = document.createElement('div');
    header.id =  'topbar';

    const left = document.createElement('div');
    left.id ='headerleft';

    const burger = document.createElement('button');
    burger.id = 'burger';
    const menusvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`;
    burger.innerHTML = menusvg;

    const logo = document.createElement('div');
    logo.id = 'logo';
    const logoimg = new Image();
    logoimg.src = 'https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png';
    const logoname = document.createElement('div');
    logoname.id = 'logoname';
    logoname.textContent = 'Keep';
    logo.appendChild(logoimg);
    logo.appendChild(logoname);

    left.appendChild(burger);
    left.appendChild(logo);

    const searchbar = document.createElement('div');
    searchbar.id  = 'searchbar';

    const searchlogo = document.createElement('div');
    const searchsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`;
    searchlogo.innerHTML = searchsvg;
    const inpcont = document.createElement('div');
    inpcont.id = 'inpcont';
    const inp = document.createElement('input');
    inp.id = 'inp';
    inp.type = 'text';
    inp.placeholder = 'Search'
    inpcont.appendChild(inp);
    searchbar.appendChild(searchlogo);
    searchbar.appendChild(inpcont);
    
    const right = document.createElement('div');
    right.id = 'headerright';
    const refresh = document.createElement('button');
    refresh.id = 'refresh';
    const refreshsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>`;
    refresh.innerHTML = refreshsvg;

    const view = document.createElement('button');
    view.id = 'view';
    const viewsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>`;
    view.innerHTML = viewsvg;

    const settings = document.createElement('button');
    settings.id = 'settings';
    const settingssvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>`;
    settings.innerHTML = settingssvg;

    right.appendChild(refresh);
    right.appendChild(view);
    right.appendChild(settings);

    header.appendChild(left);
    header.appendChild(searchbar);
    header.appendChild(right);

    return header;
}

function sidebar(){
    const side = document.createElement('div');
    side.id = 'sidebar';
    const notes = document.createElement('button');
    notes.id = 'notes';
    const notessvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5F6268"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>`;
    notes.innerHTML = notessvg;

    const reminder = document.createElement('button');
    reminder.id = 'reminder';
    const remindersvg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5F6268"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>`;
    reminder.innerHTML = remindersvg;

    side.appendChild(notes);
    side.appendChild(reminder);

    return side;
}

function notes(){
    const notescontainer = document.createElement('div');
    notescontainer.id = 'notescontainer';

    notescontainer.appendChild(noteprompt());

    return notescontainer;
}

const menutoggle = createToggle();
document.getElementById('header').appendChild(topbar());
document.getElementById('content').appendChild(sidebar());
document.getElementById('content').appendChild(notes());


document.getElementById('inp').addEventListener('focus', function(){
    const inp = document.getElementById('inp');
    const searchbar = document.getElementById('searchbar');
    searchbar.style.backgroundColor = '#ffffff';
    inp.style.backgroundColor = '#ffffff';
    searchbar.style.boxShadow = 'inset 0 -1px 0 rgba(0, 0, 0, .1)';
    
});

document.getElementById('inp').addEventListener('blur', function(){
    const inp = document.getElementById('inp');
    const searchbar = document.getElementById('searchbar');
    searchbar.style.backgroundColor = '#F1F3F4';
    inp.style.backgroundColor = '#F1F3F4';
    searchbar.style.boxShadow = 'none';
    
});

document.getElementById('burger').addEventListener('click', function(){
    let x = menutoggle();
    // const burger = document.getElementById('burger');
    const side = document.getElementById('sidebar'); 
    const notes = document.getElementById('notes');
    const reminder = document.getElementById('reminder');
    if(x===1){
        side.style.width = '232px';
        notes.style.width = '232px';
        notes.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg> <div style='padding-left:50px;'>Notes</div>`;
        reminder.style.width = '232px';
        reminder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg><div style='padding-left:50px;'>Reminder</div>`

        
    }
    else{
        side.style.width = '58px';
        notes.style.width = '46px';
        notes.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>`;
        reminder.style.width = '46px';
        reminder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>`
    }
});

document.getElementById('take').addEventListener('focus', function(){
    const promptcontainer = document.getElementById('promptcontainer');
    promptcontainer.innerHTML = '';
    promptcontainer.style.height = 'auto';
    promptcontainer.style.display = 'flex';
    promptcontainer.style.flexDirection = 'column';
    promptcontainer.style.alignItems  = 'start';

    const titlecont = document.createElement('div');
    titlecont.id = 'titlecont';
    titlecont.style.display = 'flex';
    titlecont.style.width = '100%';
    const title = document.createElement('input');
    title.id = 'notetitle';
    title.style.border = 'none';
    title.style.outline = 'none';
    title.placeholder = 'Title';
    title.style.width = '100%';
    titlecont.appendChild(title);

    const notecont = document.createElement('div');
    notecont.id = 'notecont';
    notecont.style.display = 'flex';
    notecont.style.width = '100%';
    const notes = document.createElement('textarea');
    notes.id = 'notetext';
    notes.placeholder =  'Take a note.....'
    notes.style.border = 'none';
    notes.style.outline = 'none';
    notes.style.width = '100%'
    notecont.appendChild(notes);
    
    

    
    promptcontainer.appendChild(titlecont);
    promptcontainer.appendChild(notecont);
    document.getElementById('notetext').addEventListener('input', function(){
        console.log('ddd');
        const textarea = document.getElementById('notetext');
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    
        if (textarea.scrollHeight > parseInt(getComputedStyle(textarea).maxHeight)) {
            textarea.style.overflowY = 'scroll';
        } else {
            textarea.style.overflowY = 'hidden';
        }
    });
    
});  


    

