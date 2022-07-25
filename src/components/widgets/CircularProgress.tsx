// import React from "react";
// import CircularProgress from "@material-ui/core/CircularProgress";
import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <span
      style={{
        float : "right"
      }}
    >
      {/* <CircularProgress /> */}
      <Loader />
    </span>
  );
}
// export const LadingCustom = () => {
//   return (
//     <div className='mainLoading'>
//       <p> loading ... </p>
//     </div>
//   );
// };

const colors = {
  primary: "#FF8300"
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  padding: 40px;
  border: 10px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 50px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;