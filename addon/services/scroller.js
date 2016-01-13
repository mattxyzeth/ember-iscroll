import Ember from 'ember';

const {
  on
} = Ember;

export default Ember.Service.extend({

  _init: on('init', function() {
    this.get('router').on('didTransition', ()=> {
      this.refresh();
    });
  }),

  createScroller(elm/*, options={}*/) {
    this.set('scroller', new IScroll(elm, {
      mouseWheel: true,
      scrollbars: true,
      fadeScrollbars: true,
      shrinkScrollbars: 'clip'
    }));
  },

  refresh() {
    Ember.run.debounce(this, this._doRefresh, 500);
  },

  _doRefresh() {
    this.get('scroller').refresh();
  }

});
