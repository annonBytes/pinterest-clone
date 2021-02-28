import React, {useState, useEffect} from 'react'
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

const getDefaultPins = () => {
   let promises = []
   let pinData = []

   let pins = ['Tokyo', 'ocean', 'Berlin', 'Dogs', 'cats']
   pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then(
          (res) => {
            let results = res.data.results;

            pinData = pinData.concat(results);

            pinData.sort(function(a,b){
              return 0.5 - Math.random()
            })
          })
      )
   })
   Promise.all(promises).then(() => {
     setPins(pinData)
   })
}

useEffect(() => {
  
  getDefaultPins()
}, [])

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