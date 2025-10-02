"use client"
import Image from "next/image";
import Link from 'next/link'

export default function Projects() {
    return (
        <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 mt-12">
            <article>
                <div className="card lg:card-side bg-base-200 shadow-sm">
                    <Link href="projects/copy">
                        <figure>
                            <img
                                className="invert"
                                src="/python-logo.svg"
                                alt="Logo of CoPy."
                                // width={200}
                                // height={200}
                                // priority
                                // fill
                            />
                        </figure>
                    </Link>
                    <div className="card-body">
                        <h2 className="card-title">CoPy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.</p>
                        <div className="card-actions justify-end">
                            <Link href="projects/copy">
                                <button className="btn btn-primary">Read more!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className="card lg:card-side bg-base-200 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title"> 🚧New project🚧</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.</p>
                    </div>
                </div>
            </article>
        </div >
    );
}
