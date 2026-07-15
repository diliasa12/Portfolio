import { useState, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome, Login } from "#layouts";
import { Terminal } from "#windows";

gsap.registerPlugin(Draggable);
const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const loginRef = useRef(null);

  const handleEnterPortfolio = () => {
    gsap.to(loginRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setShowLogin(false);
      },
    });
  };

  return (
    <main>
      {showLogin ? (
        <div ref={loginRef} className="fixed inset-0 z-50">
          <Login onLogin={handleEnterPortfolio} />
        </div>
      ) : (
        <>
          <Navbar />
          <Welcome />
          <Dock />
          <Terminal />
        </>
      )}
    </main>
  );
};

export default App;
