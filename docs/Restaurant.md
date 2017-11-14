# Restaurant

## Attribut

| name | type
| --- | ---
| -name | String
| -city | String
| -numberSit | String
| -listEmployees | Array: Employee
| -menuList | Array: Menu



## Méthodes

| name | params | return | usage
| --- | --- | --- | ---
| +getName() | null | string | get the name of the restaurant   
| +setName() | name | void | set the name of the restaurant 
| +getCity() | null | string | get the city 
| +setCity() | city | void | set the city
| +addRestaurantMenu()|menu: Array<Object> | Array<Object> | add a menu to the restaurant
| +removeRestaurantMenu()|menu: Array<Object> | Array<Object> | remove a menu to the restaurant
| +addRestaurantEmployees()|employee: Array<Object> | Array<Object> | add an employee to the restaurant
| +removeRestaurantEmployees()|employee: Array<Object> | Array<Object> | remove an employee to the restaurant
| +setNumberSit()|numberSit: String | void | set the number off the seat of the restaurant
| +getNumberSit() |null| numberSit: String | get the number off the seat of the restaurant
| +restaurantToString()| null | Array<Object> | build a string 
