import React, {useState} from "react";
import Video from "../../videos/video.mp4";
import {Button} from '../ButtonElement';
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroProperties";
import Auth from "../../utils/Auth";


const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBackground>

      <HeroContent>
        <HeroH1>Book searching simplified.</HeroH1>

        <HeroP>Sign up and start your library today!</HeroP>

        <HeroBtnWrapper>
          {Auth.isAuthenticated ? (
            <Button to="/search" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          ): (
            <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          )}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
