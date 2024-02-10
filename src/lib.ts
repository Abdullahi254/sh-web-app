import { cookies } from "next/headers";
export const login = async (formData: FormData) => {
    try {
        // clearing tokens
        cookies().set('apiToken', '', { maxAge: 0 })
        cookies().set('userId', '', { maxAge: 0 })
        const rawFormData = {
            userName: formData.get("username"),
            password: formData.get("password")
        }
        console.log(rawFormData)
        const res = await fetch(`https://sheng-api.onrender.com/users/generate/collabtoken`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rawFormData)
            })
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await res.json();
        cookies().set({
            name: "apiToken",
            value: responseData.token,
            httpOnly: true
        })
        cookies().set({
            name: "userId",
            value: responseData.id,
            httpOnly: true
        })
    } catch (er) {
        console.log(er)
    }
}

export const getSession = async () => {
    try {
        const token = cookies().get("apiToken")?.value
        const res = await fetch(`https://sheng-api.onrender.com/users/checktoken?token=${token}`)
        console.log(res.status)
        if (res.status === 200 && token) {
            return token
        }
    } catch (er) {
        console.log(er)
    }
}