a tool for transferring timestamp to standard time format

# Date


| Name | Description | Example |
| --- | --- | --- |
| YYYY | Year | 2017 |
| MM | Month | 02 |
| DD | Date | 01 |
| hh | Hour | 23 |
| mm  | Minute | 01 |
| ss | Second | 02 |

Above is time-schema-formatter supported format. You can make your own time format. For example:

- YYYY/MM/DD hh:mm:ss | 2017/06/07 23:01:02
- YYYY年MM月DD日 hh-mm-ss | 2017年06月07日 23-01-02
- YYYY-MM-DD | 2017-06-07

# Usage

```javascript
import timeFormat from 'time-schema-formatter'

// 2017/06/09 23:01:02
timeFormat({
 time: Date.parse(new Date()),
 format: 'YYYY/MM/DD hh:mm:ss',
});

// 2017年06月09日 23-01-02
timeFormat({
 time: Date.parse(new Date()),
 format: 'YYYY年MM月DD日 hh-mm-ss',
});

// 2017-06-09
timeFormat({
 time: Date.parse(new Date()),
 format: 'YYYY-MM-DD',
});
```
