import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    const { url, method } = await request.json(); // リクエストの内容を取得

    // fetchで外部APIにリクエスト
    return fetch(url, {
        method: method,
        headers: {
            'User-Agent': 'Mozilla/5.0',
        },
        cache: "no-store"
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res);
            }
            return res.json();
        })
        .then(data => {
            // 外部APIからのレスポンスをクライアントに返す
            return NextResponse.json(data);
        })
        .catch(error => {
            return NextResponse.json({
                error: error.message,
                details: error.data || null
            }, {
                status: error.status || 500
            });
        });
};