import React from "react";
import Image from "next/image";

const GoogleLogo = ({ classes }: { classes: string }) => {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
      alt="Google Icon"
      width={24}
      height={24}
      className={classes}
    />
  );
};

export default GoogleLogo;
