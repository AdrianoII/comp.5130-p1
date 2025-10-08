"use client"

export default function CV() {
    return (
        <section className="flex flex-col gap-4">
            <h1 className="prose text-accent prose-md max-w-none text-center w-full text-xl lg:text-3xl basis-1/5">📃 You can find my CV in the reader below, but also <a href="https://github.com/AdrianoII/adrianocorbelinoii.com/blob/main/public/Resume_EN.pdf">here</a>.</h1>
            <div className="basis-4/5">
                <iframe src={`https://docs.google.com/gview?url=${"https://www.adrianocorbelinoii.com/Resume_EN.pdf"}&embedded=true`}
                    className="w-full min-h-[70vh]" />
            </div>
        </section>
    );
}
