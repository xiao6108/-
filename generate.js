function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generate(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let swear = ''

  if (options.job === 'engineer') {
    swear += sample(task.engineer)
  } else if (options.job === 'designer') {
    swear += sample(task.designer)
  } else if (options.job === 'entrepreneur') {
    swear += sample(task.entrepreneur)
  }
  swear += sample(phrase)
  console.log(swear)
  return swear
}
module.exports = generate