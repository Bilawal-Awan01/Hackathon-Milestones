var toggleBtton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleBtton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
