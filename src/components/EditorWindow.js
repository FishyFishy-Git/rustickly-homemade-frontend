// imports
import './editorWindow.css'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { EditorProvider } from '@tiptap/react'
import { useEffect, useState } from 'react'
import EditorMenuBar from './EditorMenuBar'
import EditorChanges from './EditorChanges'

function EditorWindow({ page }) {
    // set variables
    const [content, setContent] = useState({})
    const [mount, setMount] = useState(false)
    const [loadError, setLoadError] = useState(false)

    // get content of page from database
    const getContent = async (contentLoader) => {
        try {
            // get content from db
            const response = await fetch(`http://localhost:4000/api/editor/${page}/load/newest`, {
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

    return (
        // load editor if content is fetch is successful
        (mount && (
            <div className="editor">
                <EditorProvider
                    slotBefore={<EditorMenuBar />}
                    slotAfter={<EditorChanges content={content} page={page} setContent={setContent} />}
                    extensions={extensions}
                    content={editorContent}
                    className={'test-class'}
                    onCreate={({ editor }) => {
                        setContent(editor.getJSON())
                        console.log('the test', editor.getJSON())
                        document.getElementById('save').disabled = true
                        document.getElementById("cancel").disabled = true
                    }}
                    onUpdate={({ editor }) => {
                        // set original and current content variables
                        const currContent = JSON.stringify(editor.getJSON().content)
                        const origContent = JSON.stringify(content.content)
                        // check if the content is the same
                        if (currContent === origContent) {
                            console.log("the same")
                            // if content is the same, disable cancel and save buttons
                            document.getElementById("save").disabled = true
                            document.getElementById("cancel").disabled = true
                        } else {
                            console.log("different")
                            // if content is different, enable cancel and save buttons
                            document.getElementById("save").disabled = false
                            document.getElementById("cancel").disabled = false
                        }
                    }}
                >
                </EditorProvider>
            </div>
        ))
        // load error message if server doesn't respond after 10 seconds
        || (loadError && (<div className="editor">Error accessing server, please refresh.</div>))
        // loading message 
        || <div className="editor">Loading editor...</div>

    )
}

export default EditorWindow
