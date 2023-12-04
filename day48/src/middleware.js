import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig.js";
function middlewares(request) {
  return i18nRouter(request, i18nConfig);
}

export default middlewares;
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
