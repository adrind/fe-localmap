import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({
  urlForQuery(query) {
    const q = query.q;
    return `http://localhost:3000/govJobs?q=${query.q}`;
  }
});
