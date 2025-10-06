"use client"

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState, useEffect } from 'react';
import { usePython } from 'react-py'

export default function Playground() {
    let [loading, setLoading] = useState(true)
    let [code, setCode] = useState('print("Write Python code Here!")')
    let [hasOut, setHasOut] = useState(false)
    const [input, setInput] = useState('')

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

    const setupInterpreter = async () => {

        //         let pyodide = await loadPyodide({ indexURL: `${window.location.origin}/pyodide` });
        //         // Pyodide is now ready to use...
        //         console.log(
        //             pyodide.runPython(`
        //     import sys
        //     sys.version
        //   `),
        //         );
        // console.log("Checking if we have the interpreter in opfs...")
        // const opfsRoot = await navigator.storage.getDirectory()
        // try {
        //     console.log("deleting")
        //     await opfsRoot.removeEntry("python", {recursive: true })
        // } catch (e) {
        //     console.log(e)
        // }

        // try {
        //     const pyHandle = await opfsRoot.getDirectoryHandle("python", { create: false })
        //     console.log("Interpreter directory found!")
        //     alert("I already have the directory")
        // } catch {
        //     console.log("Missing interpreter directory!")
        //     // download files.
        //     console.log("Downloading interpreter zip!")
        //     const pyReq = await fetch("/python-3.13.0-wasi_sdk-24.zip")
        //     if (!pyReq.ok) {
        //         alert("Failed to download the interpreter, try reloading the page.")
        //         console.error(pyReq)
        //     }

        //     console.log("Download finished")
        //     const zipBuff = new Uint8Array(await pyReq.arrayBuffer())
        //     console.log(zipBuff)
        //     const pyHandle = await opfsRoot.getDirectoryHandle("python", { create: true })

        //     try {
        //         console.log("Trying to unzip    ")
        //         const decompressed = unzipSync(zipBuff);
        //         console.log(decompressed)
        //         for (const [name, data] of Object.entries(decompressed)) {
        //             console.log(name)
        //             const segments = name.split('/');
        //             let currDir = pyHandle;

        //             // Traverse or create directories
        //             for (let i = 0; i < segments.length - 1; i++) {
        //                 currDir = await currDir.getDirectoryHandle(segments[i], { create: true });
        //             }

        //             // Write file
        //             if (segments.at(-1)?.length > 0) {
        //                 console.log(`creating file ${segments.at(-1)}`)
        //                 const fileHandle = await currDir.getFileHandle(segments.at(-1), { create: true });
        //                 const writable = await fileHandle.createWritable();
        //                 await writable.write(data);
        //                 await writable.close();
        //             }
        //         }
        //     } catch (error) {
        //         alert("Failed to load the interpreter!")
        //         console.error(error)
        //         throw error
        //     }
        // }
    }

    useEffect(() => { setupInterpreter() }, [])

    return (
        <>
            {isLoading ? <p>Loading...</p> : <p>Ready!</p>}
            <form>
                <textarea
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your code here"
                />
                <input
                    type="submit"
                    value={!isRunning ? 'Run' : 'Running...'}
                    disabled={isLoading || isRunning}
                    onClick={(e) => {
                        e.preventDefault()
                        runPython(input)
                    }}
                />
            </form>
            <p>Output</p>
            <pre>
                <code>{stdout}</code>
            </pre>
            <p>Error</p>
            <pre>
                <code>{stderr}</code>
            </pre>
        </>
    )
    // return (
    //     <section className="mt-4 pt-2">
    //         <h1 className="text-5xl font-bold">Playground</h1>
    //         <div className="flex flex-col md:flex-row gap-4">
    //             <div className="w-full md:w-1/2 p-4">
    //                 {loading ? <div className="skeleton h-[50vh]"></div> :
    //                     <Editor
    //                         height="50vh"
    //                         className='mt-4 mb-8'
    //                         theme="vs-dark"
    //                         defaultLanguage="python"
    //                         defaultValue={code}
    //                         onChange={(v, e) => setCode(v)}
    //                     />
    //                 }
    //             </div>
    //             <div className="w-full md:w-1/2 mt-4  p-4 ">
    //                 <button disabled={loading} className="btn btn-primary" onClick={() => { setHasOut(true); alert(code) }}> <PlayArrow />Run</button>
    //                 <div className="mockup-code w-full">
    //                     {loading && <pre data-prefix="$"><code>Loading intrepreter...</code></pre>}
    //                     {!loading && hasOut && <pre data-prefix=">" className="text-success"><code>Cool output from the intrepreter</code></pre>}
    //                     {!loading && !hasOut && <pre data-prefix="$"><code>Run your code first!</code></pre>}
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )
}