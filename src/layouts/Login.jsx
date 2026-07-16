import { useState } from "react";
import useSound from "use-sound";
import { ActionButton, Clock } from "#components";

const profilePhoto = "/images/profile-picture.jpg";
const SOUND_URL = "/sounds/startup.mp3";
export default function Login({ onLogin }) {
  const [unlocking, setUnlocking] = useState(false);
  const [play] = useSound(SOUND_URL, { volume: 0.3 });

  const handleUnlock = () => {
    play();
    setUnlocking(true);
    setTimeout(() => {
      setUnlocking(false);
      onLogin?.();
    }, 600);
  };

  return (
    <div className="login-bg">
      <div className="login-blob-1" />
      <div className="login-blob-2" />

      <div className="login-clock-wrap">
        <Clock />
      </div>

      <div className="login-center">
        <button
          className={`login-avatar${unlocking ? " login-avatar--pressed" : ""}`}
          onClick={handleUnlock}
        >
          <img src={profilePhoto} alt="Dili" />
        </button>
        <div className="login-name">Dili</div>
        <div className="login-hint">Click Profile to unlock</div>
      </div>

      <div className="login-actions">
        <ActionButton
          label="Shut Down"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
          }
        />
        <ActionButton
          label="Restart"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 .49-3.5" />
            </svg>
          }
        />
        <ActionButton
          label="Sleep"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
