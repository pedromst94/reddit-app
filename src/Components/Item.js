import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selecItem } from "../app/itemsSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

function Item () {
    const navigate = useNavigate();
    let {item_id} = useParams();
    const item = useSelector(selecItem(item_id));
    const {title, subreddit, author, permalink,text, text_html, is_video, video, image, image_url} = item[0];


    const goHome = () => {
        navigate('/');
    }


    return (
        <>
        <div className="item-page">
        <button className="back-button" onClick={()=>goHome()}> <IoMdArrowRoundBack /></button>
            <div className="item-page-card">
                <h3 className="subreddit">{subreddit}</h3>
                    <h3 className="author">{author}</h3>
                    <h2 className="item-title">{title}</h2>
                    {(image && !is_video) && 
                    <div className="card-img-container">
                        <img src={`${image_url}`} />
                    </div>}
                    {text_html && <p className="texto_html">{text}</p>}
                    {is_video && 
                    <div className="card-video-container">
                        <ReactPlayer url={`${video.reddit_video.dash_url}`} controls className='video-player' width='100%' height='100%'/>
                    </div>}
                    <p className="enlace-reddit"><a href={'https://www.reddit.com'+permalink} target="_blank" >Ver en Reddit.com</a></p>
            </div>
        </div>
        </>
    )

}

export default Item;