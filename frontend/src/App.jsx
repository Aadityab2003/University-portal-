import { useState, useEffect } from "react";
import Loader from "./components/SyncLoader";
import MainPage from "./pages/MainPage";

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
