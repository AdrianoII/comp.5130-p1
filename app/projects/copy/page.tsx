"use client"

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { useState } from 'react';

export default function Projects() {
    let [code, setCode] = useState('print("Write Python code Here!")')
    let [hasOut, setHasOut] = useState(false)
    return (
        <article className="font-sans flex-col items-center justify-items-center px-16">
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold">About CoPy</h1>
                <p className="text-justify wrap-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p>
            </section>
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold">Usage</h1>
                <p className="text-justify wrap-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p>
            </section>
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold">Formalization</h1>
                <p className="text-justify wrap-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p>
            </section>
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold">Playground</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2 p-4">
                        <Editor
                            height="50vh"
                            className='mt-4 mb-8'
                            theme="vs-dark"
                            defaultLanguage="python"
                            defaultValue={code}
                            onChange={(v, e) => setCode(v) }
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-4  p-4 ">
                        <button className="btn btn-primary" onClick={() => {setHasOut(true); alert(code)}}> <PlayArrow />Run</button>
                        <div className="mockup-code w-full">
                            {hasOut && <pre data-prefix=">" className="text-success"><code>Cool output from the intrepreter</code></pre>}
                            {!hasOut && <pre data-prefix="$"><code>Run your code first!</code></pre>}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}