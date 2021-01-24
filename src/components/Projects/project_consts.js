import pathfinding from './img/pathfinding.jpg';
import personal_website from './img/personal_website.jpg'
import circuits from './img/circuits.jpg';
import sorting from './img/sorting.jpg';
import riot_api from './img/riot_api.JPG';
import neural_network from './img/neural_network.png';
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
        ext_info: 'My website created using React and other tools. Of course, you\'re on here already.',
        languages: 'Javascript, React, CSS, HTML, Bootstrap',
        img: personal_website,
        github: 'https://www.github.com/patwang123/patwang123.github.io',
        test_it: null,
    },
    {
        title: 'Pathfinding visualizer',
        ext_info: 'React app to visualize essential pathfinding algorithms such as A* and Djikstras, demonstrating the use of heuristic functions and various aspects of informed and uninformed pathfinding algorithms. More to be implemented.',
        languages: 'Javascript, React, CSS, HTML',
        img: pathfinding,
        github: 'https://www.github.com/patwang123/Pathfinding-Visualizer',
        test_it: 'https://patwang123.github.io/Pathfinding-Visualizer'
    },
    {
        title: 'Neural Network',
        ext_info: 'Neural network coded from scratch using numpy and scipy, built for image recognition on MNIST\'s handwritten 28x28 digit database but suitable for any basic ANN structure.',
        languages: 'Python',
        img: neural_network,
        github: 'https://github.com/patwang123/neural_network',
        test_it: null,
    },
    {
        title: 'Sorting visualizer',
        ext_info: 'Visualizes sort algorithms such as Quick sort, Counting sort, Heap sort, Merge sort, using the matplotlib library\'s FuncAnimation.',
        languages: 'Python',
        img: sorting,
        github: 'https://www.github.com/patwang123/Sorting-Visualizer',
        test_it: null,
    },
    {
        title: 'League Stats',
        ext_info: 'Wrapper functions for Riot Games\' API products for League of Legends (incomplete). Intended for own personal usage for League statistics.',
        languages: 'Python',
        img: riot_api,
        github: 'https://www.github.com/patwang123/LeagueStats',
        test_it: null,
    },
    {
        title: 'Circuit solver',
        ext_info: 'Simple project that solves basic circuits of resistors, voltage sources, and current sources for various attributes of each node such as power, voltage, and current. Intended for use in Berkeley\'s EECS 16A course',
        languages: 'Python',
        img: circuits,
        github: 'https://www.github.com/patwang123/Circuit-Solver',
        test_it: null,
    }
    
]