"use client"

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export default function Projects() {
    return (
        <article>
            <section>
                <h1 className="text-5xl font-bold">About CoPy</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p>
            </section>
            <section>
                <h1 className="text-5xl font-bold">Usage</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p>
            </section>
            <section>
                <h1 className="text-5xl font-bold">Formalization</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p>
            </section>
            <section>
                <h1 className="text-5xl font-bold">Playground</h1>
                <Editor
                    height="40vh"
                    theme="vs-dark"
                    defaultLanguage="python"
                    defaultValue='print("Hello Copy!")'
                />
            </section>
        </article>
    )
}