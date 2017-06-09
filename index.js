function getTime(option) {

  const date = new Date(parseInt(option.time, {}));
  const year = date.getFullYear();
  const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  let times;
  switch (option.format) {
    case 'detail':
      times = `${year}.${month}.${day} ${hour}:${min}:${sec}`;
      break;
    case 'row':
      times = `${year}${month}${day}`;
      break;
    case 'slash':
      times = `${year}-${month}-${day}`;
      break;
    default:
      times = option.time;
      break;
  }

  return times

}

module.exports = getTime;
