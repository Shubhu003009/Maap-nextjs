"use client";

import useSound from "use-sound";

export default function sounds() {
  const [playOn] = useSound("/switch_on.mp3");
  const [playOff] = useSound("/switch_off.mp3");
  const [ankhri_sanse] = useSound("/bv/ankhri_sanse.mp3");
  const [Arehh] = useSound("/bv/Arehh.ogg");
  const [bright_future] = useSound("/bv/bright_future.ogg");
  const [chatt_pe] = useSound("/bv/chatt_pe.mp3");
  const [deep] = useSound("/bv/deep.mp3");
  const [gyan] = useSound("/bv/gyan.mp3");
  const [Heylooo] = useSound("/bv/Heylooo.mp3");
  const [keso_ho] = useSound("/bv/kese_ho.mp3");
  const [bhaiya] = useSound("/bv/bhaiya.mp3");
  return {
    playOn,
    playOff,
    ankhri_sanse,
    Arehh,
    bright_future,
    chatt_pe,
    deep,
    gyan,
    Heylooo,
    keso_ho,
    bhaiya,
  };
}
