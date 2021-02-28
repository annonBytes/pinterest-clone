import React, {useState, props} from 'react'
import './App.css'
import Header from '../src/components/Header'
import Board from './components/Board'
import unsplash from './api/unsplash'

function App() {

const [pins, setPins] = useState([])

const getImages = (term) => {
  return unsplash.get("https://api.unsplash.com/search/photos",{
    params: {
      query: term
    }
  });
}

const onSearchSubmit = (term) => {
  console.log('on search', term)
  getImages(term).then((res) => {
    let results = res.data.results

    let newPins = [
      ...results,
      ...pins,
    ]

    newPins.sort(function(a,b){
      return 0.5 - Math.random()
    })
    setPins(newPins)
  })
}

// onSearchSubmit('dog');

  return (
    <div className="app">
      {/* Header */}
      <Header onSubmit={onSearchSubmit} />
      {/* Board */}
      <Board pins={pins} />
    </div>
  );
}

export default App;
