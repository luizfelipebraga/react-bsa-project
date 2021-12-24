import { VideoHTMLAttributes } from "react";
import { VideoBackground, Container } from "./styles";

type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export function Banner({...props}: VideoProps) {
  return (
    <VideoBackground id="bgVideo" controls preload="true" autoPlay loop muted  {...props}>
      <source src="../../assets/videos/bg.mp4" type="video/mp4"/>
      <Container>
        <span>Olá</span>
        <span>Olá</span>
        <span>Olá</span>
      </Container>
    </VideoBackground>
  )
}
