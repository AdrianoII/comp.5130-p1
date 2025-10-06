"use client"

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState, useEffect } from 'react';
import { usePython } from 'react-py'

export default function Playground() {
    let [loading, setLoading] = useState(true)
    const [input, setInput] = useState('print("Write Python code Here!")')

    const { runPython, stdout, stderr, isLoading, isRunning } = usePython()
    // await pyodide.loadPackage("pyodide-http")

    useEffect(() => {
        navigator.serviceWorker
            .register('/react-py-sw.js')
            .then((registration) =>
                console.log(
                    'Service Worker registration successful with scope: ',
                    registration.scope
                )
            )
            .catch((err) => console.log('Service Worker registration failed: ', err))
    }, [])
    return (
        <section className="mt-4 pt-2 w-full">
            <h1 className="text-5xl font-bold">Playground</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 p-4">
                    {isLoading ? <div className="skeleton h-[50vh]"></div> :
                        <Editor
                            height="50vh"
                            className='mt-4 mb-8'
                            theme="vs-dark"
                            defaultLanguage="python"
                            defaultValue={input}
                            onChange={(v, e) => setInput(v)}
                        />
                    }
                </div>
                <div className="w-full md:w-1/2 mt-4  p-4 ">
                    <button disabled={isLoading || isRunning} className="btn btn-primary" onClick={() => { runPython(input) }}> <PlayArrow />Run</button>
                    <div className="mockup-code w-full">
                        {isLoading && <pre data-prefix="$"><code>Loading intrepreter <span className="loading loading-dots loading-xs"></span></code></pre>}
                        {!isLoading && stderr.length > 0 && <pre data-prefix=">" className="bg-warning text-warning-content"><code>{stderr}</code></pre>}
                        {!isLoading && stderr.length == 0 && <pre data-prefix=">"><code>{stdout}</code></pre>}
                    </div>
                </div>
            </div>
        </section>
    )
}