import React from 'react'

const card=({data})=> {
    console.log(data);

    const readMore=(url) => {
        window.open(url)
    }
    
    return (
        <div className="cardContainer">
            {data.map((curItem, index)=> {
                if(!curItem.urlToImage)
                return(
                    <div className="card">
                        <img src={curItem.urlToImage} />
                        <div className="content">
                            <a className="title" onClick={readMore(curItem.url)}>{curItem.title}</a>

                            <p>{curItem.description}</p>
                            <button onClick={()=> window.open(curItem.url)}>Read More</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default card 