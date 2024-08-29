"use client";

import useSound from "use-sound";

function themeBtnSfx() {
  const [playOn] = useSound("/switch-on.mp3");
  const [playOff] = useSound("/switch-off.mp3");
  return [playOn, playOff];
}
export default themeBtnSfx;
