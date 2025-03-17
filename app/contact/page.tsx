"use client"
import React from 'react';
import {Button} from "@/components/ui/Button";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div className="space-y-4 bg-black min-h-screen flex justify-center items-center p-6">
            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <h1 className="text-6xl pb-8 w-full text-center font-bold gothic"><Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Contact")
                            .start()
                    }}
                /></h1>
                <p className="text-white text-center mb-6">
                    Interested in working together, have questions, or feedback? <br/>
                    I&#39;d love to hear from you—just send me an email,I&#39;ll reply as soon as possible!
                </p>
                {/*<form className="space-y-4">*/}
                {/*    <div>*/}
                {/*        <label htmlFor="name" className="block text-white font-medium">*/}
                {/*            Name*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            id="name"*/}
                {/*            className="w-full px-3 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700"*/}
                {/*            placeholder="Your Name"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <label htmlFor="email" className="block text-white font-medium">*/}
                {/*            Email*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="email"*/}
                {/*            id="email"*/}
                {/*            className="w-full bg-neutral-800 text-white px-3 py-2 rounded-md border border-neutral-700"*/}
                {/*            placeholder="you@example.com"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <label htmlFor="message" className="block text-white font-medium">*/}
                {/*            Message*/}
                {/*        </label>*/}
                {/*        <textarea*/}
                {/*            id="message"*/}
                {/*            className="w-full bg-neutral-800 text-white px-3 py-2 rounded-md border border-neutral-700"*/}
                {/*            placeholder="Your message here..."*/}
                {/*        ></textarea>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center justify-center mt-4">*/}
                {/*        <Button borderClassName={"bg-black border-neutral-800"} className="bg-black border-neutral-800">*/}
                {/*            Send*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</form>*/}

                <div className={"w-full flex justify-center items-center"}>
                    <Button borderClassName={"bg-black border-neutral-800"} className="bg-black border-neutral-800">
                        <a href="mailto:bxbbyafterhours@gmail.com">Send Email</a>
                    </Button>
                </div>
            </div>
        </div>
    )
};
