import { Easing, interpolate, useCurrentFrame } from "remotion";
import { Scroller } from "./Scroller";

export const Subtitles: React.FC<{
  int: number;
}> = ({ int }) => {
  const frame = useCurrentFrame();
  const translateX = interpolate(frame, [0, 30], [-100, 0], {
    easing: Easing.bezier(.46,0,.06,1.06),
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  })
  return <div style={{
    width: '100%',
    height: "150px",
    position: 'absolute',
    bottom: '0%',
    background: '#0d2354',
    transform: `translateX(${translateX}%)`,
  }}>
    <Scroller 
      subtitles={[
        [60, "WJMS Media is proud to be the Raise Your Voice media sponsor"],
        [210, "for the American Lung Association's Lung Force Walk."],
        [300, "Join us at Pier 16 South Street Seaport, New York City"],
        [450, "on May 13th at 9:30 AM."],
        [510, "Walk with us to help us raise funding and critical awareness"],
        [630, "to end lung cancer and other chronic lung diseases."],
        [720, "to learn more about participating or making a donation,"],
        [840, "visit www.lungforce.org/lung-force"],
        [1020, "Your donation and participation will help support"],
        [1110, "the American Lung Association's research innovation,"],
        [1230, "which leads to early detection for all,"],
        [1290, "and better treatments that gives everyone a fighting chance."],
        [1410, "Small steps, bold strides."],
      ]}
    />
  </div>
}