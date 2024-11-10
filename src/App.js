// import React, {Component} from 'react';
// import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

// import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import Pathfinder from "./pathfinderComponents/pathfinder";
// import Home from "./homeComponents/home";
// import Seive from "./primeComponents/seive";
// import Sort from "./sortComponents/sort";
// import Queen from "./queenComponents/queen";
// import ConvexHull from "./convexHullComponents/convexHull";
// import BinarySearch from "./binarySearchComponent/binarySearch";
// import RecursiveSort from "./recursiveSortComponents/recursiveSort";
// import Puzzle from "./15puzzleComponents/puzzle";

// import TuringMachine from "./Turing Machine/turingMachine";
// import Graph from "./Graph/graph";

// import Loading from './homeComponents/Loading';  // Import Loading component
// import './App.css'; 


// class App extends Component {
    
//     constructor() {
//         super();
//     }
    
//     componentDidMount() {
//         // console.log(window.innerHeight,"  ",window.innerWidth);
//     }
    

//     render() {
//         return (
          
//             <Router basename='/'>
//             <Route render={({ location }) => (
//             <div>
//                 <Switch>
//                     <Route path='/pathfinder'  component={Pathfinder}/>
//                     <Route path='/prime' component={Seive}/>
//                     <Route path='/sort' component={Sort}/>
//                     <Route path='/nqueen' component={Queen}/>
//                     <Route path='/convexhull' component={ConvexHull}/>
//                     <Route path='/binarysearch' component={BinarySearch}/>
//                     <Route path='/recursivesort' component={RecursiveSort}/>
//                     <Route path='/turing' component={TuringMachine}/>
//                     <Route path='/15puzzle' component={Puzzle}/>
//                     <Route path='/graph' component={Graph}/>
//                     <Route path='/' component={Home}/>

//                 </Switch>
//                 </div>
//           )} />

//           {/* Loading Screen that appears while Auth0 is processing */}
//           <Route
//             render={({ location }) => (
//               <div className="loading-overlay">
//                 <Loading />
//               </div>
//             )}
//           />
//             </Router>
            
//         );
//     }
// }

// export default App;


import React, { Component } from 'react';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queen from "./queenComponents/queen";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Puzzle from "./15puzzleComponents/puzzle";
import TuringMachine from "./Turing Machine/turingMachine";
import Graph from "./Graph/graph";

import Loading from './homeComponents/Loading';  // Import Loading component
import './App.css';

const AppContent = () => {
  const { isLoading } = useAuth0(); // Get isLoading state from Auth0

  return (
    <>
      {/* Show the loading screen only when the app is in loading state */}
      {isLoading ? (
        <div className="loading-overlay">
          <Loading />
        </div>
      ) : (
        <Switch>
          <Route path='/pathfinder' component={Pathfinder} />
          <Route path='/prime' component={Seive} />
          <Route path='/sort' component={Sort} />
          <Route path='/nqueen' component={Queen} />
          <Route path='/convexhull' component={ConvexHull} />
          <Route path='/binarysearch' component={BinarySearch} />
          <Route path='/recursivesort' component={RecursiveSort} />
          <Route path='/turing' component={TuringMachine} />
          <Route path='/15puzzle' component={Puzzle} />
          <Route path='/graph' component={Graph} />
          <Route path='/' component={Home} />
        </Switch>
      )}
    </>
  );
};

class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    // console.log(window.innerHeight,"  ",window.innerWidth);
  }

  render() {
    return (
      <Router basename='/'>
        <Route render={({ location }) => (
          <div>
            <AppContent /> {/* Render the main app content */}
          </div>
        )} />
      </Router>
    );
  }
}

export default App;

