import React from 'react'

const card=({data})=> {
    console.log(data);

    const readMore=(url) => {
        window.open(url)
    }
    
    return (
        <div className="cardContainer">
            {data.map((curItem, index)=> {
                if(!curItem.urlToImage){
                    return null
                }
                else{

                }
                
            })
            }
            
        </div>
    )
}

export default card 