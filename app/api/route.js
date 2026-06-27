import { NextResponse } from "next/server";
import { servers } from "../servers";

export async function GET(request) {
    return NextResponse.json({
        servers:servers
    })
}