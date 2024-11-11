//imports
import EditorWindow from "../../components/EditorWindow";
import { UserContext } from "../../contexts/AdminContext";

function AdminAbout() {
    return (
        <UserContext.Provider>
            <div className="content-container">
                <h1 className="editor-title">About Editor</h1>
                <EditorWindow page={"about"} />
            </div>
        </UserContext.Provider>
    );
}

export default AdminAbout;
