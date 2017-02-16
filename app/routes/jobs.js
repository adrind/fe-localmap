import Ember from 'ember';

let searchQuery;

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: false
    }
  },

  model(params) {
    searchQuery = params.search;

    const jobs = searchQuery ? this.get('store').query('job', {q: searchQuery}) : [];

    return Ember.RSVP.hash({
      jobs: jobs,
      routes: this.get('store').findAll('route')
    });
  },

  setupController(controller, model) {
    let data = {};

    model.jobs.forEach((job) => {
      const company = job.get('company');
      if(data[company] && data[company].length) {
        data[company].push(job);
      } else {
        data[company] = [job];
      }
    });

    let jobs = Object.values(data);

    let arr = jobs.map((jobArr) => {
      let descriptions = [];

      jobArr.forEach((job) => {
        descriptions.push({
          snippet: job.get('snippet'),
          title: job.get('title'),
          url: job.get('url'),
          relativeTime: job.get('relativeTime')
        })
      });

      return {
        num: jobArr.length,
        address: `${jobArr[0].get('company')} Anchorage Alaska`,
        lat: jobArr[0].get('lat'),
        lng: jobArr[0].get('lng'),
        jobs: descriptions,
        company: jobArr[0].get('company'),
      }
    });

    controller.setProperties({
      data: arr,
      totalResults: model.jobs.get('length'),
      query: `"${searchQuery}"`,
      routes: model.routes
    });
  },

  actions: {
    refreshModel() {
      this.refresh();
    },

    updateModel() {
      const address = this.get('address');
    }
  }
});
