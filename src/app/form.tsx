'use client'

import React, { useEffect, useRef} from 'react'
import {useFormStatus } from 'react-dom'

const Form = () => {
    const state = useFormStatus()
    const inputRef = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (state.pending) {
            if (inputRef.current) inputRef.current.value = ''
            if (textAreaRef.current) textAreaRef.current.value = ''
        }
    }, [state])

    return (
        <>
            <div className="input-label-container">
                <label
                    htmlFor="name"
                    className="h2 label"
                >
                    Name (Optional)
                </label>
                <input
                    ref={inputRef}
                    className="p input"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nome"
                />
            </div>
            <div className="input-label-container">
                <label
                    htmlFor="text"
                    className="h2 label"
                >
                    Text *
                </label>
                <textarea
                    ref={textAreaRef}
                    className="p input"
                    id="text"
                    name="text"
                    placeholder="Write something here..."
                    required
                />
            </div>
            <div className="button-container">
                <button
                    className="p button"
                    type="submit"
                    disabled={state.pending}
                >
                    Submit
                </button>
            </div>
        </>
    )
}

export default Form
