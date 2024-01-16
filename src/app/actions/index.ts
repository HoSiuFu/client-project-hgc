'use server'

import EmailTemplate from "@/email-templates/contribution"
import { Resend } from "resend"

let resend: Resend | null = null
if (process.env.RESEND_API_KEY) resend = new Resend(process.env.RESEND_API_KEY || '')
const clientEmail = process.env.CLIENT_EMAIL || ''

const sendEmail = async (formData: FormData) => {
    try {
        const name = formData.get('name')?.valueOf() as string
        const text = formData.get('text')?.valueOf() as string

        if (text && resend && clientEmail) {
            const { data, error } = await resend.emails.send({
                from: 'example@example.com',
                to: [clientEmail],
                subject: 'New Email',
                react: EmailTemplate({ name, contribution: text }) as React.ReactElement,
            })

            if (error) {
                return error
            }

            return data
        }

        return {}
    } catch (error) {
        return Response.json({ error })
    }
}

export { sendEmail }
