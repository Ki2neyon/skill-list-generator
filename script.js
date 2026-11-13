const button = document.getElementById('show-button');
const skillList = document.getElementById('skill-list');
const skills = ['HTML', 'CSS', 'JavaScript'];

button.addEventListener('click',() => {
    skillList.textContent = '';
    skills.forEach((skill) => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillList.appendChild(li);
    });
});