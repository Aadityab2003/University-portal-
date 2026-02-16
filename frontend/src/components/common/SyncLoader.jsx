import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = ({ loading }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "250px" }}>
      <SyncLoader color="green" loading={loading} size={32} />
    </div>
  );
};

export default Loader;
