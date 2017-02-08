import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    location: attr(),
    latitude: attr(),
    longitude: attr()
});
