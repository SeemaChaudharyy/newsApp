import React from 'react'
//import Card from './Components/Card'

const NewsApp = () => {
    const [search, setSearch]= useState("india")
   const API_KEY= "4dddf6e0f8364b8cb341f5d787dacec8";

  const getData= async() =>{
    const response= await fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey= ${API_KEY}`)
    const jsonData= response.json()
    console.log(jsonData);
  }

  return (
    <div>
      <nav>
        <div>
            <h1>Latest News</h1>
            </div>
            <ul>
                <a>All news</a>
                <a>Trending News</a>
            </ul>
            <div className="searchBar">
                <input type="text" placeholder="search News" onChange={handle}></input>
                <button onClick={getData}>Search</button>
            </div>
            </nav>
            <div>
                <p className="head">Stay Updated</p>
            </div>
            <div className="category">
                <button>Sports</button>
                <button>Politics</button>
                <button>Entertainment</button>
                <button>Health</button>
                <button>Fitness</button>
            </div>
            
    </div>
    
  )
}

export default NewsApp
