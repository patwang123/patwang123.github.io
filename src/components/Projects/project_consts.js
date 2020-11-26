import pathfinding from './img/pathfinding.jpg';
import personal_website from './img/personal_website.jpg'
/*
Project Attributes
------------------------------------------------------
title       The name of the thing
ext_info    Extended description of the project
languages   Languages, frameworks, and technology used to create it (may separate later)
img         Imported image from above\
github      Github URL
test_it     Website to test out the project at, null if DNE

More to be added! (if i want to customize it more)
*/
export const PROJECT_CONSTS = [
    {
        title: 'Personal Website',
        ext_info: 'My website created using React and other tools. Of course, you\'re on here already. As of now, there is no AWS integration, but there will be soon! (after i clean up this site)',
        languages: 'Javascript, React, CSS, HTML, Bootstrap, AWS',
        img: personal_website,
        github: 'https://www.github.com/patwang123/patwang123.github.io',
        test_it: null,
    },
    {
        title: 'Pathfinding visualizer',
        ext_info: 'React app to visualize essential pathfinding algorithms such as A* and Djikstras. More to be implemented.',
        languages: 'Javascript, React, CSS, HTML',
        img: pathfinding,
        github: 'https://www.github.com/patwang123/Pathfinding-Visualizer',
        test_it: 'https://patwang123.github.io/Pathfinding-Visualizer'
    },
    {
        title: 'Sorting visualizer',
        ext_info: 'Visualizes sort algorithms',
        languages: 'Python',
        img: pathfinding,
        github: 'https://www.github.com/patwang123/Sorting-Visualizer',
        test_it: null,
    },
    
    {
        title: 'Circuit solver',
        ext_info: 'Solves circuits!',
        languages: 'Python',
        img: pathfinding,
        github: 'https://www.github.com/patwang123/Circuit-Solver',
        test_it: null,
    }
]