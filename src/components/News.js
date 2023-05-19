import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
const News=(props)=>  {
    let [articles,setArticles]=useState([]);
    let [loading,setLoading]=useState(false);
    let [page,setPage]=useState(1);
    let [total,setTotal]=useState(1);
const update=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=20f8a31a0551421bbe5bd175ac76b9bf&pageSize=6`;
    let data=await fetch(url);
    let parseData=await data.json();
    // console.log(parseData);
    setArticles(parseData.articles);
    setTotal(parseData.total.totalResults);
}
 useEffect( ()=>{
    update();
},[])
const  handleNext= async ()=>{
    if(Math.ceil(total/6) < (page+1))
    {

    }
    else
    {

        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${    props.category}&apiKey=20f8a31a0551421bbe5bd175ac76b9bf&pageSize=6&page=${  page-1}`;
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        setArticles(parseData.articles);
        setPage(page+1);
    }
}
const handlePrevious= async ()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${    props.category}&apiKey=20f8a31a0551421bbe5bd175ac76b9bf&pageSize=6&page=${  page+1}`;
    let data=await fetch(url);
    let parseData=await data.json();
    // console.log(parseData);
    setArticles(parseData.articles);
    setPage(page-1);
}
  
    return (
      <div className='container my-4'>
        <h1>Latest news hedlines</h1>
        <div className='row'>
            {articles.map((element)=>{
                return <div className='col-md-4 '  key={element.url?element.url:""}>   
                  <NewsItem title={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/24/bf46e0f241971863734ee02e516c4cec1671905269986296_original.jpg?impolicy=abp_cdn&imwidth=720"} url={element.url?element.url:""}/> </div>
            })}
            
        </div>
        <div className='d-flex justify-content-between'>
        <button type="button" disabled={  page<=0} className="btn btn-dark" onClick={    handleNext}>previous</button>
        <button type="button"  className="btn btn-dark" onClick={ handlePrevious}>next</button>


        </div>
        </div>
    )
  }

News.defaultProps={
    category:'genaral'
}
News.propTypes={
category:PropTypes.string
}
export default News
