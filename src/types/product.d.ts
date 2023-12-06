type PreviewType = {
  iframeUrl: string
  expirationDate: string
}

type FileType = {
  id: string
  name: string
}

type FilesType = {
  id: string
  fileType: FileType
  name: string
  description: string
  languageCode: string
  downloadLink: {
    url: string
    expirationDate: string
  }
}

interface IProductResponse {
  preview: PreviewType
  files: ReadonlyArray<FilesType>
}
