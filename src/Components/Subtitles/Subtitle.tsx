import { loadFont } from '@remotion/google-fonts/Poppins';
import { useVideoConfig } from 'remotion';

const { fontFamily } = loadFont();

export const Subtitle: React.FC<{
  text: string;
}> = ({ text }) => {
  const width = useVideoConfig().width;

  return <div style={{
    width: width,
    height: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px",
    zIndex: 10,
    color: "#2dc6d6",
    fontSize: "2.4rem",
    textAlign: "center",
    fontFamily,
  }}>{ text }</div>
}