import { generateHTML } from '@tiptap/core'
import { StarterKit } from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser'

function ClientContent({ page }) {
    const [content, setContent] = useState("")

    useEffect(() => {
        (async () => {
            try {
                // get content from db
                const response = await fetch(`http://localhost:4000/api/editor/${page}/load/newest`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })

                // convert response to json
                const result = await response.json()

                // generate html
                setContent(generateHTML({
                    type: result.type,
                    content: result.content
                }, [StarterKit, Underline]
                ))
            } catch (err) {
                console.warn(err)
            }
        })();
    })

    return (
        parse(content)
    )
}

export default ClientContent
