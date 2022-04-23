import * as clipboard from 'clipboardy'
import makeOutput from './helper/makeOutput.js'

const main = (): void => {
  const c = clipboard.readSync()

  const arr = c.split(/\r\n/)
  console.log(arr)


  const output = makeOutput(arr)

  console.log(output)
}

main()
