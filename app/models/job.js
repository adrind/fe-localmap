import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr(),
  company: attr(),
  snippet: attr(),
  url: attr(),
  lat: attr(),
  lng: attr(),
  date: attr(),
  jobKey: attr(),
  location: attr(),
  source: attr()
});
