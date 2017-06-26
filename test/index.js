const assert = require('power-assert');
const format = require('../src');

describe('time-schema-formatter', function() {
  describe('random time format', function() {
    it('format YYYY-MM-DD', function() {
      assert('2017-01-17' === format({time: 1484639881000, format: 'YYYY-MM-DD'}));
    });

    it('format YYYY-MM-DD hh:mm:ss', function() {
      assert('2017-01-17 15:58:01' === format({time: 1484639881000, format: 'YYYY-MM-DD hh:mm:ss'}));
    });

    it('format YYYY年MM月DD日', function() {
      assert('2017年01月17日' === format({time: 1484639881000, format: 'YYYY年MM月DD日'}));
    });

    it('format YYYY年MM月DD日 hh时mm分ss秒', function() {
      assert('2017年01月17日 15时58分01秒' === format({time: 1484639881000, format: 'YYYY年MM月DD日 hh时mm分ss秒'}));
    });

    it('format YYYY/MM/DD', function() {
      assert('2017/01/17' === format({time: 1484639881000, format: 'YYYY/MM/DD'}));
    });
  });
});
