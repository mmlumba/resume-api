# resume-api
A repo that returns a JSON response of my resume (abridged version) from a GET request.

## How to Use:
The home page is a rendered view of information from the `resume.json` file. You can also print the homepage to get a printer friendly version of the resume.

You can also use the `curl` command to view information from the `resume.json` file programmatically: 
```
curl http://marian-resume.herokuapp.com/resume
```

## View this locally:
1. Clone repo
2. `npm install` in home directory of repo
3. `npm start` to view webpage
4. Visit `http://localhost:3000/resume`