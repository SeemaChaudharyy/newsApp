import React from 'react';

const Card = ({ data = [] }) => { // Default to an empty array if data is not provided
    console.log(data);

    // Check if data is an array
    if (!Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <div className="cardContainer">
            {data.length > 0 ? (
                data.map((curItem, index) => (
                    <div className="card" key={index}>
                        <img src={curItem.imageUrl} alt={curItem.title || 'Image'} />
                        <div className="content">
                            <a href={curItem.link || '#'}>{curItem.title || 'No Title'}</a>
                            <p>{curItem.description || 'No Description'}</p>
                            <button onClick={()=> curItem.url}>Read More</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>No items to display</div>
            )}
        </div>
    );
}

export default Card;
