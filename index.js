/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

module.exports = {
  name: 'ember-iscroll',

  treeForVendor: function(tree) {
    var iscrollPath = path.dirname(require.resolve('iscroll'));
    var iscrollTree = pickFiles(this.treeGenerator(iscrollPath), {
      srcDir: '/',
      destDir: 'iscroll'
    });

    var trees = iscrollTree;
    if (tree) {
      trees = mergeTrees([tree, iscrollTree]);
    }

    return trees;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    app.import('vendor/iscroll/iscroll.js');
  },

  isDevelopingAddon: function() {
    return false;
  }
};
