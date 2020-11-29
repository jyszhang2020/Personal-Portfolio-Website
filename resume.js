// var resume = [
//     {
//       title: "Pedagogy of the Oppressed",
//       author: "Paulo Freire",
//       year: 1968,
//       publisher: "Bloomsbury Publishing",
//       pages: 192,
//       ebook:false,
//       cover: "https://images-na.ssl-images-amazon.com/images/I/41OtPGPAMuL._SX333_BO1,204,203,200_.jpg"
    
//     },
//     {
//       title: "Stamped from the Beginning",
//       author: "Ibram X. Kendi",
//       year: 2016,
//       publisher: "Public Affairs",
//       pages: 594,
//       ebook:false,
//       cover: "https://images-na.ssl-images-amazon.com/images/I/51ZYfODpfXL._SX331_BO1,204,203,200_.jpg"
    
//     },
//     {
//       title: "The New Jim Crow",
//       author: "Michelle Alexander",
//       year: 2020,
//       publisher: "New Press",
//       pages: 377,
//       ebook:false,
//       cover: "https://www.akpress.org/pub/media/catalog/product/cache/1ec012b46cbfe4262fc94f3e95ab2d9c/n/e/newjip.jpg"
    
//     },
// ];

var resume_header = [
  {
    name: "Yunshu (Joyce) Zhang",
    contact: "Yunshuzhang2022@u.northwestern.edu | jyszhang2020@gmail.com | (832) 800-6230",
    web: "LinkedIn: https://www.linkedin.com/in/yunshu-joyce-zhang-ab8aa0143"
  }
];

var resume_education = [
  {
    section: "Northwestern University",
    time: "Fall 2020 – Present",
    content: "Master of Science, Computer Science"
  }
];


var education = "Education";
var skill = "Skill";
var project = "Project";
var experience = "Experience";

var education_info = [
  {
    section: "Northwestern University",
    time: "Fall 2020 – Present",
    info: [
      {
        point: "Master of Science, Computer Science"
      }
    ]
  },
  {
    section: "Penn State",
    time: "Fall 2016 – Spring 2020",
    info: [
      {
        point: "Bachelor of Science, Computer Science; Statistic- Applied Option; Mathematics- Systems Analysis Option"
      }
    ]
  }
];

var skill_info = [
  {
    section: "Programming Languages",
    time: "",
    info: [
      {
        point: "Python, Java, C, JavaScript, HTML, PHP, R, CSS, MATLAB, Minitab"
      }
    ]
  },
  {
    section: "Framework",
    time: "",
    info: [
      {
        point: "React, Flask, MySQL, AWS, Docker"
      }
    ]
  },
  {
    section: "Operating Systems",
    time: "",
    info: [
      {
        point: "Linux, Windows, Mac OS"
      }
    ]
  }

];

var experience_info = [
  {
    section: "Software Development Engineer, Melax Technologies Inc.",
    time: "Summer 2019",
    info: [
      {
        point: "Interned in a leading NLP-based clinical data extraction, analysis and integration team in Texas Medical Center"
      },
      {
        point: "Utilized CLAMP tool and deep learning BioBERT model for the development of a comprehensive machine learning medical informatics system; configured Docker and AWS environment for the team"
      },
      {
        point: "Participated in N2C2 2019 National NLP Clinical Challenges, using CLAMP NLP for medical data normalization, name entity encoding, clinical information extraction and recognition solutionr"
      },
    ]
  },
  {
    section: "Research Assistant, Penn State Emotion Modeling Project",
    time: "2018-2019",
    info: [
      {
        point: "Specialized in the visual data indexing and modeling that focuses on the project that extracted and characterized linguistic features of image data related to color, texture, shape, and location"
      },
      {
        point: "Developed computer algorithms that used statistics model and machine learning to predict human emotional response to visual data"
      },
    ]
  },
  {
    section: "Test Analyst, Pactera Technology Ltd",
    time: "Summer 2018",
    info: [
      {
        point: "Built test cases for company developed Electronic Toll Collection System (https://www.bjetc.cn/Index.aspx)"
      },
      {
        point: "Tested mobile deployment; generated reports on client registration, toll sales and toll booth utilization"
      },
    ]
  }
];

var project_info = [
  {
    section: "Donation Collector",
    time: "Apr 2020",
    info: [
      {
        point: "(React, CSS, Spring boot, Hibernate, AWS SES, AWS RDS, MySQL)"
      },
      {
        point: "Designed the Front-End using React and CSS"
      },
      {
        point: "Implemented the Back-End using Spring boot and Hibernate"
      },
      {
        point: "Designed Email Notification using the technology of AWS SES"
      },
      {
        point: "Maintain the database using AWS RDS and update the data using MySQL"
      },
    ]
  },
  {
    section: "JobSearch",
    time: "Feb 2020",
    info: [
      {
        point: "(AWS EC2, Java Servlet, JavaScript, MySQL, AWS RDS, MonkeyLearn)"
      },
      {
        point: "Performed front-end web UI design and implemented using HTML, CSS, and JavaScript"
      },
      {
        point: "Handled HTTP request and response with RESTful API implemented by Java Servlets"
      },
      {
        point: "Improved personalized position recommendation based on search history and favorite records"
      },
      {
        point: "Used MySQL database on Amazon RDS to store position fetched from GitHub API"
      },
      {
        point: "Deployed on AWS EC2 using Docker and set up security groups to only show HTTP server to public"
      },
      {
        point: "Extracted keywords of job positions using MoneyLearn API to improve recommendation results"
      },
    ]
  },
  {
    section: "NittanyPath",
    time: "Sep 2019",
    info: [
      {
        point: "(Flask, Python, SQLite, HTML, CSS, PyCharm IDE)"
      },
      {
        point: "Chose SQLite as a relational database management system"
      },
      {
        point: "Designed the front-end using Flask and Bootstrap"
      },
      {
        point: "Created tables in the database using the SQLAlchemy package in Flask"
      },
      {
        point: "Implemented the Backend using Python and Flask"
      },
    ]
  },
  {
    section: "Newsgroups Classification",
    time: "Mar 2019",
    info: [
      {
        point: "(Python, ML, DL, Keras, TensorFlow, Panda, Scikit-Learn)"
      },
      {
        point: "Used GloVe wording embedding to pre-process text file"
      },
      {
        point: "Developed a CNN and RNN with different layers to classify text information using Python Deep Learning Library Keras and TensorFlow"
      },
    ]
  }
];


function createHeader(resume_header, resumeSelector){
  let resume_info = document.querySelector(resumeSelector);
  if (resume_info) {
    if(resume_header instanceof Array){
      for (let resume of resume_header) {
        let html = `
          <div>
            <h1 class="name">${resume.name}</h1>
            <h5 class="contact">${resume.contact}</h5>
            <h5 class="contact">${resume.web}</h5>
          </div>`
        let container = document.createElement("div");
        container.className="resume-title";
        container.innerHTML = html;
        container.tabIndex = resume_header.indexOf(resume);
        resume_info.append(container);
      }
    }
  }
}

function createCategory(name, resumeSelector) {
  let category_name = document.querySelector(resumeSelector);
  let html = `
    <div>
      <h1>${name}</h1>
      <hr>
    </div>
  `
  let container = document.createElement("div");
  container.className="resume-category";
  container.innerHTML = html;
  //container.tabIndex = resume_header.indexOf(resume);
  category_name.append(container);
}

function createContent(content, resumeSelector) {
  let resume_info = document.querySelector(resumeSelector);
  if (resume_info) {
    if(content instanceof Array){
      for (var i = 0; i < content.length; i++) {
        var resume = content[i];
        let html1 = `
          <div>
            <h3 class="name">${resume.section}</h3>
            <h5 class="time">${resume.time}</h5>
            <ul>
          `
        var container = document.createElement("div");
        container.className="resume-content";
        container.innerHTML = html1;
        // container.tabIndex = resume_header.indexOf(resume);
        resume_info.append(container);

        // add info
        for (var j = 0; j < resume.info.length; j++) {
          console.log(resume.info.length)
          let html2 = `
              <li>${resume.info[j].point}</li>
          `
          var container = document.createElement("div");
          container.className="resume-content";
          container.innerHTML = html2;
          resume_info.append(container);
        }

        let html3 = `
              </ul>
            </div>
          `
          var container = document.createElement("div");
          container.className="resume-content";
          container.innerHTML = html3;
          resume_info.append(container);
      }
    }
  }
}




    
function createResumeTest(resume, resumeSelector){
    let resume_info = document.querySelector(resumeSelector);
    if (resume_info){
        if(resume instanceof Array){
            for (let book of resume){
              // You will add your content here for
              // let html = 
              let html = `
                  <div>
                      <h1 class="title">${book.title}</h1>
                      <h2 class="author">${book.author}</h2>
                      <img class="cover" src="${book.cover}" alt="Cover Art">
                      <div class="book-info">
                      <span class="publisher">&copy; ${book.publisher}</span>,
                      <span class="pages">${book.pages} pages </span>
                  </div>
              `
              let container = document.createElement("div");
              container.className="book";
              container.innerHTML = html;
              container.tabIndex = resume.indexOf(book);
              resume_info.append(container);
            }
        }

    }

}
    