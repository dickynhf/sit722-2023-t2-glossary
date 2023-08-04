var express = require("express");
var router = express.Router();

const devopsGlossary = [
  {
    id: 1,
    term: "Continuous Integration",
    description:
      "Continuous Integration (CI) is a DevOps practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run. It's a critical element of modern software development.",
    references: [
      "Fowler, M. (2006). Continuous Integration. martinfowler.com",
      "Duvall, P., Matyas, S., & Glover, A. (2007). Continuous integration: improving software quality and reducing risk. Addison-Wesley Professional.",
    ],
  },
  {
    id: 2,
    term: "Continuous Deployment",
    description:
      "Continuous Deployment is a strategy in software development where code changes are automatically prepared and deployed to the production environment. It aims to reduce the time elapsed between writing a line of code and that code being usable in production.",
    references: [
      "Fitz, T. (2009). Continuous Deployment at IMVU: Doing the impossible fifty times a day.",
      "Humble, J., & Farley, D. (2010). Continuous delivery: reliable software releases through build, test, and deployment automation. Pearson Education.",
    ],
  },
  {
    id: 3,
    term: "Infrastructure as Code",
    description:
      "Infrastructure as Code (IaC) is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.",
    references: [
      "Marschall, M. (2013). Infrastructure as Code. InfoQ.",
      "Morris, K., & Kief, M. (2016). Infrastructure as Code: Managing Servers in the Cloud. O'Reilly Media, Inc.",
    ],
  },
  {
    id: 4,
    term: "Microservices",
    description:
      "Microservices is an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities. It enables continuous delivery and deployment of complex applications.",
    references: [
      "Newman, S. (2015). Building microservices: designing fine-grained systems. O'Reilly Media, Inc.",
      "Richardson, C. (2018). Microservices Patterns: With examples in Java. Manning Publications Co.",
    ],
  },
  {
    id: 5,
    term: "Docker",
    description:
      "Docker is an open-source platform designed to automate deploying, scaling, and operating application environments. It uses containerization technology to encapsulate applications and their environments.",
    references: [
      "Turnbull, J. (2014). The Docker Book: Containerization is the new virtualization.",
      "Poulton, N. (2017). Docker Deep Dive. Independently published.",
    ],
  },
  {
    id: 6,
    term: "Kubernetes",
    description:
      "Kubernetes, also known as K8s, is an open-source platform for automating deployment, scaling, and managing containerized applications. It groups containers that make up an application into logical units for easy management and discovery.",
    references: [
      "Hightower, K., Burns, B., & Beda, J. (2017). Kubernetes: Up and Running: Dive into the Future of Infrastructure. O'Reilly Media, Inc.",
      "Luksa, M. (2017). Kubernetes in Action. Manning Publications Co.",
    ],
  },
  {
    id: 7,
    term: "Git",
    description:
      "Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is simple to learn and has a tiny footprint with lightning fast performance.",
    references: [
      "Chacon, S., & Straub, B. (2014). Pro Git. Apress.",
      "Loeliger, J., & McCullough, M. (2012). Version Control with Git: Powerful tools and techniques for collaborative software development. O'Reilly Media, Inc.",
    ],
  },
  {
    id: 8,
    term: "Agile Development",
    description:
      "Agile Development is a set of software development methodologies based on iterative development, where requirements and solutions evolve through collaboration between self-organizing, cross-functional teams.",
    references: [
      "Cohn, M. (2004). User Stories Applied: For Agile Software Development. Addison-Wesley Professional.",
      "Rubin, K. S. (2012). Essential Scrum: A Practical Guide to the Most Popular Agile Process. Addison-Wesley Professional.",
    ],
  },
  {
    id: 9,
    term: "Scrum",
    description:
      "Scrum is an agile process framework for managing complex knowledge work, with an initial emphasis on software development, although it has been used in other fields and is slowly starting to be explored for other complex work, research and advanced technologies.",
    references: [
      "Schwaber, K. (2004). Agile project management with Scrum. Microsoft Press.",
      "Sutherland, J. (2014). Scrum: The Art of Doing Twice the Work in Half the Time. Crown Business.",
    ],
  },
  {
    id: 10,
    term: "Test-Driven Development",
    description:
      "Test-Driven Development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the code is improved so that the tests pass.",
    references: [
      "Beck, K. (2003). Test-Driven Development: By Example. Addison-Wesley Professional.",
      "Astels, D. (2003). Test-Driven Development: A Practical Guide. Prentice Hall PTR.",
    ],
  },
  {
    id: 11,
    term: "DevOps",
    description:
      "DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
    references: [
      "Kim, G. (2016). The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win.",
      "Willis, J. (2016). The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations.",
    ],
  },
  {
    id: 12,
    term: "Jenkins",
    description:
      "Jenkins is an open-source automation server that helps to automate parts of the build and delivery process. It's widely used in Continuous Integration and Continuous Deployment pipelines.",
    references: [
      "Smart, J. (2011). Jenkins: The Definitive Guide. O'Reilly Media, Inc.",
      "Labourey, S. (2013). Continuous Delivery with Jenkins.",
    ],
  },
  {
    id: 13,
    term: "Serverless Architecture",
    description:
      "Serverless Architecture allows developers to build and run applications without thinking about servers. It automatically scales the compute resources, making it suitable for scalable applications.",
    references: [
      "Roberts, M. (2016). Serverless Architectures on AWS.",
      "Mills, P. (2017). Serverless Design Patterns and Best Practices.",
    ],
  },
  {
    id: 14,
    term: "Configuration Management",
    description:
      "Configuration Management involves the systematic control, organization, and management of hardware or software configurations, ensuring consistency among design, operational information, and changes.",
    references: [
      "Burgess, M. (2004). Principles of Network and System Administration.",
      "Humble, J. (2010). Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation.",
    ],
  },
  {
    id: 15,
    term: "Ansible",
    description:
      "Ansible is an open-source automation tool that provides configuration management, application deployment, task automation, and provisioning. It's known for its simplicity and ease of use.",
    references: [
      "Hochstein, L. (2015). Ansible: Up and Running. O'Reilly Media, Inc.",
      "Dede, T. (2017). Mastering Ansible.",
    ],
  },
  {
    id: 16,
    term: "Containerization",
    description:
      "Containerization is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating system.",
    references: [
      "Turnbull, J. (2014). The Docker Book: Containerization is the new virtualization.",
      "Crawford, C. (2016). Kubernetes: Up and Running.",
    ],
  },
  {
    id: 17,
    term: "Automated Testing",
    description:
      "Automated Testing involves the use of software, separate from the software being tested, to control the execution of tests and the comparison of actual outcomes with predicted outcomes.",
    references: [
      "Fewster, M. (2001). Automated Software Testing. Addison-Wesley.",
      "Dustin, E. (1999). Effective Software Testing.",
    ],
  },
  {
    id: 18,
    term: "Cloud Computing",
    description:
      "Cloud Computing is the delivery of computing services over the internet, offering faster innovation, flexible resources, and economies of scale.",
    references: [
      "Ruparelia, N. (2016). Cloud Computing.",
      "Hill, R. (2017). Guide to Cloud Computing for Business and Technology Managers.",
    ],
  },
  {
    id: 19,
    term: "Build Automation",
    description:
      "Build Automation is the process of automating the creation of a software build and the associated processes including compiling, linking, and packaging the code into executable forms.",
    references: [
      "Smith, K. (2010). Build Automation with Maven.",
      "Bayer, M. (2011). Continuous Integration in .NET.",
    ],
  },
  {
    id: 20,
    term: "Monitoring and Logging",
    description:
      "Monitoring and Logging involve collecting, processing, aggregating, and analyzing real-time data about the state of systems and applications to ensure performance, stability, and security.",
    references: [
      "Chaganti, K. (2012). Monitoring with Opsview.",
      "Zadrozny, P. (2015). Practical Logging in .NET.",
    ],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    sub: "Welcome to your DevOps Companion! A one-stop resource to navigate the fascinating world of Development and Operations with ease and confidence.",
    name: devopsGlossary,
  });
});

module.exports = router;
