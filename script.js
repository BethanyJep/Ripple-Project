const username = document.getElementsByName('username')
const password = document.getElementsByName('password')
const submitB = document.getElementsById('submit')

var usernames = ('Sandra', 'Susan', 'Brian', 'Brandon', 'Rachael', 'George', 'Paul', 'Patricia')

var passwords = ('sandra101', 'susan102', 'brian103', 'brandon104', 'rachael105', 'george106', 'paul107', 'patricia108')

    
function userName() {
    if (username = usernames)
        alert("username not found")
        else
        alert("OK, you can register.")
};
function passWord() {
    if (password = passwords)
        alert("password not found")
        else
        alert("OK, you can register.")
};
function submission() {

};

username.onblur = userName()
password.onclick = passWord()
submitB.onsubmit = submission()