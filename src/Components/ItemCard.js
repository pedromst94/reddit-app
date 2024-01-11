import React from "react";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import ReactPlayer from "react-player";

export default function ItemCard (props) {
    const {title, subreddit, author, permalink,text, text_html, is_video, video, image, image_url} = props.item;
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            in={props.show}
            nodeRef={nodeRef}
            timeout={300}
            classNames='cards'
            mountOnEnter={true}
        >
            <div className="item-card" ref={nodeRef}>
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
        </CSSTransition>
    )
};