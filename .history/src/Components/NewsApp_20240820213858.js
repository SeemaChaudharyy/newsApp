import React from 'react'
import Card from './Components/Card'

const NewsApp = () => {
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
                <input type="text" placeholder="search News"></input>
                <button>Search</button>
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
                <Card />
            </div>
    </div>
    
  )
}

export default NewsApp
