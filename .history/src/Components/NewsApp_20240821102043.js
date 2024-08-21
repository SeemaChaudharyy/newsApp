import React, { useState, useEffect } from 'react';
import Card from './Card';

const NewsApp = () => {
  const [search, setSearch] = useState('india');
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '4dddf6e0f8364b8cb341f5d787dacec8E';

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=$&from=2024-07-21&sortBy=publishedAt&apiKey=${API_KEY}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]); // Dependency array includes 'search' so it updates whenever 'search' changes

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Latest News</h1>
        </div>
        <ul>
          <li><a href="#all-news">All News</a></li>
          <li><a href="#trending-news">Trending News</a></li>
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
        <button onClick={() => handleCategoryClick('sports')}>Sports</button>
        <button onClick={() => handleCategoryClick('Politics')}>Politics</button>
        <button onClick={() => handleCategoryClick('Entertainment')}>Entertainment</button>
        <button onClick={() => handleCategoryClick('Health')}>Health</button>
        <button onClick={() => handleCategoryClick('Fitness')}>Fitness</button>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {newsData && !loading ? <Card data={newsData} /> : null}
      </div>
    </div>
  );
};

export default NewsApp;
