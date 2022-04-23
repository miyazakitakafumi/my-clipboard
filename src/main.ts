import * as clipboard from 'clipboardy'
import getColumnNumFromArg from './helper/getColumnNumFromArg.js'
import makeOutput from './helper/makeOutput.js'

const main = (): void => {
  const columnNum = getColumnNumFromArg()

  const c = clipboard.readSync()
  const arr = c.split(/\r\n/)

  const output = makeOutput(arr, columnNum)

  console.log(output)
}

main()
