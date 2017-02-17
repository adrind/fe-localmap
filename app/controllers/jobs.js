import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['source', 'search'],
  search: '',
  source: 'IND',

  actions: {
    sourceChanged(evt) {
      const newSource = evt.target.name,
            query = this.get('search');

      this.set('source', newSource);

      this.transitionToRoute({queryParams: {q: query, source: newSource}})
    }
  }
});
