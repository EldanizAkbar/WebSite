document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("sem").addEventListener('click', e => {
       e.preventDefault();
       checkInputs();
   });
});
function checkInputs() {
   let name = document.getElementById('fname');
   let surname = document.getElementById('lname');
   let email = document.getElementById('email');
   let comment = document.getElementById("comment");
   let nameValue = document.getElementById('fname').value.trim();
   let SurnameValue = document.getElementById('lname').value.trim();
   let emailValue = document.getElementById('email').value.trim();
   let commentValue = document.getElementById('comment').value.trim();

   if (nameValue == '') {
      setErrorFor(name, 'Name cannot be blank');
  } 
  else if(nameValue.length<=2){
      setErrorFor(name, 'Name must be consist of min 3 letters');
  } 
  else if(nameValue.length>=16){
      setErrorFor(name, 'Name must be consist of max 16 letters');
  } 
  else {
      setSuccessFor(name);
  }
  if (SurnameValue == '') {
      setErrorFor(surname, 'Surname cannot be blank');
  } 
  else if(SurnameValue.length<=2){
      setErrorFor(surname, 'Surmame must be consist of min 3 letters');
  } 
  else if(SurnameValue.length>=16){
      setErrorFor(surname, 'Surname must be consist of max 16 letters');
  } else {
      setSuccessFor(surname);
  }

   if (emailValue == '') {
       setErrorFor(email, 'Email cannot be blank');
   } else if (!isEmail(emailValue)) {
       setErrorFor(email, 'Not a valid email');
   } else {
       setSuccessFor(email);
   }

   if (commentValue == '') {
       setErrorFor(comment, 'Comment cannot be blank');
   } else {
       setSuccessFor(comment);
   }
}

function setErrorFor(input, message) {
   let formControl = input.parentElement;
   let small = formControl.querySelector('small');
   formControl.className = 'form-group error';
   small.innerText = message;
}

function setSuccessFor(input) {
   let formControl = input.parentElement;
   formControl.className = 'form-group success';

}

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


let projects = [{
      title: "Educational Robotics",
      photo1: "../images/robot-removebg-preview.png",
      sub_title1: "What is Educational Robotics?",
      description: `Educational Robotics is an interdisciplinary learning
   environment based on the use of robots and electronic components as the common thread to
   enhance the development of skills and competencies in children and teenagers. It works
   specially on the STEAM disciplines, although it can also include other areas such as
   linguistics, geography and history.
   The Ebotics educational robotics kits are designed to be used in STEAM education.
   STEAM stands for Science, Technology, Engineering, Arts and Mathematics. STEAM education
   relates these 5 subjects, giving as a result a multidisciplinary learning process,
   through the development of real projects based in real life situations.`,
      photo2: "../images/shutterstock_761938474-removebg-preview.png",
      photo3: "../images/71iQLKdNnpL-removebg-preview.png",
      sub_title2: "Education and training",
      description1: `Robotics engineers design robots, maintain them, develop
      new applications for them, and conduct research to expand the potential of robotics.
      Robots have become a popular educational tool in some middle and high schools, as well
      as in numerous youth summer camps, raising interest in programming, artificial
      intelligence and robotics among students. First-year computer science courses at several
      universities now include programming of a robot in addition to traditional software
      engineering-based coursework.`
   },
   {
      title: "System Administrator",
      photo1: "../images/556-5569981_data-clipart-administrator-system-administrator-clipart-hd-png-removebg-preview.png",
      sub_title1: "What is System Administrator?",
      description: `If you have ever considered a career in the information
      technology field, becoming a systems administrator would definitely be a great start!
      Organizations and businesses of all sizes have sizable network and computer
      infrastructure and require highly skilled administrators who have the experience and
      knowledge to manage these seemingly complicated and complex operations. Here is a
      comprehensive overview of what this profession does and how much one should expect to
      make`,
      photo2: "../images/telefeedcast.jpg",   
      photo3: "../images/121030_006.jpg",
      sub_title2: "Educational Qualifications",
      description1: `After opting for system administration as your career
      path, it is mandatory that you select a relevant bachelor’s degree. The basic
      requirement is a bachelor’s degree in computer science, information system management,
      information technology or other related fields. However, other degree programs with an
      emphasis on hardware, computer networks, and system administration do exist. Plus, as a
      system administrator, you can focus on different networks like Wide Area Network (WAN),
      Local Area Network (LAN), as well as several types of servers like mail servers, file
      servers, etc.`
   },
   {

      title: "Web Development",
      photo1: "../images/javascript-vs-html-vs-css-1024x683-removebg-preview.png",
      sub_title1: "Front-End Development",
      description: `Front-end web development, also known as client-side
      development is the practice of producing HTML, CSS and JavaScript for a website or Web
      Application so that a user can see and interact with them directly. The challenge
      associated with front end development is that the tools and techniques used to create
      the front end of a website change letantly and so the developer needs to letantly be
      aware of how the field is developing.
      The objective of designing a site is to ensure that when the users open up the site they
      see the information in a format that is easy to read and relevant.`,
      photo2: "../images/javascript-vs-html-vs-css-1024x683-removebg-preview.png",
      photo3: "../images/e1d974c1ab5419e9421cbe8fb2c4471b.jpg",
      sub_title2: "Back-End Development",
      description1: `Back-end Development refers to the server-side
      development. It is the term used for the behind-the-scenes activities that happen when
      performing any action on a website. It can be logging in to your account or purchasing a
      watch from an online store.
      Backend developer focuses on databases, scripting, and the architecture of websites.
      Code written by back-end developers helps to communicate the database information to the
      browser.`
   },
]
$(function () {
   $("a").click(function () {
      let a = $(this).siblings("#read_more").text();
      for (let f of projects) {
         if (f.title == a) {
            let obj = {
               title: f.title,
               photo1: f.photo1,
               sub_title1: f.sub_title1,
               description: f.description,
               photo2: f.photo2,
               photo3: f.photo3,
               sub_title2: f.sub_title2,
               description1: f.description1
            }
            localStorage["projects"] = JSON.stringify(obj);
            break;
         }
      }
   })
});
setTimeout(function(){
   $('.loader_bg').fadeToggle();
 }, 1000);