export const notEmpty= name=>  {
  return v => {
    if(!v || v.trim() === '') {
      return `${name} is required`
    }else{
      return true
    }
  }
}

// export const notEmpty = name => {
//   return v => {
//     if (!v || v.trim === "") {
//       return `${name} is required`;
//     } else {
//       return true;
//     }
//   };
// };
