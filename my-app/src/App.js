import React from 'react';
import CoordinatorCarousel from './CoordinatorCarousel';
import Events from './Events';

const App = () => {
  const mainCoordinators = [
    
    
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://media.istockphoto.com/id/843408508/photo/photography-camera-lens-concept.jpg?s=612x612&w=0&k=20&c=-tm5TKrPDMakrT1vcOE-4Rlyj-iBVdzKuX4viFkd7Vo=',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },

  ];

  return (
    <div>
      {/* <h1>Main Coordinators</h1> */}
      {/* <CoordinatorCarousel coordinators={mainCoordinators} /> */}
      <Events />
      
    </div>
  );
};

export default App;
