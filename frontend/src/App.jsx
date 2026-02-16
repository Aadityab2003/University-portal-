import { useState, useEffect } from "react";
import Loader from "./components/common/SyncLoader";
import MainPage from "./components/sections/MainPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader loading={loading} /> : <MainPage />}
    </>
  );
}

export default App;
