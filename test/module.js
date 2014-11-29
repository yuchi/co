
import * as assert from 'assert';

describe('ES6 import syntax', function () {
  describe('import x from "x"', function () {
    it('should work', function () {
      import co from '..';
      assert(co instanceof Function);
    })
  })
  describe('import { x, y } from "x"', function () {
    it('should work', function () {
      import { co, wrap } from '..';
      assert(co instanceof Function);
      assert(wrap instanceof Function);
    })
  })
  describe('import * as x from "x"', function () {
    it('should work', function () {
      import * as co from '..';
      assert(co instanceof Function);
    })
  })
})
