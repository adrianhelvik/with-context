module.exports = (api) => {
  let presets

  const TARGET = api.cache(() => process.env.TARGET)
  
  if (TARGET === 'esm')
    presets = ['@babel/preset-react']
  else // cjs or test
    presets = ['@babel/preset-env', '@babel/preset-react']

  return { presets }
}
