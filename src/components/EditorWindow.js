// imports
import './editorWindow.css'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { EditorProvider } from '@tiptap/react'
import { useEffect, useState } from 'react'
import EditorMenuBar from './EditorMenuBar'
import EditorChanges from './EditorChanges'

function EditorWindow() {
    // set variables
    const [content, setContent] = useState({})
    const [mount, setMount] = useState(false)
    const [loadError, setLoadError] = useState(false)

    const getContent = async (contentLoader) => {
        try {
            // get content from db
            const response = await fetch('http://localhost:4000/api/editor/load/newest', {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
            // convert response to json
            const result = await response.json()
            // check if there was an error
            if (result.error) {
                // load the error message
                setLoadError(true)
                // clear timeout function
                clearTimeout(contentLoader)
            } else {
                // set the content value with result
                setContent(result)
                // allow the editor to mount to page
                setMount(true)
                // clear timeout function
                clearTimeout(contentLoader)
            }
        } catch (err) {
            console.warn(err)
            setLoadError(true)
        }
    }

    useEffect(() => {
        // set a 10 second timeout for the fetch request
        const contentLoader = setTimeout(() => {
            // load error message
            setLoadError(true)
        }, 10000)
        // fetch editor content
        getContent(contentLoader)
    }, []);

    // configure extensions for the editor instance
    const extensions = [
        StarterKit.configure({
            bulletList: { keepMarks: true },
            orderedList: { keepMarks: true },
        }),
        Underline
    ]

    const editorContent = content

    // const SaveChanges = () => {
    //     const { editor } = useCurrentEditor()

    //     if (!editor) { return null }

    //     const handleSave = () => {
    //         console.log(editor.getJSON())

    //         // TODO: make the server that will handle this request
    //         fetch('http://localhost:4000/api/editor/save', {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(editor.getJSON())
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //             .catch(err => console.warn(err))

    //     }

    //     return (
    //         <button onClick={handleSave}>Save</button>
    //     )
    // }

    return (
        // load editor if content is fetch is successful
        (mount && (
            <div className="editor">
                <EditorProvider
                    slotBefore={<EditorMenuBar />}
                    slotAfter={<EditorChanges content={content} className="change-buttons" />}
                    extensions={extensions}
                    content={editorContent}
                // onUpdate={({editor}) => {
                //     const currContent = editor.getJSON()
                //     if (currContent.content === content.content) {
                //         console.log("the same")
                //     } else {
                //         console.log('content', content.content)
                //         console.log('currContent', currContent.content)
                //         console.log("different")
                //     }
                // }}
                >
                </EditorProvider>
            </div>
        ))
        // load error message if server doesn't respond after 10 seconds
        || (loadError && (<div className="card">Error accessing server, please refresh.</div>))
        // loading message 
        || <div className="card">Loading editor...</div>

    )
}

export default EditorWindow
