import { VideoHTMLAttributes } from "react";
import { VideoBackground } from "./styles";
import BgVideo from '../../assets/videos/bg.mp4';

type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

export function Banner({ children, ...props }: VideoProps) {
  return (
    <VideoBackground autoPlay loop muted  {...props}>
      <source src={BgVideo} type="video/mp4" />
    </VideoBackground>
  )
}
