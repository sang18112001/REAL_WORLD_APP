export const configTime = (time: string) => {
  const date = new Date(time)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}

export const configTags = (stringTag: string) => {
  const tagList = stringTag.split(',').map(element => element.trim())
  return tagList
}

export const isAuth = () => {
  return localStorage.getItem('userToken')
}