import React from 'react'

const NewsItem =(props)=> {
    let {title, discription,imageUrl,url}=props;
    return (
    
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
         </div>
    )
  }


export default NewsItem
