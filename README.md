<img align="right" width="150" src="/public/dist/rocket.png">

# Career Assistant

##### http://jobsearch.jungiang.com/

This repo contains the Job Search Assistant Application. Designed for mobile, the app serves as a resource organization hub for those looking for a new job opportunity. Add new job prospects to your tracking list to efficiently organize the current status of your job applications. Make updates to your current job prospects by adding new contacts to reach out to or with notes to know the status history of each application. 

### Setup Instructions

1. Fork this repo
1. Clone your forked copy of this repo
   - `git clone https://github.com/[Your Username]/jobsearch.git`
1. Change directory into the newly cloned repo
   - `cd jobsearch`
1. Install dependencies 
   - `npm install`
1. Use MAMP or similar program to start Apache and MySQL servers
   - Set root directory of server to the `public` folder of this project
   - Set Apache port to `3000`
   - Use phpMyAdmin (or similar) to create a database
1. Start dev server
   - `npm start`
1. Open a browser and navigate to `localhost:3000`

### Bundle For Deployment

1. Run webpack to bundle files
   - `npm run bundle`

**NOTE:** *After bundling and placing on a web server. The `public` folder should be the web root*

### Project Documentation

1. [Agile Pitch](https://docs.google.com/document/d/e/2PACX-1vQkGSIN65SSXQ2DLK8ITkFelyJgFBVmG4j3Hn0ONlRHH8q7k5uOA-1IUu4LPiA4BHBcVksr9v9KcthK/pub)
1. [Kanban Document](https://docs.google.com/spreadsheets/d/e/2PACX-1vT565TL3N1OJWZuv5htqmv9r2YcKhChBrNqjRPxft197piKbK-beVAGZMF4VoySeS0M11V9guqSQ6CV/pubhtml)
1. [Figma](https://www.figma.com/file/dvj3fCuC3GOwMYzSU16nXKcK/Job-Search-Assistant?node-id=148%3A0)