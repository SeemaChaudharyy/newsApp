import React from 'react'

const card=(props)=> {
    console.log(props.data);
    return (
        <div className="cardContainer">
            {data.map((curItem, index)=> {
                return(
                    <div className="card">
                        <img />
                        <div className="cardContent">
                            
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default card