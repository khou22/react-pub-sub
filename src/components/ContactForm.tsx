import { useState } from "react"

export const ContactForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const [error, setError] = useState<string | null>(null)

    const onSubmit = (data: { name: string, email: string, message: string }) => {
        // Validate email address.
        if (!data.email.includes('@')) {
            setError('Invalid email address')
            return
        }

        // Send message to server.
        console.log('Sending message', data)
    }

    return (
        <form className="flex flex-col items-center justify-center border rounded-md p-4 shadow-md bg-gray-700 text-white min-w-[200px] gap-1" onSubmit={(e) => onSubmit({ name, email, message })}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

