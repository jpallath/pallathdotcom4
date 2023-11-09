export const experience = [
  {
    position: "Lead Frontend Engineer / Full Stack Engineer",
    company: "Prologue",
    location: "New York, NY",
    dates: "March 2023 - Present",
    experience: [
      {
        bullet:
          "As the Lead Front End Engineer, I brought to life all of the designs and ideas for the initial application to life. Prologue is a React web application that allows users to purchase and sell Bitcoins (BTC) and watch their investments. I've provided experiences:",
        additionalBullets: [
          "to watch the growth of a user's account, which required a websocket (utilizing Socket.io) of the latest price of BTC",
          "a view of the history of BTC against a line chart with view options for day, week, month, year to date, and year",
          "a view of all of the transactions a user has done on the platform",
          "developed a modal system that lets a user Buy, Sell, Send, and Receive Bitcoin, Deposit funds into the account, and withdraw earnings back into a user's bank.",
        ],
      },
      {
        bullet:
          "Styling was all done through SCSS without any Component Libraries.",
      },
      {
        bullet:
          "As a Full Stack Engineer. I provided the initial steps of building the websocket for a user to see the current value of BTC. I took time discussing how the Backend and Frontend should work together. We, as a team, decided to build the application using Next.js and AWS to offer cloud services. Everything is hosted on an EC2 instance with Cognito/Amplify offering user login services.",
      },
    ],
  },
  {
    position: "Senior Software Engineer",
    company: "Mayfair fka Paperclip",
    location: "San Francisco, California",
    dates: "June 2022 - March 2023",
    experience: [
      {
        bullet:
          "Project Artemis, app.getmayfair.com, our new product allows companies to make cash accounts through Stripe's API that lets them generate interest on their unused cash.",
        additionalBullets: [
          "Organized and built out the plan of introducing 'Account Math' to our backend, built with Mongo and Nestjs. I had to determine valid conditions where money accrued an earning and when a company can ultimately withdraw that earning. Along with building the endpoints that allow us to regenerate the earnings for a company when a new APY has to be introduced, I also built cron jobs that run daily to determine a company's current account balance and their new earnings. Introduced multiple new collections, services, and modules into our application.",
        ],
      },
      {
        bullet:
          "Project Apollo, Paperclip's first major product was a dashboard for companies to understand their current finances by seeing their Net Cash Balance, Net Cash Flow, and Months of Runway. As a part of the engineering team, it was my responsibility to improve this dashboard with better quality of information and new features.",
        additionalBullets: [
          "Outlined, delegated tasks, and built the Transactions and Top Accounts features. Both required new endpoints, built with Nodejs and Koa, that had to make sense of our data, managed by Mongo, and presented in the frontend through React with a component library written with Chakra. The Transactions feature would show all of the inbound and outbound transactions and transfers a company has made, this table could then be filtered and sorted to make more sense of the data. Top Accounts allowed a company to see what bank accounts or credit cards were making the most transactions for the company.",
        ],
      },
    ],
  },
  {
    position: "Software Engineer",
    company: "Peacock / NBC-Universal",
    location: "New York, New York",
    dates: "January 2020 - June 2022",
    experience: [
      {
        bullet:
          "Development of the Live Event Manager (LEM). An Angular based Full Stack application that associates live video encoding with metadata generated and fetched through various AWS Lambda functions connected by a Node.js back-end.",
      },
      {
        bullet:
          "Built out a series of cloud functions that fetches HLS/DASH files made up of 60FPS and 30FPS data, and then generates a unique file for each FPS type that is then stored in S3.",
      },
      {
        bullet:
          "Solved on demand issues, such as indexing and amassing metadata information through Python; found problem assets to reupload through AWS S3/CLI since a broken asset would impact millions of viewers.",
      },
      {
        bullet:
          "Devised different solutions to improve workflow and analysis for both the Video on Demand and the Live Video teams, such as a mass asset deletion tool, an asset reprocessing tool, and asset validation and verification tool as a Member of the Video Engineering Tools Team.",
      },
      {
        bullet:
          "Developed a full stack application written with a node express backend wired to Python commands, this allowed non-technical users to utilize a React user interface to complete the same task the video engineers did through a series of AWS CLI commands to reprocess assets in S3. This gave back hours taken away from the engineers to work on",
      },
    ],
  },
  {
    position: "Frontend Developer",
    company: "American Society of Composers Authors and Publishers (ASCAP)",
    location: "New York, New York",
    dates: "July 2018 - December 2019",
    experience: [
      {
        bullet:
          "Helped revolutionize the front end stack from Backbone.js to Vue for the company, ultimately designing the flow of applications the team built from scratch to production. Helped build a Shared Component Library, so that the front end team could speak clearly with the design team, plus developers were able to utilize commonly used components across applications the team built.",
      },
      {
        bullet:
          "Directed the development of the ASCAP Repertory Search. This was the most public facing service that our million plus customers were able to use to determine music rights. ascap.com/repertory",
      },
    ],
  },
  {
    position: "Web Developer",
    company: "Digital Remedy",
    location: "New York, New York",
    dates: "October 2017 - January 2018",
    experience: [
      {
        bullet:
          "Maintained the company’s various WordPress sites utilizing HTML/CSS and JavaScript/jQuery. Worked on eight websites with three unique WordPress themes.",
      },
    ],
  },
  {
    position: "Web Developer / IT Manager",
    company: "Mediaplanet",
    location: "New York, New York",
    dates: "October 2015 - October 2017",
    experience: [
      {
        bullet:
          "Managed design for all content hubs with a proprietary Content Management System built with PHP. ",
      },
      {
        bullet:
          "Overhauled the front end experience of all six of the content hubs through CSS and Javascript to make it easier for users to navigate pages.",
      },
      {
        bullet:
          "Served as IT Manager for the New York and Toronto offices. Revised and rewired the network solutions of both offices, along with keeping computers and softwares updated for colleagues’ specific needs.",
      },
    ],
  },
];
