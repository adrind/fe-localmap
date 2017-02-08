import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
    name: attr(),
    type: attr(),
    address: attr(),
    phone: attr(),
    email: attr(),
    latitude: attr(),
    longitude: attr()
});
