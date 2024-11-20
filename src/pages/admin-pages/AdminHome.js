//imports
import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import EditorWindow from "../../components/EditorWindow";

function AdminAbout() {
    const { user } = useContext(AdminContext);

    if (!user) {
        return (
            <div className="content-container">
                <div className="no-auth">Cannot access, must be logged in.</div>
            </div>
        );
    } else {
        return (
            <div className="content-container">
                <h1 className="editor-title m-plus-rounded-1c-regular">
                    Homepage Editor
                </h1>
                <EditorWindow page={"home"} />
            </div>
        );
    }
}

export default AdminAbout;
