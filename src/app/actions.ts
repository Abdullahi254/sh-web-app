'use server'

export async function addWord(token: string, formData: FormData) {
    try {
        const rawFormData = {
            word: formData.get("word"),
            meaning: formData.getAll("meaning").join(", "),
            examples: formData.getAll("example").join(", "),
            synonym: formData.getAll("synonym").join(", ")
        }
        const res = await fetch(`https://sheng-api.onrender.com/api/word?token=${token}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rawFormData)
            })
        console.log({
            ...rawFormData,
            token
        })
        return {
            message : res.status
        } 
    } catch (er) {
        throw new Error('Failed to add word')
    }

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