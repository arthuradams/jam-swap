User.destroy_all
Category.destroy_all
Post.destroy_all
Comment.destroy_all

User.create([{email:"joecal@gmail.com",password:"joecal"},
{email:"esanchez1@craigslist.org",password:"esanchez1"},
{email:"mwilliamson2@slideshare.net",password:"mwilliamson2"},
{email:"hlittle3@ifeng.com",password:"hlittle3"},
{email:"shawkins4@opensource.org",password:"shawkins4"}]);

Category.create([{name:"meetups"},
{name:"jobs"}]);

Post.create([{title:"Ruby on Rails Developer",description:"Are you looking for a great opportunity where you can showcase your skills and talents? We are seeking a talented Ruby on Rails developer to join our Solution Street team! We are a company comprised of software developers and the partners of Solution Street are developers too! Our team is rapidly growing and now is the time to join us during this exciting adventure! We offer consulting services throughout the Northern Virginia/Washington, DC area and our home office is located in Herndon, Virginia.",city:"Herndon",state:"VA",user_id:1,category_id:2},
{title:"Web Developer",description:"This position is for an experienced web developer to work in a fast-paced, Agile environment. The web developer is responsible for participating in the full agile application development life cycle for new development design, construction and testing of Java applications, Web Services (SOAP and REST), and reusable components to support overall project objectives. The web developer will also participate in peer reviews and unit testing, and must be adaptable to different responsibilities, possess strong communications skills, and have a passion for constantly improving the individual and team effectiveness.",user_id:2,category_id:2,picture_url:"https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png"},
{title:"Young Apprentice",description:"Learn the Ways of the Sith. Wear cool armor. Develop an impressive voice. Warning: due to previous bad experiences, we have a strict anti-nepotism policy.",email:"paul.pateen@empire.gov",city:"Coruscant",user_id:5,category_id:2},
{title:"Web Designer",description:"BoatU.S., a part of GEICO and the Berkshire Hathaway family of companies, is looking for a Web Designer at our Headquarters in Alexandria, VA. The hours will be Monday – Friday, 8 AM – 5 PM or 9 AM – 6 PM.

The responsibilities will include:
• Develop engaging designs (web, app, online ads) that are visually appealing, on message, and inspire users to act
• Create site architecture and prototypes based on project requirements
• Regularly collaborate with team members & business stakeholders to understand project background needs and options for maximizing success
• Actively participate in creative brainstorm sessions to develop conceptual ideas around business objectives
Job Requirements:
• BFA or other arts-related degree
• 2+ years of related professional experience
• Expert working knowledge of/hands-on experience with Adobe Creative Suite
• Well verse in web programming languages (HTML, CSS, etc.)
• Knowledge of UI, browser compatibility, mobile web needs and restrictions, & online standards",user_id:3,category_id:2},
{title:"Front End Engineer",description:"Smith & Keller - Washington, DC
the run down
Our team is composed of software generalists and we expect you to be one too, but we particularly want your passion and thoughtfulness around front-end web development. While you’ll do lots of things here, you’ll be asked to tackle some of our most challenging UX innovations for the web, and will spread your knowledge and experience through an organization that is eager to learn. We are pushing the envelope on web-based interaction models for fabrication devices, and we need your help to make this the best possible user experience for our customers.

While this role is written for someone with a four-year degree and several years of industry experience, if you’re great at what you do and excited about what we do, we want to talk to you — whether you’re brand new to the industry or you’ve been a veteran architect for decades.

what you'll do
First and foremost, any task that helps us create an amazing product for our customers — which will include stretching your coding skills in new directions and pitching in when your colleagues need help.
Collaborating daily with designers, including our head of product, in-house UI designers, and our customers (many of whom are designers themselves).
Creating novel and intuitive user experiences that enable our amazing capabilities with minimal training.
Iterating tirelessly on those designs based on user feedback and not being afraid to kill your darlings.
Massaging the latest web technologies into a buttery-smooth implementation of our product vision.
Participating in planning sessions with the whole product team and helping build the user stories, requirements, and specifications that will drive development.
Building the software to fabricate the future – not just another CRUD app.

what you should know
You write copious amounts of thoughtful, high-quality code.
You’ve been responsible for shipping a product that people love.
You’re excited about being personally responsible for making the team successful, and you’re comfortable navigating ambiguity that arises in a startup environment, adjusting to changing priorities, and moving confidently even when guidance is limited.
You’re thoughtful about human-computer interfaces, responsive design, and applying software engineering principles to front-end implementations.
You have deep proficiency in HTML5, CSS3, and JavaScript, and know the strengths and limitations of all three.
You’re passionate about writing great software… and still know that you sometimes have to make some tradeoffs to ship quickly.

what would be nice to know
You’re experienced with mobile technologies, responsive design, browser compatibilities, and how best to mix web and native implementations.
You have 2D graphics and animation experience, either with SVG or Canvas.
You have 3D graphics and animation experience, like three.js or webGL.
You can wield jQuery effortlessly, and know when it’s best not to use it.
You’ve worked with libraries like React/Flux, Backbone, or Angular for structuring UI implementations
You’re comfortable with Rails, Python, and Node (we have multiple technologies powering our web services).",city:"Herndon",state:"VA",user_id:4,category_id:2,email:"president@whithous.guv"},
{title:"DC Perl Mongers",description:"Let's get together to talk about Perl! We usually have a formal topic or two, and then open question/answer discussion time. ALL levels and areas of interest are welcome!",city:"Washington",state:"DC",category_id:1,user_id:5},
{title:"Arlington Ruby",description:"This group was created to share knowledge about Ruby and educate anyone interested.",city:"Arlington",state:"VA",category_id:1,user_id:3},
{title:"NoVa UX",description:"Are you passionate about creating great online and mobile user experiences? If you're based in Northern Virginia or the DC metro area come join us to participate in talks about user experience design and networking opportunities. Meetups are held at AddThis headquarters in the McLean/Tyson's Corner area.",user_id:2,category_id:1},
{title:"Code Newbie DC",description:"If you're learning to code and are looking for a friendly group in the DC-metro area to code with, join CodeNewbie DC! Learning to code is so much easier when you do it with others",city:"Washington",state:'DC',category_id:1,user_id:4},
{title:"Code for NoVa",description:"We are a group of civic developers, designers, storytellers and policy leaders who are part of the Code for America Brigade network, and who contribute their skills toward using the web as a platform for local government and community service, as well as providing a skill-sharing environment to further local area tech education.",city:"Arlington",state:"VA",user_id:2,category_id:2}
]);

Comment.create([{comment:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",post_id:1},
{comment:"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",post_id:2},
{comment:"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",post_id:3},
{comment:"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",post_id:4}]);
