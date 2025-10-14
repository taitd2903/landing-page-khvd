import { useEffect, useState } from "react";
import MainRoutes from "./Routers";
import { ConfigProvider } from "antd";
import "./App.css"; 

const App = () => {
  const [showButtons, setShowButtons] = useState(false);
const [showButtons1] = useState(true);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButtons(true); 
      } else {
        setShowButtons(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#14B8A6",
        },
      }}
    >
      <MainRoutes />

 
      <button
        className={`scroll-to-top ${showButtons ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>

    
      <a
        href="/contact"
        className={`chat-buttonsc ${showButtons1 ? "show" : ""}`}
      >
        <img src="/assets/chat.svg" alt="" />
      </a>
    </ConfigProvider>
  );
};

export default App;
