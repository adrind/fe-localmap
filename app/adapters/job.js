import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({
    urlForQuery (query) {
        return `http://localhost:3000/jobs?q=${query.q}&source=IND`;
    }
});
