import React, { memo } from "react";

import { Notfound } from "./styles";

const NotFound: React.FC = () => {
  return (
    <Notfound>
      <h1>404 not found</h1>
    </Notfound>
  );
};

export default memo(NotFound);
