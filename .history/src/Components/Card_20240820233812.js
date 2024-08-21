mport React from 'react'

const card=({data})=> {
    console.log(data);
    
    return (
        <div className="cardContainer">
            {data.map((curItem, index)=> {
                return(
                    <div className="card">
                        <img />
                        <div className="cardContent">
                            <a>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button> onClickRead More</button>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default card 