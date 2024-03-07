import React from 'react';
import CoordinatorCarousel from './CoordinatorCarousel';

const App = () => {
  const mainCoordinators = [
    {
      name: 'Daknya Bam',
      imgSrc: '/media/coordinators/daknya.jpg',
      roles: ['Designer', 'UI/UX', 'Frontend', 'Coordinator']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: '/media/coordinators/pursottam.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    // Add other coordinators here
  ];

  return (
    <div>
      <h1>Main Coordinators</h1>
      <CoordinatorCarousel coordinators={mainCoordinators} />
    </div>
  );
};

export default App;
