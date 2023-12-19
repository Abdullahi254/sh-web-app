import React, { Suspense } from 'react'
import DropDown from '@/components/DropDown'
import WordsList from '@/components/WordsList'
export type Word = {
    id: number
    meaning: string
    word: string
    examples: string
    synonym: string
    contributor_id: number
}
type Props = {}




const page = (props: Props) => {
    return (
        <main className="flex flex-col space-y-4 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
            {
                [...Array(26)].map((_, index) =>
                    <DropDown
                        key={String.fromCharCode("A".charCodeAt(0) + index)}
                        letter={String.fromCharCode("A".charCodeAt(0) + index)}
                    >
                        < Suspense fallback={< div > Loading...</div >}>
                            <WordsList letter={String.fromCharCode("A".charCodeAt(0) + index)} />
                        </Suspense>
                    </DropDown>
                )
            }
        </main>
    )
}

export default page
