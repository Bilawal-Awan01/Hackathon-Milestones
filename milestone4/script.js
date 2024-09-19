var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workexperience = document.getElementById('workexperience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Editable Resume<b></h2>\n    <h3><b>Personal Information</b></h3>\n\n    <p>name:<span contenteditable=\"true\">".concat(name, "</span></p>\n    <p>email:<span contenteditable=\"true\">").concat(email, "</span></p>\n    <p>phone:<span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3><b>Education</b></h3>\n    <p span contenteditable=\"true\">education:").concat(education, "</p>\n\n    <h3><b>Work Experience</b></h3>\n    <p span contenteditable=\"true\">experience:").concat(workexperience, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p span contenteditable=\"true\">skills:").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("the element is missing");
    }
});
