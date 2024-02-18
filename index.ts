import React from "react";
export default function useCtx<T>(ctx: React.Context<T>, errorMsg: string) {
  let value = React.useContext(ctx);
  if (value === undefined) throw new Error(errorMsg);
  return value;
}
