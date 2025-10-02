import { useEffect } from "react";

export default function DrumPad({ keyTrigger, url, name, playSound }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        playSound(keyTrigger, name);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [keyTrigger, name, playSound]);

  return (
    <div
      className="drum-pad"
      id={`pad-${keyTrigger}`}
      onClick={() => playSound(keyTrigger, name)}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
}
