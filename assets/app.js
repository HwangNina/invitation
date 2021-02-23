const checkBtn = document.getElementById('checkBtn')
const modalBack = document.getElementById('modalBack');

const toggleModal = () => {
    if (modalBack.className === 'modal_none'){
        modalBack.className = 'modal_show';
    } else {
        modalBack.className = 'model_none';
    }
}

checkBtn.addEventListener('click', toggleModal);

const nameBtn = document.getElementById('nameBtn')

const checkName = () => {
    const nameValue = document.getElementById('nameInput').value;
    if (nameValue == '신민수') {
        document.location = './invitation.html'
        console.log('you can go')
    } else {
        alert('당신은 누구?')
        console.log('???')
    }
}

nameBtn.addEventListener('click', checkName);