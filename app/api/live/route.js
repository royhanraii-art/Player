import { NextResponse } from "next/server";


export async function GET(request) {

    const res = await fetch("https://dami-tv.pro/papi/api/streams")
    const myData = await res.json()

    const data = myData?.streams?.map((itm)=>{
        return {
            name:itm?.category,
            title:itm?.streams[0].name,
            image:itm?.streams[0]?.poster,
            teams:itm?.streams[0].teams,
            status:itm?.streams[0]?.status,
            league:itm?.streams[0]?.league,
            sources:itm?.streams[0].sources,
            embed:itm?.streams[0].uri_name

        }
    })
    return NextResponse.json({
       data:data
    })
}