import React, { Suspense } from 'react'
import DropDown from '@/components/DropDown'
export type Word = {
    id: number
    word: string
    examples: string
    synonym: string
    contributor_id: number
}
type Props = {}

async function getWordsByLetter(letter: string): Promise<Word[]> {
    try {
        const res = await fetch(`https://sheng-api.onrender.com/api/word?letter=${letter}`)
        return res.json()

    } catch (er) {
        throw new Error('Failed to fetch data')
    }
}


const page = async (props: Props) => {
    const fetchWords = async (letter: string) => {
        const data = await getWordsByLetter(letter)
        return data
    }
    return (
        <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
            {
                [...Array(26)].map((_, index) =>
                    <Suspense key={index} fallback={<div>Loading...</div>}>
                        <DropDown
                            triggerFetch={fetchWords(String.fromCharCode("A".charCodeAt(0) + index))}
                        >
                            {String.fromCharCode("A".charCodeAt(0) + index)}
                        </DropDown>
                    </Suspense>
                )
            }
        </main>
    )
}

export default page