function getTime(option) {

  const date = new Date(parseInt(option.time, {}));
  const year = date.getFullYear();
  const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  let times = option.format;
  times = times.replace('YYYY', year);
  times = times.replace('MM', month);
  times = times.replace('DD', day);
  times = times.replace('hh', hour);
  times = times.replace('mm', min);
  times = times.replace('ss', sec);

  return times

}

module.exports = getTime;
