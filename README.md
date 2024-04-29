# doggy
 
Folder Structure
React js version folder structure
image

/app
/app app folder contains the root of the app. also we did the app routing here.

/assets
/assets In assets folder, you will find the data, images and styles folder. In data folder, you will find all of data uses in this template. You will also find the image folder, where all of the images are kept on the basis of the specific page. In theme folder, you will find all of themeing uses in this template.

/components
/components folder is most importantly use, you will find some common components like:

accordion
button
cardHeader
counter
layout
modal
pagination
progressBar
sectionTitle
slider
/sections
/sections Here all the section include that’s we are used in our template like banner, about, team, roadmap, cta, FAQ etc...

/pages
/pages In pages folder you will find the all pages


Fonts
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Russo+One&display=swap

font-family: "Russo One", sans-serif;

font-family: "Inter", sans-serif;


Deploy
GamFi react version Deploy
netlify
Navigate to gamfi-react
run command:
npm run build
after the build process is done. you will find a new folder called /build

npm install netlify-cli --save-dev
netlify login
after the login process is done

run command: netlify deploy
choose +Create & configure a new site
give you site name
path to deploy: ./build
after the build process once done, run command:

netlify deploy --prod
path to deploy: ./build
for more information: How to deploy React Apps in netlify
You will find react.js app deployment complete guide here: React.js app Deployment

GamFi nextjs version Deploy
vercel
Navigate to gamfi-next
for deploying to vercel using terminal you need to install vercel-cli on your machine Read more...

npm install vercel --save-dev
run command:
vercel login
After the login process is done. run command:

vercel
after the deploy process is done. then deploy the production version

vercel --prod
For more information How to Deploy a Next.js Site with Vercel

For other hosting provider please visit next.js app deployment

GamFi nextjs static build
Navigate to gamfi-next
run command npm run export
after the export is done you will get a folder called out. Host that folder anywhere you want
to see the export build, run command: npm run start
note: images and route will not work in local server
