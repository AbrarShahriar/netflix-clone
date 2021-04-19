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
      <Row title='trending now' fetchUrl={requests.fetchTrending} />
      <Row title='top rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Romance movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='comedy movies' fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
