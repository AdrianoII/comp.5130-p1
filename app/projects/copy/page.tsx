"use client"

import Playground from "@/app/components/playground"
import { PythonProvider } from 'react-py'

export default function Projects() {
    return (
        <article className="font-sans flex-col items-center justify-items-center p-4">
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold text-accent">About CoPy</h1>
                <p className="text-justify wrap-normal">
                    This work extends Python to support a declarative style of defining
                    objects through copatterns and presents a new encoding of copatterns
                    in a terse target language, with regular classes and method
                    overloading, that we named Featherweight Python.
                </p>
            </section>
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold text-accent">Usage</h1>
                <p className="text-justify wrap-normal">
                    Install the module with `pip install -e .` and run `setup_codec.py`. With the package installed, we have two entry points: a custom encoding and an import hook.
                </p>
            </section>
            <section className="mt-4 pt-2">
                <h1 className="text-5xl font-bold text-accent">Formalization</h1>
                {/* <p className="text-justify wrap-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
                </p> */}
                <img
                    src="/wip.gif"
                    // className="invert"
                    alt="Construction road sign." />
            </section>
            <PythonProvider packages={{ micropip: ['python-cowsay'] }}>
                <Playground />
            </PythonProvider>
        </article>
    )
}