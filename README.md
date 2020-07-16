# team-profile-generator



The Team Profile Generator is a command-line-input application run in Node that requests information from the user about members of an engineering team and generates an HTML file displaying that information. Before running the application the user must perform an npm install to install all required dependencies.

When launching the app, the user is prompted with questions to describe the first member of their team. 

The user then enters the team member's name, selects that member's role from a list of options that include "Engineer," "Intern," and "Manager. User then enters the member's ID (any string), the member's email address, and then must enter another piece of information that will differ depending on what role was selected. 

If "Engineer" was selected, the app asks the user for the team member's GitHub username; if "Intern" was selected, the member's school is requested; and if "Manager" was chosen, the user is prompted for the team member's phone number.

Here is an image example of the prompts:

![](Team generator image.jpg)

When all information on the team member has been entered, the user is given an option of not wanting to add anymore memebers. If not, an HTML file is created with cards displaying the information on all the team members entered by the user in the "outputs" folder titled "team.html."