import { useState } from "react";
import DrumPad from "./DrumPad";
import "./index.css";

const drumPads = [
  { key: "Q", name: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "W", name: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
  { key: "E", name: "Hi-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  { key: "A", name: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "S", name: "Open Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "D", name: "Closed Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
  { key: "Z", name: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
  { key: "X", name: "Boom", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
  { key: "C", name: "Chord", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
  // Extra pads
  { key: "R", name: "Tom-Low", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
  { key: "F", name: "Tom-Mid", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "V", name: "Cymbal", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
];

export default function App() {
  const [display, setDisplay] = useState("Play a Sound 🎵");

  const playSound = (key, name) => {
    const audio = document.getElementById(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setDisplay(name);
    const pad = document.getElementById(`pad-${key}`);
    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 150);
  };

  return (
    <div id="drum-machine">
      <h1 className="title">🎛️ Drum Machine</h1>
      <div id="display">{display}</div>
      <div className="pad-grid">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.key}
            keyTrigger={pad.key}
            url={pad.url}
            name={pad.name}
            playSound={playSound}
          />
        ))}
      </div>
      <p className="hint">Press keys (Q,W,E,A,S,D,Z,X,C,R,F,V) or click pads</p>
    </div>
  );
}
