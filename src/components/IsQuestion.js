import React, { useEffect, useRef } from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";

export const IsQuestion = () => {
  const ref = useRef(null);

  const onSubmit = () => {
    
  }

  useEffect(() => {
    if (ref.current) {
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <Checkbox
        bigger
        hasFocus
        ref={ref}
        color="primary-o"
        style={{ color: "purple", fontWeight: 600 }}
        state
      >
        質問にする
      </Checkbox>
    </form>
  );
};
