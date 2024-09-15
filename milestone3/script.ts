const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const workexperience = (document.getElementById('workexperience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    
    const resumeHTML = `
    <h2><b>Resume<b></h2>
    <h3><b>Personal Information</b></h3>

    <p>name:${name}</p>
    <p>email:${email}</p>
    <p>phone:${phone}</p>

    <h3><b>Education</b></h3>
    <p>education:${education}</p>

    <h3><b>Work Experience</b></h3>
    <p>experience:${workexperience}</p>

    <h3><b>Skills</b></h3>
    <p>skills:${skills}</p>
    `;

    if(resumeDisplayElement ){
        resumeDisplayElement.innerHTML = resumeHTML
    } else {
        console.log("the element is missing");
    }
})