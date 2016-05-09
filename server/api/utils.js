export function delay (msec) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, msec)
  })
}
