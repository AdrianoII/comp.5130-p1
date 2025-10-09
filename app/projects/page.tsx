"use client"
import Link from 'next/link'

export default function Projects() {
    return (
        <>
            <h1 className="text-success text-3xl lg:text-6xl w-full text-center">Projects</h1>
            <article className="prose lg:prose-lg mt-4">
                <div className="card md:card-side bg-secondary-content md:pl-6 items-center">
                    <Link href="projects/copy" className="basis-1/5 md:basis-1/3 text-center">
                        <figure>
                            <img
                                src="/python-logo.svg"
                                className="invert max-sm:max-h-1/3"
                                alt="Logo of CoPy." />
                        </figure>
                    </Link>
                    <div className="card-body basis-4/5 md:basis-2/3">
                        <h2 className="card-title text-primary">CoPy: Python + Copatterns!</h2>
                        <p className="md:text-2xl">A declarative approach to objected-oriented programming through copatterns</p>
                        <div className="card-actions justify-end">
                            <Link href="projects/copy">
                                <button className="btn btn-secondary">Read more!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <article className="prose lg:prose-lg mt-4 w-full">
                <div className="card md:card-side bg-secondary-content md:pl-6 items-center">
                    <Link href="projects/copy" className="basis-1/5 md:basis-1/3 text-center">
                        <figure>
                            <img
                                src="/ouroboros.svg"
                                className="invert h-auto w-auto max-sm:max-h-40"
                                alt="Logo of Ourobouros." />
                        </figure>
                    </Link>
                    <div className="card-body basis-4/5 md:basis-2/3">
                        <h2 className="card-title text-primary">Ourobouros: Project Website Template + Wasm!</h2>
                        <p className="md:text-2xl">This very own website.</p>
                    </div>
                </div>
            </article>
            <article className="prose lg:prose-lg mt-4 w-full">
                <div className="card md:card-side bg-secondary-content md:pl-6 items-center">
                    <Link href="projects/copy" className="basis-1/5 md:basis-1/3 text-center">
                        <figure>
                            <img
                                src="/wip.gif"
                                // className="invert"
                                alt="Construction road sign." />
                        </figure>
                    </Link>
                    <div className="card-body basis-4/5 md:basis-2/3">
                        <h2 className="card-title text-primary">🚧New project🚧</h2>
                        <p className="md:text-2xl">Somewhere down the road...</p>
                    </div>
                </div>
            </article>
        </>
    );
}
