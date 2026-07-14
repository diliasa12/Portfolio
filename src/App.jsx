import { useState, useRef } from "react";
import gsap from "gsap";
import { Dock, Navbar, Welcome, Login } from "#layouts";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const loginRef = useRef(null);

  const handleEnterPortfolio = () => {
    // Animasi transisi keluar layar login (fade out & sedikit membesar)
    gsap.to(loginRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setShowLogin(false); // Hilangkan screen login dari DOM setelah animasi selesai
      },
    });
  };

  return (
    <main>
      {showLogin ? (
        // Layar Login macOS di awal
        <div ref={loginRef} className="fixed inset-0 z-50">
          <Login onLogin={handleEnterPortfolio} />
        </div>
      ) : (
        // Halaman Utama Portofolio Anda setelah di-klik
        <>
          <Navbar />
          <Welcome />
          <Dock />
        </>
      )}
    </main>
  );
};

export default App;
