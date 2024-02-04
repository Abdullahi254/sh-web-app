// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     request.cookies.delete('apiToken')
//     request.cookies.delete('userId')
//     console.log("deleted cookies")
//     const response = NextResponse.next()
//     response.cookies.set({
//         name: "apiToken",
//         value: "opop"
//     })
//     return response
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/login/:path*',
// }