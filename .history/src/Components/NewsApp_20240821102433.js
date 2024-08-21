import React, { useState } from 'react'
import  {useEffect } from 'react'
import Card from './Card'

const NewsApp = () => {
    const [search, setSearch]= useState("india")
    const [newsData, setNewsData]= useState(null)
    const API_KEY= "4dddf6e0f8364b8cb341f5d787dacec8";

  const getData= async() =>{
    const response= await fetch(https://newsapi.org/v2/everything?q=india&from=2024-07-21&sortBy=publishedAt&apiKey=${API_KEY});
    const jsonData= await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
  }
  useEffect(()=> {
    getData()
  }, [])

  const handleInput=(e)=> {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
  const userInput=(e)=> {
     setSearch(e.target.value)
  }

  return (
    <div>
      <nav>
        <div>
            <h1>Latest News</h1>
            </div>
            <ul>
                <a href="all news">AllNews</a>
                <a href="trending news">TrendingNews</a>
            </ul>
            <div className="searchBar">
                <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
                <button onClick={getData}>Search</button>
            </div>
            </nav>
            <div>
                <p className="head">Stay Updated</p>
            </div>
            <div className="category">
                <button onClick= {userInput} value="sports">Sports</button>
                <button onClick= {userInput} value="Politics">Politics</button>
                <button onClick= {userInput} value="Entertainment">Entertainment</button>
                <button onClick= {userInput} value="Health">Health</button>
                <button onClick= {userInput} value="Fitness">Fitness</button>
            </div>
            <div>
                {newsData? <Card data={newsData} />: null}
                
            </div>           
    </div>    
  )
}

export default NewsApp