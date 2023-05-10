import { Audio } from "remotion";
import { Subtitles } from "./Components/Subtitles";
import audio from "./public/audio.mp3";

export const MyComposition = () => {

	return <>
		<Audio src={audio}></Audio>
		<Subtitles int={0} />
	</>;
};
