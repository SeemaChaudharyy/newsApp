import React from 'react'

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
            <div className="category">
                <button></button>
            </div>
    </div>
    
  )
}

export default NewsApp
