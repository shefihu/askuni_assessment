import { store } from "@/redux/store";
import {
  AppRouterInstance,
  NavigateOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

export function buildQueryString(
  params,
  replace: (href: string, options?: NavigateOptions) => void,
  pathname: string
) {
  console.log(params);
  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key];
      if (value !== null && value !== undefined && value?.id !== 0) {
        if (Array.isArray(value)) {
          return value.length > 0
            ? `${key}=${value.map((obj) => obj.id).join(",")}`
            : "";
        } else {
          return value.length > 0 ? `${key}=${value}` : "";
        }
      }
      return "";
    })
    .filter(Boolean)
    .join("&");
  const { orderAndPerPagePath } = store.getState().programs;

  return replace(
    `${pathname}?/${orderAndPerPagePath}${
      queryString.length > 0 ? "&" : ""
    }${queryString}`
  );
}
