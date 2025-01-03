Regular vs Async vs Defer

1. Regular script: End of Body

- Scripts are fetched and executed after the HTML is completely parsed.

2. Async script: In Head

- Scripts are fetched asynchronously and executed as soon as they are available.
- Usually the DOMContentLoaded event, waits for all scripts to execute, except for async scripts. So, DOMContentLoaded does not wait for async scripts.

3. Defer script: In Head

- Scripts are fetched asynchronously and executed after the HTML is completely parsed.
- DOMContentLoaded event fires after defer scripts is executed.
- Defer scripts are executed in the order they are encountered in the HTML.
- This is the default behavior of the browser and overall the best solution. 
