export default Ember.Route.extend({
  init: function () {
    this.set('ref', new Firebase(window.ENV.firebase + "content_types"));
  },
  model: function () {
    return this.get('store').createRecord('contentType');
  },
  setupController: function (controller, model) {
    controller.set('ref', this.get('ref'));
    controller.set('fieldTypeGroups', this.get('store').find('field-type-group'));
    this._super.apply(this, arguments);
  }
});