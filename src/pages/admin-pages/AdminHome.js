//imports
import EditorWindow from "../../components/EditorWindow";
import { UserContext } from "../../contexts/AdminContext";

function AdminAbout() {
    return (
        <UserContext>
            <div className="content-container">
                <h1 className="editor-title">Homepage Editor</h1>
                <EditorWindow page={"home"} />
            </div>
        </UserContext>
    );
}

export default AdminAbout;
