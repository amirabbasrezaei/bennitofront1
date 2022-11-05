import { NextURL } from "next/dist/server/web/next-url";
import type { NextRequest } from "next/server";
import { NextResponse  } from "next/server";
import client from "../Apollo/apollo-client";
import { GetUserDigitalStacksDocument } from "../graphql/generated/graphql";



export async function checkVerified(req: NextRequest) {
  console.log("bennitoRefToken=" + req.cookies.get("bennitoRefToken"))
  let response = NextResponse.next()
  try {
    const { error, data } = await client.query({
      query: GetUserDigitalStacksDocument,
      fetchPolicy: "network-only",
      context: {
        headers: {
          cookie:  req.cookies.get("bennitoRefToken") ? "bennitoRefToken=" + req.cookies.get("bennitoRefToken") : null
        },
      },
    })

    if (
      !data?.GetUserDigitalStacks?.length &&
      !req.url.endsWith("/sellerpanel")
    ) {
      return NextResponse.redirect(new NextURL("/sellerpanel", req.url));
    }
  } catch (error) {
    console.log(error);
    return NextResponse.rewrite(new URL("/auth/signin", req.url));
  }
  response
  
}
