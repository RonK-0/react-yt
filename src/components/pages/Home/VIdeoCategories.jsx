import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";


const VIdeoCategories = ({leftOffset}) => {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <PiCaretRightBold />
            </div>
        );
      }
      
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <PiCaretLeftBold />
            </div>
        );
    }

    var settings = {
        dots: false,
        centerMode: false,
        infinite: false,
        speed: 250,
        // slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true,
        autoplay: false,
        // autoplaySpeed: 3500,

        // disable swipe and drag
        swipe: false,
        swipeToSlide: false,
        draggable: false,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: true,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                padding: "0px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };
      
    return (
        <div className={`video_category_parent px-8 pt-4 pb-3 z-[100] bg-dark_bg fixed top-14 ${leftOffset}`}>
            <Slider {...settings} className={`video_category`}>
                <button type='button' className="active">All</button>
                <button type='button'>Music</button>
                <button type='button'>News</button>
                <button type='button'>Live</button>
                <button type='button'>Egyption pyramids</button>
                <button type='button'>Excavations</button>
                <button type='button'>Meditation music</button>
                <button type='button'>Playlists</button>
                <button type='button'>Ancient History</button>
                <button type='button'>Astronomy</button>
                <button type='button'>Nature documentaries</button>
                <button type='button'>NBA</button>
                <button type='button'>Telenovelas</button>
                <button type='button'>Keyboards</button>
                <button type='button'>Game shows</button>
                <button type='button'>Gaming</button>
                <button type='button'>K-Pop</button>
                <button type='button'>Tourism</button>
                <button type='button'>Visual arts</button>
                <button type='button'>Comedy</button>
                <button type='button'>Anime</button>
                <button type='button'>Recently uploaded</button>
                <button type='button'>Baking</button>
                <button type='button'>Cooking</button>
                <button type='button'>Kitchen</button>
                <button type='button'>Medicine</button>
                <button type='button'>Breaking News</button>
                <button type='button'>Art</button>
            </Slider>
        </div>
    )
}

export default VIdeoCategories