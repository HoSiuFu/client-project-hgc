import React from 'react'

interface EmailTemplateProps {
    name?: string
    contribution: string
}

export const EmailTemplate = ({ name, contribution }: EmailTemplateProps) => (
    <>
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
        />
        <div
            style={{
                overflow: 'hidden',
                fontFamily: 'Monteserrat, Arial',
                color: '#3b3b3b',
                padding: '2rem 1rem',
                margin: '0',
                boxSizing: 'border-box',
                width: '100%',
            }}
            className="padded-container"
        >
            {name ? (
                <h2
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'normal',
                        fontWeight: '900',
                        lineHeight: 'normal',
                        color: '#345173',
                        textAlign: 'justify',
                        margin: '0',
                        marginBottom: '0.5rem',
                    }}
                >
                    Contribuition from {name}
                </h2>
            ) : (
                <h2
                    style={{
                        fontSize: '1.5rem',
                        fontStyle: 'normal',
                        fontWeight: '900',
                        lineHeight: 'normal',
                        color: '#345173',
                        textAlign: 'justify',
                        margin: '0',
                        marginBottom: '0.5rem',
                    }}
                >
                    Anonimous Contribuition
                </h2>
            )}
            <p
                style={{
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    textAlign: 'justify',
                    margin: '0',
                }}
            >
                {contribution}
            </p>
        </div>
    </>
)

export default EmailTemplate
