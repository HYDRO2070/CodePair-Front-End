import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import "../Style_Sheet/Coding_editor.css"
import { EditorState } from '@codemirror/state'
import { EditorView, basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { cpp } from '@codemirror/lang-cpp'
import {python} from '@codemirror/lang-python'
import { autocompletion } from '@codemirror/autocomplete'


const Coding_editor = ({code,setcode,lang,langid}) => {

    const editorRef = useRef(null);
    // const [code, setcode] = useState('// Start coding here......')

    // const updateListener = EditorView.updateListener.of((update) => {
    //     if (update.changes) {
    //         setcode(update.state.doc.toString());
    //     }
    // })

    useEffect(() => {
        // const langExtension = cpp();
        const updateListener = EditorView.updateListener.of((update) => {
            if (update.changes) {
                setcode(update.state.doc.toString());
            }
        })
        const startState = EditorState.create({
            doc: code,
            extensions: [
                basicSetup,
                (lang === "c++"?cpp():(lang === "python"?python():javascript())),
                oneDark,
                updateListener,
                autocompletion()
            ],
        });
        const view = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        return () => {
            view.destroy();
        };
    },[]);

  return (
    <>
    <div ref={editorRef} className='codeedtior' />
    {/* <p>{code}</p> */}
    
    </>
  )}

export default Coding_editor