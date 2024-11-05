import { useCurrentEditor } from "@tiptap/react";

function EditorChanges({ content }) {
    const { editor } = useCurrentEditor()

    if (!editor) { return null }

    const handleSave = () => {
        console.log(editor.getJSON())

        // TODO: make the server that will handle this request
        fetch('http://localhost:4000/api/editor/save', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editor.getJSON())
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // tell user that changes were saved
                if (!data.error) {
                    window.alert("Changes saved successfully!")
                } else {
                    window.alert("Something went wrong. Your changes were not saved, but they are still in the editor.\nPlease try again, or save your work and try again later.")
                }
            })
            .catch(err => console.warn(err))

    }

    const handleCancel = () => {
        console.log('test')
        if (window.confirm("Are you sure you want to cancel your edits?")) {

            editor.commands.setContent({
                type: content.type,
                content: content.content
            })
        } else {
            console.log('cancelled')
        }
    }

    return (<div className="change-buttons">
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>

    </div>)
}

export default EditorChanges