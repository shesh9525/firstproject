git init

Add your new file to the staging area. Replace <filename> with the actual name of your file.


git add <filename>

If you want to add all new files, you can use:

git add .

Commit the Changes:
Commit the staged changes with a meaningful commit message.


git commit -m "Add new file: <filename>"

Create a GitHub Repository:
If you haven't created a GitHub repository for your project, go to GitHub and create a new repository.

Copy the Repository URL:
Copy the HTTPS or SSH URL of your GitHub repository.

Add a Remote to Your Local Repository:
In the terminal, add a remote named "origin" to your local repository using the GitHub repository URL.


git remote add origin <repository-url>
Replace <repository-url> with the URL you copied from GitHub.

Push to GitHub:
Push your changes to GitHub. If this is your first time pushing, you can use the -u flag to set up tracking.


git push -u origin master

