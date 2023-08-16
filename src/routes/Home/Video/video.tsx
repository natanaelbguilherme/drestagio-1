import './video.css'
import Video1 from './asstesVideo/video1.mp4'
import Video2 from './asstesVideo/video2.mp4'
import Video3 from './asstesVideo/video3.mp4'
import React, { useState, useRef } from 'react';


export function Video () {
 
  const [clickedVideo, setClickedVideo] = useState<string | null>(null); // Definindo o tipo como string
  const [popupVisible, setPopupVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Adicionando a referência
  const handleVideoClick = (videoSrc: string) => { // Definindo o tipo como string
    setClickedVideo(videoSrc);
    setPopupVisible(true);
  };
  const handleClosePopup = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pausar o vídeo ao fechar o popup
      videoRef.current.currentTime = 0; // Reiniciar o vídeo para o início
    }
    setPopupVisible(false);
  };


  return (
    <section>
      <div className="section-head VideoSection ">
          <h4><span>Depoimentos de </span> Nossos clientes</h4>
          {/* <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
            cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores

          </p> */}
        </div>


        <div className="container-video">
      <div className="video-container">
          <div className="video"><video src={Video1} onClick={() => handleVideoClick(Video1)}></video></div>
          <div className="video"><video src={Video2} onClick={() => handleVideoClick(Video2)}></video></div>
          <div className="video"><video src={Video3} onClick={() => handleVideoClick(Video3)} ></video></div>
       
          </div>


          <div className={`popup-video ${popupVisible ? 'active' : ''}`}>
  <span onClick={handleClosePopup}>&times;</span>
  {clickedVideo && <video ref={videoRef} src={clickedVideo}  autoPlay controls></video>}
</div>
        </div>
      
    </section>
  )
}

  {/* <script>
          documet.querySelectorAll('.video-container video').forEach(vid=>{
              vid.onClick =()=>{
                documet.querySelector('.popup-video').style.display='block';
                documet.querySelector('.popup-video video').src = vid.getAttribute('src')
              }
          });
           documet.querySelector('.popup-video span').onClick =()=>{
             documet.querySelector('.popup-video').style.display='block';
           }
        </script> */}