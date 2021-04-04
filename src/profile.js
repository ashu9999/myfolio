// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if false, animation plays everytime element comes on screen
    once: true
}
// Change your display name on tha landing display
const header = {
    name: "Ashutosh Kumar",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "I am Ashutosh and here's something about me.."
const about = {
    paragraph: "I am a learning enthusiast and a budding software developer, keen on developing new skills with a creative inclination that motivates me to think out of the box and I love to write codes that can solve any kind of problem.I have expertise of languages like C++/Python/JS; creating and deploying Django, React and flask based web applications. I have decent knowledge of ML and NLP concepts also. I am still enthusiastically grabbing all the concepts and principles whenever I encounter them. "
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "Datastructures and Algorithms",
        faClass: "fas fa-laptop-code"
    },
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "Python/Django",
        faClass: "fab fa-python"
    },{
        name: "Reactjs",
        faClass: "fab fa-react"
    },{
        name: "Machine Learning",
        faClass: "fab fa-python"
    },{
        name: "Natural Language Processing",
        faClass: "fas fa-language"
    },{
        name: "Database",
        faClass: "fas fa-database"
    },{
        name: "Github",
        faClass: "fab fa-github"
    },{
        name: "Heroku",
        faClass: "fas fa-h-square"
    },{
        name: "Linux",
        faClass: "fab fa-linux"
    }
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "COVID Fake News Detection",
        skills: ["HTML, CSS, JS, Flask, Machine Learning, NLP, Heroku"],
        url: "https://covid-fake-twitter-news.herokuapp.com/"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "React Notes",
        skills: ["HTML, CSS, Reactjs"],
        url: "https://ashu9999.github.io/react-notes-app"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Reactjs Quiz App",
        skills: ["Reactjs, HTML/CSS, Bootstrap"],
        url: "https://ashu9999.github.io/react-quiz/"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Wildlife Conservation Project",
        skills: ["HTML, CSS, Bootstrap"],
        url: "https://ashu9999.github.io/wildlife-site/"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Friendscampus Class Page",
        skills: ["HTML, CSS, Bootstrap"],
        url: "https://ashu9999.github.io/study-material-webpage/"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Friendscampus Study material Page",
        skills: ["HTML, CSS, Bootstrap"],
        url: "https://ashu9999.github.io/book-download-page/"
    },
    
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "Feel free to reach out to me on these platforms.",
    copyright: "Ashutosh Kumar",
    contactUrl: 'https://form.jotform.com/210866417557463'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/ashu9999',
    facebook: 'https://www.facebook.com/profile.php?id=100004195121200',
    linkedin: 'https://linkedin.com/in/ashu9999',
    resume: 'https://drive.google.com/file/d/1dw2NqDUVX44kRS-UXgIyPlzeryQFNw4D/view?usp=sharing'
}
// Dont change anything here
export { animation, header, background, about, skillsBar, projects, contact, social, section2title, section3Title, section5Title }
