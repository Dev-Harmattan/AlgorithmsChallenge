export function addBorder(picture: string[]): string[] {
  let lenght = picture[0].length + 2;
  let wall = ''
  for(let i = 0; i < lenght; i++) {
    wall += '*'
  }
  picture.forEach((item, index) => {
    picture[index] = `*${item}*`;
  });
  picture.unshift(wall);
  return picture.concat(wall);
}

console.log(addBorder(['abc', 'ded']));
