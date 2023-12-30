'use server'

export async function addWord(userId: string, formData: FormData){
    const rawFormData = {
        word: formData.get("word"),
        meaningList: formData.getAll("meaning"),
        exampleList: formData.getAll("example"),
        synonymList: formData.getAll("synonym")
    }
    const id = parseInt(userId)
    console.log({
        ...rawFormData,
        id
    })
}