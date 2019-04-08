function career(options) {

  if (options.job === 'engineer') {
    return '工程師'
  } else if (options.job === 'designer') {
    return '設計師'
  } else if (options.job === 'entrepreneur') {
    return '創業家'
  }
}
module.exports = career