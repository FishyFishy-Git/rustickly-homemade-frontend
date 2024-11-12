//imports
import { useCurrentEditor } from '@tiptap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBold, faItalic, faUnderline,
    faEraser, faParagraph,
    faList, faListOl, faMinus,
    faRotateBackward, faRotateForward
} from '@fortawesome/free-solid-svg-icons'

function EditorMenuBar() {
    const { editor } = useCurrentEditor()

    if (!editor) { return null }

    return (
        <div className="format-bar">
            {/* undo */}
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
                className="format-button"
            >
                <FontAwesomeIcon icon={faRotateBackward} />
            </button>
            {/* redo */}
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
                className="format-button"
            >
                <FontAwesomeIcon icon={faRotateForward} />
            </button>

            <span className="vertical-break">|</span>

            {/* bold */}
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? 'format-button is-active' : 'format-button'}
            >
                <FontAwesomeIcon icon={faBold} />
            </button>
            {/* italic */}
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? 'format-button is-active' : 'format-button'}
            >
                <FontAwesomeIcon icon={faItalic} />
            </button>
            {/* underline */}
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleUnderline()
                        .run()
                }
                className={editor.isActive('underline') ? 'format-button is-active' : 'format-button'}
            >
                <FontAwesomeIcon icon={faUnderline} />
            </button>

            <span className="vertical-break">|</span>

            {/* paragraph */}
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={
                    editor.isActive('paragraph') && !(editor.isActive('bulletList')) && !(editor.isActive('orderedList'))
                    ? 
                    'format-button is-active' 
                    : 
                    'format-button'
                }
            >
                <FontAwesomeIcon icon={faParagraph} />
            </button>
            {/* heading level 1 */}
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'format-button is-active' : 'format-button'}
            >
                H1
            </button>
            {/* heading level 2 */}
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'format-button is-active' : 'format-button'}
            >
                H2
            </button>
            {/* bullet list */}
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? ('format-button is-active') : 'format-button'}
            >
                <FontAwesomeIcon icon={faList} />
            </button>
            {/* ordered list */}
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'format-button is-active' : 'format-button'}
            >
                <FontAwesomeIcon icon={faListOl} />
            </button>

            {/* horizontal line break */}
            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="format-button"
            >
                <FontAwesomeIcon icon={faMinus} />
            </button>

            <span className="vertical-break">|</span>

            {/* clear all formatting */}
            <button
                onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
                className="format-button"
            >
                <FontAwesomeIcon icon={faEraser} />
            </button>


        </div>
    )
}

export default EditorMenuBar
