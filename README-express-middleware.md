## console shows the order of which requests from client/middlware are made ##


2 types of middleware use cases are seen
* GLOBAL **logger()** middleware: before every request
* SCOPED **auth()** middleware: only in /users? request
