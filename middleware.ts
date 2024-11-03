import {NextResponse} from "next/server";
import type {NextRequest} from "next/server"

export const config = {
    matcher: [
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};


export function middleware(request: NextRequest) {

    const hostname = request.headers
        .get("host")!

    if (hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
        return NextResponse.rewrite(new URL(`/app`, request.url));
    }

    return NextResponse.rewrite(new URL(`/${hostname}`, request.url));
}