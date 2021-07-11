const resetForm = ()=>{
    const name = document.getElementById('name').value = '';
    const age = document.getElementById('age').value = '';
    const gender = document.getElementById('gender').value = '';
    const bgroup = document.getElementById('bgroup').value = '';
    const phone = document.getElementById('phone').value = '';
    const residence = document.getElementById('residence').value = '';

}
const btn = document.getElementById("resetButton");
btn.addEventListener('click', resetForm);
