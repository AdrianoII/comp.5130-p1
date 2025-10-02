"use client"

export default function CV() {
    return (
        <section className="h-screen flex flex-col gap-8">
                <article className="prose text-secondary prose-md max-w-none text-center w-full text-xl lg:text-3xl">
                    <p>📃 You can find my CV below, but also <a href="https://github.com/AdrianoII/adrianocorbelinoii.com/blob/main/public/Resume_EN.pdf">here</a>.</p>
                </article>
            <div className="h-4/5">
                <iframe src={`https://docs.google.com/gview?url=${"https://www.adrianocorbelinoii.com/Resume_EN.pdf"}&embedded=true`}
                    className="w-full h-full" />
            </div>
        </section>
    );
}
