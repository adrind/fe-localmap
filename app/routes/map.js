import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            businesses: this.get('store').findAll('business'),
            routes: this.get('store').findAll('route')
        });
    },

    setupController: function (controller, model) {
        const markers = model.businesses.map((b) => {
            return {
                lat: b.get('latitude'),
                lng: b.get('longitude'),
                infoWindow: {
                    content: `<p><strong>${b.get('name')}</strong> apply at ${b.get('address')}</p>`
                }
            }
        });

        const route = Ember.A([{
            strokeColor: 'blue',
            strokeWeight: 6,
            path: model.routes.map((r) => {
                markers.push({
                    lat: r.get('latitude'),
                    lng: r.get('longitude'),
                    infoWindow: {
                        content: `${r.get('location')}`
                    },
                    icon: '/assets/bus_icon.png'
                });
                return [r.get('latitude'), r.get('longitude')]
            }).filter((a) => a[0] != null)
        }]);

        const types = model.businesses.getEach('type').uniq();

        controller.setProperties({
            markers: markers,
            businesses: model.businesses,
            types: types,
            routes: route
        })
    }

});
