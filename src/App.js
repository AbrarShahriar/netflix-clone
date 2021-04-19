import './App.css';
import React from 'react'
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* Banner  */}
      <Banner />

      {/* Rows */}
      <Row title='netflix originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='trending now' fetchUrl={requests.fetchTrending} isLargeRow={false}/>
      <Row title='top rated' fetchUrl={requests.fetchTopRated} isLargeRow={false}/>
      <Row title='Romance movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow={false}/>
      <Row title='comedy movies' fetchUrl={requests.fetchComedyMovies} isLargeRow={false}/>
    </div>
  );
}

export default App;
