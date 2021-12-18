const firstName = document.querySelector('.first__name');
const lastName = document.querySelector('.last__name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btn = document.querySelector('#btn');

const isEmpty = (item) => {
    if (item.children[0].children[0].value == "") {
        item.children[0].classList.add('invalid');
        item.children[1].classList.add('warning');
        return false
    }
    else {
        item.children[0].classList.remove('invalid');
        item.children[1].classList.remove('warning');
        return true
    }
};

const validEmail = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(String(email).toLowerCase());
};

const isValid = (email) => {
    if (!validEmail(email.children[0].children[0].value.trim())) {
        email.children[0].classList.add('invalid');
        email.children[1].classList.add('warning');
        return false
    }
    else {
        email.children[0].classList.remove('invalid');
        email.children[1].classList.remove('warning');
        return true
    }
}

btn.addEventListener('click', (e) => {
    if (!isEmpty(firstName) ||
        !isEmpty(lastName) ||
        !isValid(email) ||
        !isEmpty(password)) {
        e.preventDefault();
    }
})