import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({
    namespace: 'ads/apisearch',

    urlForQuery (query, modelName) {
        return `http://localhost:3000/indeedJobs?q=${query.q}`;
    }

});
