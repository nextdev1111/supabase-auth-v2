import {createMiddlewareSupabaseClient} from '@supabase/auth-helpers-nextjs'

import {NextResponse, type NextRequest} from 'next/server'

const middleware =async(req: NextRequest) => {
    const res = NextResponse.next()

    const supabase = createMiddlewareSupabaseClient({req, res});

    const {data: {session}, error} = await supabase.auth.getSession()

    if(!session && req.nextUrl.pathname.endsWith('/profile')){
        const redirectUrl = req.nextUrl.clone()

        redirectUrl.pathname = '/auth'
        redirectUrl.searchParams.set(`redirectFrom`, req.nextUrl.pathname)
        return NextResponse.redirect(redirectUrl)
    }

    return NextResponse.next()

}
export default middleware