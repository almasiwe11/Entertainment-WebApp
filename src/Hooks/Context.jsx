import { createContext, useContext, useState, useEffect } from "react";

const MarkedContext = createContext();

function MarkedProvider({ children }) {
  const [bookmarked, setBookmarked] = useState(
    () => JSON.parse(localStorage.getItem("Bookmarked")) || []
  );

  useEffect(() => {
    localStorage.setItem("Bookmarked", JSON.stringify(bookmarked));
  }, [bookmarked]);

  return (
    <MarkedContext.Provider value={{ bookmarked, setBookmarked }}>
      {children}
    </MarkedContext.Provider>
  );
}

function useMarked() {
  const context = useContext(MarkedContext);
  return context;
}

export { MarkedProvider, useMarked };
