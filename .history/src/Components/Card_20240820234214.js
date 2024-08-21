import React from 'react'

const card=({data})=> {
    console.log(data);

    const readMore=(url) => {
        window.open(url)
    }
    
    return (
        <div className="cardContainer">
            {data.map((curItem, index)=> {
                return(
                    <div className="card">
                        <img src=/>
                        <div className="content">
                            <a>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={readMore(curItem.url)}>Read More</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default card 