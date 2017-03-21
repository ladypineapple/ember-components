import Ember from 'ember';

export default Ember.Component.extend({
  //put in camelcase
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: true,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
  },
});
