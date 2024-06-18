import './Videop.css';

export default function Videop() {
  return (
    <div className='videoyoutube'>
      <iframe

        src="https://www.youtube.com/embed/GbFh_goNPwY?si=QLXDChgbHDkr4R7f" // video de YouTube
        title="YouTube video player"
        height={"60%"}
        width={"60%"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

  );
}
