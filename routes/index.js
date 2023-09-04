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
  {
    id: 21,
    term: "CI/CD Pipeline",
    description:
      "CI/CD Pipeline is a series of processes that take the code through Continuous Integration, Continuous Testing, and Continuous Deployment, ensuring that the code is reliable and can be released into production at any time.",
    references: [
      "Kim, G. (2016). The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations.",
      "Fowler, M. (2006). Continuous Integration. martinfowler.com.",
    ],
  },
  {
    id: 22,
    term: "Version Control",
    description:
      "Version Control is a system that records changes to files over time so that you can recall specific versions later. It allows multiple people to simultaneously work on a single project.",
    references: [
      "Loeliger, J., & McCullough, M. (2012). Version Control with Git: Powerful tools and techniques for collaborative software development.",
      "Chacon, S., & Straub, B. (2014). Pro Git. Apress.",
    ],
  },
  {
    id: 23,
    term: "Artifact Repository",
    description:
      "Artifact Repository is a collection of binary software artifacts and metadata stored in a defined directory structure. It is used by build and deployment tools.",
    references: [
      "Bailey, J. (2015). Nexus Repository Manager for Beginners.",
      "Smith, K. (2010). Artifactory User Guide.",
    ],
  },
  {
    id: 24,
    term: "Release Orchestration",
    description:
      "Release Orchestration refers to the process of coordinating the tasks related to deploying software updates from development to production in a controlled, repeatable manner.",
    references: [
      "Martin, D. (2016). Mastering Release Management with Team Foundation Server.",
      "Jones, A. (2017). Effective Release Orchestration: A Guide.",
    ],
  },
  {
    id: 25,
    term: "Infrastructure Monitoring",
    description:
      "Infrastructure Monitoring refers to the process of continuously overseeing the performance of computer servers, networks, and other infrastructure devices to detect and mitigate any performance issues or outages.",
    references: [
      "Turner, B. (2015). Infrastructure Monitoring with Zabbix.",
      "Ward, M. (2013). Comprehensive Infrastructure Monitoring: Best Practices.",
    ],
  },
  {
    id: 26,
    term: "Continuous Feedback",
    description:
      "Continuous Feedback is a practice in DevOps where team members are consistently getting feedback on their work, allowing them to improve and adapt rapidly. It's a foundational principle in agile and lean practices.",
    references: [
      "Kim, G. (2016). The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win.",
      "Rubin, K. S. (2012). Essential Scrum: A Practical Guide to the Most Popular Agile Process.",
    ],
  },
  {
    id: 27,
    term: "Immutable Infrastructure",
    description:
      "Immutable Infrastructure means once a server is deployed, it is never modified, rather replaced with a new server. It emphasizes the idea of never patching live servers and instead replacing them.",
    references: [
      "Morris, K. (2016). Infrastructure as Code: Managing Servers in the Cloud.",
      "Baker, P. (2014). Immutable Infrastructure: Benefits and Practices.",
    ],
  },
  {
    id: 28,
    term: "Code Review",
    description:
      "Code Review is a software quality assurance practice in which one or more persons review a piece of software code to find and fix mistakes overlooked in the initial development phase.",
    references: [
      "Fowler, M. (2013). Code Review Best Practices. martinfowler.com.",
      "McIntosh, S. (2016). Modern Code Review: A Case Study at Google.",
    ],
  },
  {
    id: 29,
    term: "Site Reliability Engineering (SRE)",
    description:
      "SRE is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. It aims to create scalable and highly reliable software systems.",
    references: [
      "Murphy, N. (2016). Site Reliability Engineering: How Google Runs Production Systems. O'Reilly Media, Inc.",
      "Jones, R. (2018). SRE Practices: A Comprehensive Guide.",
    ],
  },
  {
    id: 30,
    term: "Continuous Security",
    description:
      "Continuous Security refers to the process of integrating security protocols and tools into the Continuous Integration and Continuous Deployment (CI/CD) pipeline, ensuring that security checks are automated and embedded into every part of the development process.",
    references: [
      "Harris, B. (2017). Secure by Design: Implementing Continuous Security in DevOps.",
      "Turner, L. (2019). Continuous Security and DevOps: Best Practices.",
    ],
  },
  {
    id: 31,
    term: "Kubernetes",
    description:
      "Kubernetes, often abbreviated as K8s, is an open-source container orchestration platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery.",
    references: [
      "Kubernetes Official Documentation. (2021). What is Kubernetes?. kubernetes.io.",
      "Burns, B., Beda, J., & Hightower, K. (2017). Kubernetes: Up and Running: Dive into the Future of Infrastructure. O'Reilly Media, Inc.",
    ],
  },
  {
    id: 32,
    term: "Docker",
    description:
      "Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from each other and bundle their own software, libraries, and system tools, allowing for consistency across environments.",
    references: [
      "Docker Official Documentation. (2021). What is Docker?. docker.com.",
      "Turnbull, J. (2016). The Docker Book: Containerization is the new virtualization. James Turnbull.",
    ],
  },
  {
    id: 33,
    term: "Azure Kubernetes Service (AKS)",
    description:
      "AKS is a managed container orchestration service provided by Azure. It simplifies deploying, scaling, and operating Kubernetes clusters in Azure, eliminating the complexity of cluster management.",
    references: [
      "Azure Documentation. (2021). What is Azure Kubernetes Service (AKS)?. azure.microsoft.com.",
    ],
  },
  {
    id: 34,
    term: "Azure Container Registry (ACR)",
    description:
      "ACR is a managed Docker container registry service provided by Azure. It allows developers to store and manage container images, making it easier to deploy containerized applications in Azure.",
    references: [
      "Azure Documentation. (2021). What is Azure Container Registry?. azure.microsoft.com.",
    ],
  },
  {
    id: 35,
    term: "Terraform",
    description:
      "Terraform is an open-source infrastructure as code (IaC) software tool that provides a consistent CLI workflow to manage cloud services. It codifies cloud APIs into declarative configuration files.",
    references: [
      "HashiCorp. (2021). Introduction to Terraform. terraform.io.",
      "Brikman, Y. (2017). Terraform: Up & Running: Writing Infrastructure as Code. O'Reilly Media, Inc.",
    ],
  },
  {
    id: 36,
    term: "Version Control",
    description:
      "Version control, also known as source control, is the practice of tracking and managing changes to code. Tools like Git allow multiple people to work on a project concurrently, without interfering with each other.",
    references: ["Chacon, S., & Straub, B. (2014). Pro Git. Apress."],
  },
  {
    id: 37,
    term: "Deployment Pipeline",
    description:
      "A deployment pipeline is an automated manifestation of the process for getting software from version control to the users. It ensures that software is always in a release-ready state.",
    references: [
      "Fowler, M., & Humble, J. (2010). Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation. Addison-Wesley Professional.",
    ],
  },
  {
    id: 38,
    term: "DevOps Toolchain",
    description:
      "A DevOps toolchain is a set of tools that aid in the delivery, development, and management of software applications throughout the system development life cycle, as coordinated by an organization that uses DevOps practices.",
    references: [
      "Kim, G., Humble, J., Debois, P., & Willis, J. (2016). The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology Organizations. IT Revolution Press.",
    ],
  },
  {
    id: 39,
    term: "Configuration Management",
    description:
      "Configuration management (CM) is a systems engineering process for establishing and maintaining consistency of a product's performance, functional, and physical attributes with its requirements, design, and operational information throughout its life.",
    references: [
      "Burgess, M. (2004). Principles of network and system administration. John Wiley & Sons.",
    ],
  },
  {
    id: 40,
    term: "Monitoring and Logging",
    description:
      "Monitoring and logging refer to the practices of gathering, analyzing, and visualizing metrics and logs from software applications and infrastructure. It helps in identifying performance bottlenecks, troubleshooting issues, and ensuring system reliability.",
    references: ["Turnbull, J. (2014). The Art of Monitoring. James Turnbull."],
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
