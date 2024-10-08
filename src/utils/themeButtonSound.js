"use client";

import useSound from "use-sound";

export default function sounds() {
  const [playOn] = useSound("/sfx/switch_on.mp3");
  const [playOff] = useSound("/sfx/switch_off.mp3");
  // const [playOn] = useSound("/sfx/ThemeBtn_sound_on.mp3");
  // const [playOff] = useSound("/sfx/ThemeBtn_sound_off.mp3");
  return {
    playOn,
    playOff,
  };
}
