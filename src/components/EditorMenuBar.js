//imports
import { useCurrentEditor } from '@tiptap/react'

function EditorMenuBar() {
    const { editor } = useCurrentEditor()

    if (!editor) { return null }

    return (
        <div className="button-group">
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
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                Bold
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
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                Italic
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
                className={editor.isActive('underline') ? 'is-active' : ''}
            >
                Underline
            </button>
            {/* clear marks (bold italic strike) */}
            <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
                Clear Formatting
            </button>
            {/* paragraph */}
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                Paragraph
            </button>
            {/* heading level 1 */}
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                H1
            </button>
            {/* heading level 2 */}
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                H2
            </button>
            {/* bullet list */}
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                Bullet list
            </button>
            {/* ordered list */}
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                Ordered list
            </button>

            {/* horizonal line break */}
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                Horizontal rule
            </button>
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
            >
                Undo
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
            >
                Redo
            </button>

        </div>
    )
}

export default EditorMenuBar
