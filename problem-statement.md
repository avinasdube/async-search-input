# Problem Statement

As the Nodejs developer in the company, you have been given the task to write an Asynchronous Search Script that takes a search term as input
and returns the count of the matching objects or throws an error if the search was unsuccessful.

## Class Description

### Create a module, search.js and implement the following set of functionalities

* The file should export a class Search as the default export of the module, and it should inherit from the EventEmitter class.

* The class should have following methods :
  * searchCount : Accepts the searchTerm [STRING] as the argument, and it internally makes use of the predefined API service in order to fetch the count of the matches.
    * If the searchTerm passed to the function is undefined, the function should emit the event SEARCH_ERROR with an object containing the message propery INVALID_TERM, and then imediately return without executing further.

        ```json
        {
            "message": "INVALID_TERM"
        }
        ```

* The class should emit the following events :
  * SEARCH_STARTED - Emitted immediately when the searchCount function is called and if searchTerm passed to the function is not undefined, searchTerm should be passed to the callback function of the event handler.

  * SEARCH_SUCCESS - Emitted if the countMatches method is resolved with a result successfully. The callback function of the event handler should accept an object with the following properties :

    ```json
        count : The count of the matches returned by the API.countMatches function.
        term: The search term that was passed to the function.
    ```

  * SEARCH_ERROR - Emitted if searchTerm passed to the searchCount function is undefined (as described above) or if the countMatches method rejects with tan error.

    * When the countMatches method rejects with an error, the callback function of the event handler should accept an object with the following properies :

        ```json
            message: The message property of the error object returned by the API.countMatches method.
            term: The search term passed to the function.
        ```

> Note : The API service file, mock-api.js is present in the root folder of the project and has a single method, countMatches that accepts searchTerm as input and returns as a Promise. The Promise either resolves with a counted number of the matches, or it rejects with a JavaScript Error Object. To test rejection for this method, you can pass searchTerm 'error' to the countMatches function.
