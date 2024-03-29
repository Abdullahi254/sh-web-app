import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { login } from "@/lib"

export const dynamic = 'force-dynamic'

type Props = {}

const page = (props: Props) => {
    async function loginUser(formData: FormData) {
        'use server'
        await login(formData)
        redirect("/add")
    }
    return (
        <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
            <form className="space-y-4 md:space-y-6 bg-white rounded-md p-4" action={loginUser}>
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">username</label>
                    <input name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="username" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            </form>
        </main>
    )
}

export default page