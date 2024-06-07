// importing required dependencies/modules

const EventEmitter = require('events');
const { countMatches } = require('./mock-api');

// a class named Search extending EventEmitter Class from 'events'
class Search extends EventEmitter {

    // defining searchCount function
    async searchCount(searchTerm) {

        // if searchterm is undefined
        if (searchTerm === undefined) {
            this.emit('SEARCH_ERROR', { message: 'INVALID_TERM' });
            return;
        }

        // if search started
        this.emit('SEARCH_STARTED', searchTerm);

        // using try-catch block to call api using countMatches function of mock-api module
        try {
            const count = await countMatches(searchTerm); // getting count from api call with searchTerm
            this.emit('SEARCH_SUCCESS', { count, term: searchTerm })
        } catch (error) {
            this.emit('SEARCH_ERROR', { message: error.message, term: searchTerm }); // if countMatches produces error
        }
    }
}

// exporting Search module
module.exports = Search;