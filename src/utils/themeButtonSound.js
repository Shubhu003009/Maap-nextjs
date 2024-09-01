"use client";

import useSound from "use-sound";

export default function sounds() {
  const [playOn] = useSound("/switch_on.mp3");
  const [playOff] = useSound("/switch_off.mp3");
  return {
    playOn,
    playOff,
  };
}
