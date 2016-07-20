Home.destroy_all
Job.destroy_all
Meetup.destroy_all

Home.create([{name:"meetups"},
{name:"jobs"}]);


Job.create([{title:"Ruby on Rails Developer",description:"Are you looking for a great opportunity where you can showcase your skills and talents? We are seeking a talented Ruby on Rails developer to join our Solution Street team! We are a company comprised of software developers and the partners of Solution Street are developers too! Our team is rapidly growing and now is the time to join us during this exciting adventure! We offer consulting services throughout the Northern Virginia/Washington, DC area and our home office is located in Herndon, Virginia."},
{title:"Web Developer",description:"This position is for an experienced web developer to work in a fast-paced, Agile environment. The web developer is responsible for participating in the full agile application development life cycle for new development design, construction and testing of Java applications, Web Services (SOAP and REST), and reusable components to support overall project objectives. The web developer will also participate in peer reviews and unit testing, and must be adaptable to different responsibilities, possess strong communications skills, and have a passion for constantly improving the individual and team effectiveness."},
{title:"Young Apprentice",description:"Learn the Ways of the Sith. Wear cool armor. Develop an impressive voice. Warning: due to previous bad experiences, we have a strict anti-nepotism policy."},
{title:"Web Designer",description:"BoatU.S., a part of GEICO and the Berkshire Hathaway family of companies, is looking for a Web Designer at our Headquarters in Alexandria, VA. The hours will be Monday – Friday, 8 AM – 5 PM or 9 AM – 6 PM.



Meetup.create([{title:"DC Perl Mongers",description:"Let's get together to talk about Perl! We usually have a formal topic or two, and then open question/answer discussion time. ALL levels and areas of interest are welcome!"},
{title:"Arlington Ruby",description:"This group was created to share knowledge about Ruby and educate anyone interested."},
{title:"NoVa UX",description:"Are you passionate about creating great online and mobile user experiences? If youre based in Northern Virginia or the DC metro area come join us to participate in talks about user experience design and networking opportunities. Meetups are held at AddThis headquarters in the McLean/Tyson']s Corner area."},
{title:"Code Newbie DC",description:"If you're learning to code and are looking for a friendly group in the DC-metro area to code with, join CodeNewbie DC! Learning to code is so much easier when you do it with others"},
{title:"Code for NoVa",description:"We are a group of civic developers, designers, storytellers and policy leaders who are part of the Code for America Brigade network, and who contribute their skills toward using the web as a platform for local government and community service, as well as providing a skill-sharing environment to further local area tech education."}
]);
