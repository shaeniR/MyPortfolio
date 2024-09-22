import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Library Management System',
        description: 'A full-stack application consisting of both a web and mobile app, accessible to admins and patrons.I contributed to the project by implementing the notification system, which includes features for adding announcements, notifying users about new books handling reservations and overdue notices, and sending push notifications using Firebase.',
        tools: ['React', 'Tailwind CSS', 'React', 'Flutter', 'MSSQL','ASP.NET', 'Firebase'],
        //role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-CommerceE Front-End Development',
        description: 'Currently developing the front end of an e-commerce website using React. Working on features like product listings, search, and responsive design to enhance my skills in front-end development and React.',
        tools: ['React', 'Tailwind CSS'],
        //role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: ' Automated Prawn Farming Managment System',
        description: 'Arduino project that allows to automate the prawn farm. It automates the full process of changing the water, spreading the medicine for the prawns and harvesting the prawns.',
        tools: ['Arduino', 'PH Sensor', 'Nema17', 'DC Motor', 'Water Level Sensors', 'Ultrasonic sensors'],
        code: '',
       // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },