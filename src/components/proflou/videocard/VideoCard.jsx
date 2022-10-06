import React, { useState } from "react";
import "./VideoCard.css";
import HoverVideoPlayer from "react-hover-video-player";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

import { BsPlayFill } from "react-icons/bs";

const VideoCard = ({data}) => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
const [Video, setVideo] = useState();

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const openModal = () => {
    setModal(!modal);
  };
  
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  
  return (
    <>
    <div className="Videowrapper absolute-center flex flex-col">
      <div className="VideosText flex flex-col ">Videos</div>

      <div className="VideoCard ">
        {data.map((item, index) => {
        
          return (
            <div
            id="Player"
            key={index}
            onClick={() => {
              setModal(true)
              setVideo(item.video)
            }}
            className="videoplayer flex absolute-center max-width"
            >
              <BsPlayFill className="playbutton flex absolute-center " />
              <HoverVideoPlayer
                videoSrc={item.video}
                pausedOverlay={
                  <img src={item.imgSrc} alt="" className="thumbnail" />
                }
                volume={0.5}
                muted={true}
                restartOnPaused
                
                />
            </div>
          );
        })}

{modal ? (
  <section className="modal__bg" onClick={(event) => {
    setModal(false)
  }}>
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={() => {
                    setModal(false)
                  }}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    Src={Video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
      </div>
    </>
  );
};

export default VideoCard;
