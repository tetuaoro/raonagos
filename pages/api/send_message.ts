// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTransport } from "nodemailer"
import type { NextApiRequest, NextApiResponse } from "next"
import type { Options, SentMessageInfo, MailOptions } from "nodemailer/lib/smtp-transport"

type ResponseData = {
  message: string
}

type Data = {
  fullname: string
  phone: string
  email: string
  subject: string
  message: string
}
const from = "noreply@rao-nagos.pf"
const mailConfig: Options = {
  host: "box.rao-nagos.pf",
  port: 465,
  secure: true,
  auth: {
    user: from,
    pass: process.env["NOREPLY_PASSWORD"] || "",
  },
}
const transporter = createTransport(mailConfig)
const message = "Votre message a bien été reçu et sera traité dans les plus bref délais."

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const data = JSON.parse(req.body) as Data

  const callBackTransporter = (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.error("transporter logger error", error)
      res.status(500).send({ message: "Something happened when sending message !\r\n" })
    } else {
      console.info("transporter logger info", info)
      res.status(200).send({ message: `mail sent to ${data.email}\r\n` })
    }
  }

  let data_formated = "\n"
  Object.entries(data).forEach(([key, value]) => {
    data_formated += `${key.toUpperCase()} : ${value},\n`
  })

  let mailOptions: MailOptions = {
    from: `Do not Reply <${from}>`,
    to: `"${data.fullname}" <${data.email}>`,
    subject: "Demande reçu",
    text: message + data_formated,
    html: `<p>${message + data_formated}</p>`,
  }

  if (process.env["NOREPLY_EMAIL"]) {
    mailOptions["bcc"] = `"Rao Nagos" <${process.env["NOREPLY_EMAIL"]}>`
  }

  transporter.sendMail(mailOptions, callBackTransporter)
}

export const config = {
  api: {
    externalResolver: true,
  },
}
