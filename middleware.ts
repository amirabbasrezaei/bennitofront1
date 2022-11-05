import { NextURL } from "next/dist/server/web/next-url";
import type { NextRequest } from "next/server";
import { NextResponse as res } from "next/server";
import { checkVerified } from "./middlewareFn/sellerpanelMiddleware";

export function middleware(req: NextRequest) {
  // if (req.nextUrl.pathname.startsWith("/sellerpanel")) {
  //   return checkVerified(req);
  // }
}
