import React from 'react'
import { Word } from '@/app/dictionary/page';
import Link from 'next/link';
type Props = {
    letter: string,
}

async function getWordsByLetter(letter: string): Promise<Word[]> {
    try {
        const res = await fetch(`https://sheng-api.onrender.com/api/word?letter=${letter}`)
        return res.json()

    } catch (er) {
        throw new Error('Failed to fetch data')
    }
}
// server component that fetches a list of words by letter
const LetterCard = async ({ letter }: Props) => {
    const words = await getWordsByLetter(letter)
    return (
        <>
            {words && words?.map((val) => <Link key={val.id} href={`/search/${val.word}`} className='h-fit'>
                <span className='font-serif hover:bg-sky-100 hover:underline'>{val.word}</span>
            </Link>)}
        </>
    )
}

export default LetterCard