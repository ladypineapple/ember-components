import Ember from 'ember';

export default Ember.Component.extend({
  //put in camelcase
  classNameBindings: ['strikethrough'],
  actions: {
    markComplete: function () {
      this.toggleProperty('strikethrough');
    },
  },
});
