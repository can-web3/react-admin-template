import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { useState } from 'react';

export interface EditorProps {
  title: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Editor({
  title,
  name,

}: EditorProps) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div className="flex flex-col gap-1 mb-4">
        <label htmlFor={name}>{title}:</label>
        <DraftEditor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="rdw-editor-wrapper"
            toolbarClassName="rdw-editor-toolbar"
            editorClassName="rdw-editor-body"
            placeholder="Buraya yazın..."       
            />
        </div>
    );
}
