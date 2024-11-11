import { useCurrentEditor } from "@tiptap/react";

function EditorChanges({ content, page, setContent }) {
    const { editor } = useCurrentEditor()

    if (!editor) { return null }

    const handleSave = () => {
        const newSave = editor.getJSON()
        console.log(newSave)

        // TODO: make the server that will handle this request
        fetch(`http://localhost:4000/api/editor/${page}/save`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSave)
        })
            .then(res => res.json())
            .then(data => {
                // tell user that changes were saved
                if (!data.error) {
                    // change the stored content to the newest saved state
                    setContent(newSave)

                    // tell the user changes were saved
                    window.alert("Changes saved successfully!")

                    // disable the cancel and save buttons
                    document.getElementById('cancel').disabled = true
                    document.getElementById('save').disabled = true
                } else {
                    // tell the user something went wrong
                    window.alert("Something went wrong. Your changes were not saved, but they are still in the editor.\nPlease try again, or save your work and try again later.")
                }
            })
            .catch(err => console.warn(err))

    }

    const handleCancel = () => {
        console.log('test')
        if (window.confirm("Are you sure you want to cancel your edits?")) {
            // change the content back to its last saved state
            editor.commands.setContent({
                type: content.type,
                content: content.content
            })
            // disable the cancel and save buttons
            document.getElementById('cancel').disabled = true
            document.getElementById('save').disabled = true
        } else {
            console.log('cancelled')
        }
    }

    return (
        <div className="change-buttons">
            <button onClick={handleCancel} className="bubble" id="cancel">Cancel</button>
            <button onClick={handleSave} className="bubble" id="save">Save</button>
        </div>
    )
}

export default EditorChanges