'use server'

export async function addWord(userId: string, formData: FormData) {
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

export async function addJoinInfo(formData: FormData) {
    try {
        const rawFormData = {
            name: formData.get("name"),
            email: formData.get("email"),
            socials: formData.get("socials"),
            message: formData.get("message")
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(rawFormData)
    } catch (er) {
        throw new Error('Failed to add information!')
    }

}