import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const search = params.query || 'nurse'; //hot jobs
    return this.get('store').query('job', {q: search});
  },

  setupController(controller, model) {
    let data = {};

    model.forEach((job) => {
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
      data: arr
    });
  }
});
