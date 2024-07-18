export function notEmpty (value) {
  if(!value || value.trim() === '') {
    return `${value} is required`
  }else{
    return true
  }
}