"use client"

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState } from 'react';

export default function Playground() {
    let [loading, setLoading] = useState(true)
    let [code, setCode] = useState('print("Write Python code Here!")')
    let [hasOut, setHasOut] = useState(false)

    return (
        <section className="mt-4 pt-2">
            <h1 className="text-5xl font-bold">Playground</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 p-4">
                {loading ? <div className="skeleton h-[50vh]"></div> :
                    <Editor
                        height="50vh"
                        className='mt-4 mb-8'
                        theme="vs-dark"
                        defaultLanguage="python"
                        defaultValue={code}
                        onChange={(v, e) => setCode(v)}
                    />
                }
                </div>
                <div className="w-full md:w-1/2 mt-4  p-4 ">
                    <button disabled={loading} className="btn btn-primary" onClick={() => { setHasOut(true); alert(code) }}> <PlayArrow />Run</button>
                    <div className="mockup-code w-full">
                        {loading && <pre data-prefix="$"><code>Loading intrepreter...</code></pre>}
                        {!loading && hasOut && <pre data-prefix=">" className="text-success"><code>Cool output from the intrepreter</code></pre>}
                        {!loading && !hasOut && <pre data-prefix="$"><code>Run your code first!</code></pre>}
                    </div>
                </div>
            </div>
        </section>
    )
}