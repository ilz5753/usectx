import React from "react";
import isNull from "lodash.isnull";
export default function useCtx<T>(
  ctx: React.Context<T | null>,
  errorMsg: string
) {
  let value = React.useContext(ctx);
  if (isNull(value)) throw new Error(errorMsg);
  return value;
}
