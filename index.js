const Util = {
  timeStamp(time) {
    const date = new Date(parseInt(time, {}));
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const times = `${year}.${month}.${day} ${hour}:${min}:${sec}`;
    return times;
  },
  timeStampRow(time) {
    const date = new Date(parseInt(time, {}));
    const year = date.getFullYear();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const times = `${year}${month}${day}`;
    return times;
  },
  timeStampLite(time) {
    const date = new Date(parseInt(time, 0));
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
      const zero = '0';
      month = zero + month;
    }
    if (day < 10) {
      const zero = '0';
      day = zero + day;
    }
    const line = '-';
    return year + line + month + line + day;
  },
  title(title) {
    const pageTitle = title || '后台管理';
    window.document.title = pageTitle;
  },
};

// export default Util;
module.exports = Util;
