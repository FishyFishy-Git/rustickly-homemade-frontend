//imports
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import EditorWindow from "../../components/EditorWindow";

function AdminAbout() {
    const { user } = useContext(AdminContext);

    if (!user) {
        return "Cannot access, must be signed in.";
    } else {
        return (
            <div className="content-container">
                <h1 className="editor-title">About Editor</h1>
                <EditorWindow page={"about"} />
            </div>
        );
    }
}

export default AdminAbout;
