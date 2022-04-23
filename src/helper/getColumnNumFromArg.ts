const getColumnNumFromArg = () => {
  const columnNum = parseInt(process.argv[2])
  if (isNaN(columnNum)) throw Error('カラム数を数値で指定してください')
  return columnNum
}

export default getColumnNumFromArg
