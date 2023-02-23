import ClipLoader from "react-spinners/ClipLoader";

const loadingBox = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const BBsLoding = () => {
  return (
    <div style={loadingBox}>
      <ClipLoader size={200} />
    </div>
  );
};

export default BBsLoding;
