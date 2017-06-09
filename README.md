a tool for transferring timestamp to standard time format

# useage

```javascript
import timeFormat from 'time-schema-formatter'

const now = Date.parse(new Date())

// 2017-06-09
timeFormat({
  time: Date.parse(new Date()),
  format: 'detail',
});

// 20170609
timeFormat({
  time: Date.parse(new Date()),
  format: 'row',
});

// 2017-06-09
timeFormat({
  time: Date.parse(new Date()),
  format: 'slash',
});
```
