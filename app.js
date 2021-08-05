const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/android", function(req, res){
  var description =  "I started android development in the first year of my college. I developed some very basic applications in this domain. I believe that android development is very important since majority of users serve internet on their mobile phones. And for any organization it is very important of have an android application since it has higher audience than web based applications. My android based application projects include some very basic applications, which I build while learning android development.";
  var projects = [["/images/projects/courtcounter.jpg", "Court Counter", "This is a simple application used to keep the track of scores in basketball game", ""], ["/images/projects/justjava.jpg", "Just Java", "This is a coffee ordering application, it sends an email with the order to the shop.", ""], ["/images/projects/lcmhcf.jpg", "LCM and HCF calculator", "This is an application to calculate HCF and LCM. Developed as a personal project.", "https://github.com/ranjananubhav7/LCMcalc"], ["/images/projects/miwok.jpg", "Miwok app", "This app help the user to learn fundamental word in mewok language.", "https://github.com/ranjananubhav7/ud839_Miwok"]];
  res.render("skill", {DESCRIPTION: description, PROJECTS: projects});
});
app.get("/web", function(req, res){
  var description = "I started learning Web based application development in the middle of my second year and since then it has been one of my top skills. With time my interest in this domain kept increasing with my learnings. I use MERN-stack for development. This domain has always fascinated me. I have developed many individual as well as group project. I keep learning new skills everyday.";
  var projects = [["/images/projects/bookadda.PNG", "Book Adda", "This react application helps user to search books with keywords.", "https://github.com/ranjananubhav7/Book-Adda"], ["/images/projects/DocCon.PNG", "Consult Doctor", "Simple website to get doctor's appointment with email.", "https://fierce-brook-06462.herokuapp.com/"], ["/images/projects/learnocity.PNG", "Learnocity", "Online course providing website", "https://immense-river-17915.herokuapp.com/"], ["/images/projects/newsletter.PNG", "Newsletter app", "This a simple newsletter app, to provide information with email to the user", "https://github.com/ranjananubhav7/Newsletter"], ["/images/projects/secret.PNG", "Secret", "This app uses mongoDB, it is an app to share secrets anonymously", "https://github.com/ranjananubhav7/Secrets/tree/master"], ["/images/projects/tempfinder.PNG", "Temp Finder", "A web based application to get the latest data of the weather for any city.", "https://github.com/ranjananubhav7/Weather-Report"]];
  res.render("skill", {DESCRIPTION: description, PROJECTS: projects});
});
app.get("/coding", function(req, res){
  var description =  "I have been doing competetive programming since the very first year of my college. I started with HackerRank and after a year I moved to codechef and leetcode. I believe that competetive programming is very important to make your development skills more efficient. It has helped me to opimize my codes for better results.";
  var projects = [["/images/projects/codechef.png", "CodeChef", "I am currently 2 star coder at codechef.", "https://www.codechef.com/users/ranjananubhav7"], ["/images/projects/hackerrank.jpg", "HackerRank", "5 star in java, problem solving, python, sql", "https://www.hackerrank.com/Anubhav_AR"], ["/images/projects/leetcode.png", "Leet Code", "I have been practising DSA in this site", "https://leetcode.com/progress/"]];
  res.render("skill", {DESCRIPTION: description, PROJECTS: projects});
});
app.get("/python", function(req, res){
  var description =  "I started learning python as an extra language for my competetive programming but with time I started using it in development as well. Python offer many packages for various domains, which makes it one of the most popular languages. I started python development with developing games such as pong game, snake game, turtle game etc. I also developed some applications for day to day use such as password manager, birthday wisher etc.";
  var projects = [["/images/projects/birthday.jpg", "Birthday Wisher", "This an application made to send birthday wishes via email from a csv file.", "https://github.com/ranjananubhav7/Birthday-wisher-challenge-day-32/tree/master"], ["/images/projects/password.PNG", "Password Manager", "This is an application to store and create secure password.", "https://github.com/ranjananubhav7/Password-manager"], ["images/projects/guessStates.PNG", "Guess Indian States", "This application helps you to learn names of all the Indian states", "https://github.com/ranjananubhav7/Guess-Indian-States"]];
  res.render("skill", {DESCRIPTION: description, PROJECTS: projects});
});

app.listen(3000, function(){
  console.log("app is listening on port 3000");
});
