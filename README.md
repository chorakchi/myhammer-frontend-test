# 👦🔨 myhammer-frontend-test <br/> <br/>
<br/>

>##  MyHammer Frontend coding challenge 
 
>Create a responsive two-panel overview page in Angular. The attached jobs Json-File should be loaded with an HTTP-Request. Inside of the first panel, render a list of all the “active” jobs. Once the user clicks on a job item from the list, show detailed information of the selected job on the second panel. The code should be tested with Karma and/or Protractor. Feel free to decide which information needs to be displayed in job item and which in job detail view. Using libraries like Bootstrap 4 or Angular Material is a plus. 
 
>## Handing in your results 
	
>We care about high quality and well tested code that is easily maintainable, please make sure that the code you submit is working and tested as this is more important than finishing the whole task. When you hand in your code please describe in a short README how it should be executed.  In case the code is not completely finished: please describe the open tasks that still need to be done and a rough estimation on how long you would need to finish them. Please share your project on github or similar public repository, if you do not have an account send us a compressed file through https://wetransfer.com/ or any other sharing service.
 
 
___
<br/>


## Counties deployment CI/CD

This Angular Application integrated on GitHub repository and
deployed  to Netlify
in below address : 
>### 🔗 https://myhammer.netlify.com 
><img alt="React.js" src="https://flaviocopes.com/netlify/banner.png" height="40" />

>Netlify is an excellent platform for building, deploying, and managing web applications. It supports automated deployment using GitHub webhooks and also provides some advanced features such as custom domains and HTTPS all for free. Deploying a Static Site to Netlify is a breeze. Although it does support running Angular JS applications, there are a couple gotchas in the deployment process that I had to wrangle together from various blog posts in order to get things to work.


### 📋 Setup

```sh
    $ git clone https://github.com/chorakchi/myhammer-frontend-test.git
    $ cd myhammer-frontend-test
    # install dependencies
    $ npm i           
    # serve develpement production
    $ ng serve        
```

### 🏗️ Build

```sh
    # local deployment
    $ ng build           
    # deploy as production
    $ ng build --prod  

    # address of APIs set in environments > 
    # environment.ts & 
    # environment.prod.ts   
```

### ✔️ Test

```sh
    # run unit tests
    $ ng test            
    # run end to end test
    $ ng e2e             
```

#  Components & Some of files

```sh
├── src
│   ├── assets
│   │   └── jobs.json                                    # mockData Api "get list Jobs"
│   ├── app                                              # mcomponets, test html and styls is in this directory"
│   │   ├── app.component.ts
│   │   ├── app.component.sass
│   │   ├── app.component.spec.ts
│   │   ├── app.component.html
│   │   ├── app.module.ts
│   │   ├── dialogOverviewDialog.component.ts
│   │   ├── dialogOverviewDialog.component.sass
│   │   ├── dialogOverviewDialog.component.spec.ts
│   │   └── dialog-overview-dialog.component.html
│   ├── environments
│   │   ├── environments.prod.ts                          # eenvironment variable for deployment
│   │   └── environments.ts                               # environment variable for local development"
│   ├── main.ts
│   ├── material-module.ts                                # all material design module imported into this file"
│   └── index.html                                        # Main Html Page, material design CSS linked in this place               
│   .   
│   .
│   .
``` 

<br/> 
<br/> 
<br/> 


>## 👇 Documentation & resource


>https://material.angular.io

>https://angular.io/guide/rx-library

>https://angular.io/guide/testing

>https://karma-runner.github.io

>https://www.protractortest.org

>https://angular.io/ 🐵


