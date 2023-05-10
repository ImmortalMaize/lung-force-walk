import { Subtitle } from "./Subtitle";
import { useVideoConfig } from 'remotion';
import { interpolate } from 'remotion';
import { useCurrentFrame } from 'remotion';

export const Scroller: React.FC<{
  subtitles: Array<[number, string]>;
}> = ({ subtitles }) => {
  const { width } = useVideoConfig()
  const frame = useCurrentFrame()

  const scrolling = []
  for (let subtitle of subtitles) {
    scrolling.push(<Subtitle text={subtitle[1]}></Subtitle>)
  }
  const end = width*subtitles.length
  const cards = () => {
    const nums = []
    for (let num = 0; num < subtitles.length; num++) {
      nums.push(-width * num)
      if (num < subtitles.length - 1) nums.push(-width * num)
    }
    return nums
  }
  const translateX = interpolate(frame, [0, 77, 78, 211, 212, 313, 314, 442, 443, 529, 530, 634, 635, 744, 745, 849, 850, 1049, 1050, 1138, 1139, 1239, 1240, 1307, 1308, 1413, 1414], [width, width, ...cards()], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  })
  return <div style={{zIndex: 10, display: "flex", left: "0px", height: "100%", width: end, transform: `translateX(${translateX}px)`}}>{scrolling.map(subtitle => subtitle)}</div>
}