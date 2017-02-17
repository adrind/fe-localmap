import ApplicationAdapter from './application';


export default ApplicationAdapter.extend({
    urlForQuery (query) {
        const source = query.source || 'IND';
        return `http://localhost:3000/jobs`;
    }
});
