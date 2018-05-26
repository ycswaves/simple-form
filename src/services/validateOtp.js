export function mockValidation(otp) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve(otp == '2018');
    }, 2000);
  })
}