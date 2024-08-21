
import React, { useState } from 'react'
import Card from './Card'

const NewsApp = () => {
    const [search, setSearch]= useState("india")
    const [newsData, setNewsData]= useState(null)
    const API_KEY= "4dddf6e0f8364b8cb341f5d787dacec8";

  const getData= async() =>{
    const response= await fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey= ${API_KEY}`)
    const jsonData= response.json()
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
  }
  const handleInput=(e)=> {
    console.log(e.target.value);
    setSearch(e.target.value)
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
                <input type="text" placeholder="search News" onChange={handleInput} />
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
            <div>
                {newsData? }
                
            </div>           
    </div>    
  )
}

export default NewsApp
