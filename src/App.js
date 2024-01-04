import React, { useState } from 'react';
import './App.css';

import Header from './Pages/Header/Header';
function App() {
  const [state, setState] = useState({
    Questions: [
      {
        id: 1,
        heading: 'Celebrate Local & Seasonal',
        question: 'Do you know where your key ingredients are sourced from?',
        img: 'https://valrhona-survey-main.vercel.app/assets/img/Valrhona-Question-1-Option-1.jpg',
        imgText:'Knowing where your ingredients come from is central to offering customers more transparency and traceability over what they’re eating, something consumers increasingly crave.',
        options: {
          firstDDy: 'yes',
          firstDDs: 'Down to farm level for the majority of ingredients',
          secondDDy: 'yes',
          secondDDs: 'Down to regional level for the majority of ingredients',
          thirdDDy: 'yes',
          thirdDDs: 'Down to country level for the majority of ingredients ',
          fourthDDy: 'No',
          fourthDDs: '\xA0'
        },
      },
      {
        id: 2,
        heading: 'Local & Seasonal',
        question: 'Does your menu change to promote seasonal produce?',
        img: 'https://valrhona-survey-main.vercel.app/assets/img/Valrhona-Question-4-Option-1.jpg',
        imgText:'Whilst there may be no globally agreed upon definition of what ‘local’ is, Food Goods defines local as produce that is made, raised or grown within your business’ designated geographical region, not just purchased there. This might mean sourcing produce from your town, city, region or state depending on the size of the country.',
        options: {
          firstDDy: 'yes',
          firstDDs: 'We change our whole menu at least four times a year to reflect seasonal changes for the majority of ingredients',
          secondDDy: 'yes',
          secondDDs: 'We change some of the menu at least four times a year to promote seasonal changes regional level for the majority of ingredients',
          thirdDDy: 'yes',
          thirdDDs: 'Down to country level for the majority of ingredients ',
          fourthDDy: 'No',
          fourthDDs: 'Our menu doesnot change'
        },
      },
      {
        id: 3,
        heading: 'Support Global Farmers',
        question: 'Do you source certified palm and soy? e.g. RSPO or RTRS certified',
        img: 'https://valrhona-survey-main.vercel.app/assets/img/Valrhona-Question-3-Option-1.jpg',
        imgText:'Serving and promoting seasonal fresh food, with shorter food miles, often has a smaller environmental footprint. At the same time, it also provides a valuable investment in the local economy, helps establish and maintain local food resilience and protects local food heritage. ',
        options: {
          firstDDy: 'yes',
          firstDDs: 'As standalone products e.g. palm oil',
          secondDDy: 'yes',
          secondDDs: 'For standalone products and ingredients within products e.g. plant based butter which includes palm oil',
          thirdDDy: 'yes',
          thirdDDs: 'We donot source any palm or soy products, including as an ingredient in products',
          fourthDDy: 'No',
          fourthDDs: '\xA0'
        },
      },
      {
        id: 4,
        heading: 'Support Biodiversity & Animal Welfare',
        question: 'Which standard best represents the dairy and eggs that you source?',
        img: 'https://valrhona-survey-main.vercel.app/assets/img/Valrhona-Question-2-Option-1.jpg',
        imgText:'Fruit features heavily in sweet gastronomy. We all know that fruit is very much seasonal produce but suppliers accessing the global economy can create the impression that all fruits are available all year round. As a result, it can become second nature for chefs to source ingredients out of their local growing season, sometimes from far away.',
        options: {
          firstDDy: 'yes',
          firstDDs: 'Organic or biodynamic certification',
          secondDDy: 'yes',
          secondDDs: 'Other sustainability or welfare certifications',
          thirdDDy: 'yes',
          thirdDDs: 'Uncertified but informed of standards in place',
          fourthDDy: 'No',
          fourthDDs: '\xA0'
        },
      }
    ],
    Answer: []
  });
  return (
    <>
        <Header state={state}/>
    </>
  );
}

export default App;
