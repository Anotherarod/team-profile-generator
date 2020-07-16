const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];

function AppPrompt() {

    function addManager() {
      console.log("Please build your team");
      inquirer.prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your manager's name?",
          
        },
        {
          type: "input",
          name: "managerId",
          message: "What is your manager's id?",
         
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's email?",
          
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is your manager's office number?",
         
        }