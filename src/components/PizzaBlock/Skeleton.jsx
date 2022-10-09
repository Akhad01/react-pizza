import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#e3e3e3"
      foregroundColor="#dad7d7"
    >
      <rect x="0" y="429" rx="10" ry="10" width="95" height="27" />
      <rect x="122" y="420" rx="30" ry="30" width="153" height="44" />
      <rect x="0" y="280" rx="10" ry="10" width="280" height="25" />
      <rect x="0" y="316" rx="10" ry="10" width="280" height="88" />
      <circle cx="130" cy="130" r="130" />
    </ContentLoader>
  );
};

export default Skeleton;
