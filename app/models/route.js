import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    routeId: attr(),
    location: attr(),
    latitude: attr(),
    longitude: attr()
});
