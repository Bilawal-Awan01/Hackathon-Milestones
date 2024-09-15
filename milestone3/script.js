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
    var resumeHTML = "\n    <h2><b>Resume<b></h2>\n    <h3><b>Personal Information</b></h3>\n\n    <p>name:".concat(name, "</p>\n    <p>email:").concat(email, "</p>\n    <p>phone:").concat(phone, "</p>\n\n    <h3><b>Education</b></h3>\n    <p>education:").concat(education, "</p>\n\n    <h3><b>Work Experience</b></h3>\n    <p>experience:").concat(workexperience, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p>skills:").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("the element is missing");
    }
});
