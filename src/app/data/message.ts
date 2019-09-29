interface CustomFile {
  content: string
  name: string,
  type: string,
}
export interface Message {
  attachments: Array<CustomFile>,
  bccAddress: Array<string>,
  fromEmail: string,
  fromName: string,
  html: string,
  images: Array<CustomFile>,
  important: boolean,
  text: string,
}