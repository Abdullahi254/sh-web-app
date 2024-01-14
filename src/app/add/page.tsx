import React from 'react'
import WordForm from '@/components/wordForm'
import { cookies } from 'next/headers'
import RedirectComponent from '@/components/RedirectComponent'
import { addWord } from '../actions'

export const dynamic = 'force-dynamic'

type Props = {}

const page = async (props: Props) => {
    try {
        const token = cookies().get("apiToken")?.value
        const userId = cookies().get("userId")?.value
        const res = await fetch(`https://sheng-api.onrender.com/users/checktoken?token=${token}`)
        console.log(res.status)
        if (res.status === 200 && token) {
            return (
                <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
                    <WordForm addWord={addWord} token={token} />
                </main>
            )
        } else {
            return (
                <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
                    <RedirectComponent />
                </main>
            )
        }
    } catch (er) {
        console.log(er)
    }

}

export default page