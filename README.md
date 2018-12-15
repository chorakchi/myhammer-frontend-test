# 👦🔨 myhammer-frontend-test

>##  MyHammer Frontend coding challenge 
 
>Create a responsive two-panel overview page in Angular. The attached jobs Json-File should be loaded with an HTTP-Request. Inside of the first panel, render a list of all the “active” jobs. Once the user clicks on a job item from the list, show detailed information of the selected job on the second panel. The code should be tested with Karma and/or Protractor. Feel free to decide which information needs to be displayed in job item and which in job detail view. Using libraries like Bootstrap 4 or Angular Material is a plus. 
 
>## Handing in your results 
	
>We care about high quality and well tested code that is easily maintainable, please make sure that the code you submit is working and tested as this is more important than finishing the whole task. When you hand in your code please describe in a short README how it should be executed.  In case the code is not completely finished: please describe the open tasks that still need to be done and a rough estimation on how long you would need to finish them. Please share your project on github or similar public repository, if you do not have an account send us a compressed file through https://wetransfer.com/ or any other sharing service.
 
 
___
## Countius deployment CI/CD

This Angular project integrated on github repository and
Deploed Application to Netlify
in below address : 
>### 🔗 https://myhammer.netlify.com
><img alt="React.js" src="https://flaviocopes.com/netlify/banner.png" height="40" />

>Netlify is an excellent platform for building, deploying, and managing web applications. It supports automated deployment using GitHub webhooks and also provides some advanced features such as custom domains and HTTPS all for free. Deploying a Static Site to Netlify is a breeze. Although it does support running Angular JS applications, there are a couple gotchas in the deployment process that I had to wrangle together from various blog posts in order to get things to work.


### Setup

```sh
    $ git clone https://github.com/chorakchi/myhammer-frontend-test.git
    $ cd myhammer-frontend-test
    # install dependencies
    $ npm i           
    # serve develpement production
    $ ng serve        
```

### Build

```sh
    # local deployment
    $ ng bulid for            
    # deploy as production
    $ ng bulid --prod  

    # adress of APIs set in environments > 
    # environment.ts & 
    # environment.prod.ts   
```

### Test

```sh
    # run unit tests
    $ ng test            
    # run end to end test
    $ ng e2e             
```

# Components

1.
2. 

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


