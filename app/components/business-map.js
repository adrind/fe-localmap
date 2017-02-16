import Ember from 'ember';

export default Ember.Component.extend({
    anchLat: 61.212790,
    anchLng: -149.826244,
    zoom: 12,

    businessInfo: Ember.A([]),

    actions: {
      markerLoaded(lat, lng, results) {
        this.get('businessInfo').push({
          lat: lat,
          lng: lng,
          name: results.name,
          location: results['formatted_address']
        });
      }
    }
});
