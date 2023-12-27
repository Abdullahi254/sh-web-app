import React from 'react'
import WordForm from '@/components/wordForm'
type Props = {}

const page = (props: Props) => {
    return (
        <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
            <WordForm />
        </main>
    )
}

export default page