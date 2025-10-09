"use client"

import Editor from '@monaco-editor/react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState, useEffect } from 'react';
import { usePython } from 'react-py'

export default function Playground() {
    const [input, setInput] = useState('print("Write Python code Here!")')

    const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

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
            <h1 className="text-5xl font-bold text-accent">Playground</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-9/12">
                    {isLoading ? <div className="skeleton h-[50vh]"></div> :
                        <Editor
                            height="50vh"
                            className='mt-4 mb-8 border-4 rounded border-solid border-(--color-info-content)'
                            theme="vs-dark"
                            defaultLanguage="python"
                            defaultValue={input}
                            onChange={(v, _) => setInput(v === undefined ? "" : v)}
                            
                        />
                    }
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 p-4 flex flex-col gap-4">
                    <button disabled={isLoading || isRunning} className="btn btn-primary" onClick={() => { runPython(input) }}> <PlayArrow />Run</button>
                    <div className="mockup-code w-full">
                        {isLoading && <pre data-prefix="$"><code>Loading intrepreter <span className="loading loading-dots loading-xs"></span></code></pre>}
                        {!isLoading && stderr.length > 0 && <pre data-prefix=">" className="bg-error text-error-content mx-4"><code>{stderr}</code></pre>}
                        {!isLoading && stderr.length == 0 && <pre data-prefix="" className="mx-4"><code>{stdout}</code></pre>}
                    </div>
                </div>
            </div>
        </section>
    )
}