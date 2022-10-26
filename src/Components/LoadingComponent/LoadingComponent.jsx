import React from "react";
import { Dna } from "react-loader-spinner";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default LoadingComponent;
