const makeOutput = (arr: string[], columnNum: number): string =>
  arr.reduce((prev, current, index) => {
    if ((index + 1) % columnNum === 0) {
      return `${prev}${current}\r\n`
    } else {
      return `${prev}${current},`
    }
  }, '')

export default makeOutput
