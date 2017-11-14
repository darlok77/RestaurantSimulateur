'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class Ingredients
 */
var Ingredients = function () {
  /**
  * @constructor
  * @param {Object} listIngredient
  */
  function Ingredients(listIngredient) {
    _classCallCheck(this, Ingredients);

    this.listIngredient = listIngredient;
  }

  /**
   * add Ingredient
   * @param {Object} id
   * @param {Int} value
   * @return {Bool}
   */


  _createClass(Ingredients, [{
    key: 'addIngredient',
    value: function addIngredient(id, value) {
      if (!this.listIngredient[id]) {
        return false;
      }

      this.listIngredient[id].nb += value;

      return true;
    }

    /**
     * remove Ingredient
     * @param {Object} id
     * @param {Int} value
     * @return {Bool}
     */

  }, {
    key: 'removeIngredient',
    value: function removeIngredient(id, value) {

      if (!this.listIngredient[id] && !this.listIngredient[id].nb) {
        return false;
      }

      this.listIngredient[id].nb -= value;

      return true;
    }

    /**
     * Get list Ingredient
     * @return {Objetc} this._listIngredient
     */

  }, {
    key: 'listIngredient',
    get: function get() {
      return this._listIngredient;
    }

    /**
     * Set list Ingredient
     * @param {Objetc} listIngredient
     * @return {Ingredient}
     */
    ,
    set: function set(listIngredient) {
      this._listIngredient = listIngredient;
    }
  }]);

  return Ingredients;
}();

//-----------------------ingredientsMock-----------------------------

var listIngredient = {
  'viande': {
    'price': 1.20,
    'nb': 0
  },
  'poisson': {
    'price': 2.2,
    'nb': 0
  },
  'salade': {
    'price': 2.2,
    'nb': 0
  },
  'pain': {
    'price': 2.2,
    'nb': 0
  },
  'yahourt': {
    'price': 2.2,
    'nb': 0
  },
  'eau': {
    'price': 2.2,
    'nb': 0
  }
};

/**
 * Class Plat
 */

var Plat = function () {
  /**
  * @constructor
  */
  function Plat() {
    _classCallCheck(this, Plat);

    this._listPlat = {};
  }

  /**
   * add Plat
   * @param {Object} plat
   * @return {Bool}
   */


  _createClass(Plat, [{
    key: 'addPlat',
    value: function addPlat(plat) {
      if ((typeof plat === 'undefined' ? 'undefined' : _typeof(plat)) != 'object') {
        return false;
      }

      Object.assign(this._listPlat, plat);

      return true;
    }

    /**
     * remove Plat
     * @param {Object} name
     * @return {Bool}
     */

  }, {
    key: 'removePlat',
    value: function removePlat(name) {
      if (!name && !name.length) {
        return false;
      }

      delete this._listPlat[name];

      return true;
    }

    /**
     * Get list Plat
     * @return {object} this._listPlat
     */

  }, {
    key: 'listPlat',
    get: function get() {
      return this._listPlat;
    }

    /**
     * Set list Plat
     * @param {Object} listPlat
     * @return {Plat}
     */
    ,
    set: function set(listPlat) {
      this._listPlat = listPlat;
    }
  }]);

  return Plat;
}();

//-------------------------------platsMock---------------------------


var HAMBURGERS = {
  'hamburgers': {
    'ingredient1': listIngredient['viande'],
    'ingredient2': listIngredient['pain'],
    'ingredient3': listIngredient['salade']
  }
};

var SANDWICHS = {
  'sandwichs': {
    'ingredient1': listIngredient['viande'],
    'ingredient2': listIngredient['pain'],
    'ingredient3': listIngredient['salade']
  }
};

/**
 * Class Employee
 */

var Employee = function () {
  /**
  * @constructor
  */
  function Employee() {
    _classCallCheck(this, Employee);

    this._listEmployees = {};
  }

  /**
   * add Employe
   * @param {Object} employee
   * @return {Bool}
   */


  _createClass(Employee, [{
    key: 'addEmploye',
    value: function addEmploye(employee) {
      if ((typeof employee === 'undefined' ? 'undefined' : _typeof(employee)) != 'object') {
        return false;
      }

      Object.assign(this._listEmployees, employee);
      return true;
    }

    /**
     * remove Employee
     * @param {Object} employee
     * @return {Bool}
     */

  }, {
    key: 'removeEmployee',
    value: function removeEmployee(employee) {
      if (!employee && !employee.length) {
        return false;
      }

      delete this._listEmployees[employee];
      return true;
    }

    /**
     * update Role
     * @param {Object} employee
     * @param {string} newRole
     * @return {Bool}
     */

  }, {
    key: 'updateRole',
    value: function updateRole(employee, newRole) {
      if (!employee && !employee.length) {
        return false;
      }

      this._listEmployees[employee].role = newRole;
      return true;
    }

    /**
     * increase Total Order Receive
     * @param {Int} employee
     * @return {Employees}
     */

  }, {
    key: 'increaseTotalOrderReceive',
    value: function increaseTotalOrderReceive(employee) {

      this._listEmployees[employee].totalOrderReceived++;
      return this;
    }

    /**
     * Get list Employee
     * @return {object} this._listEmployees
     */

  }, {
    key: 'listEmployee',
    get: function get() {
      return this._listEmployees;
    }

    /**
     * Set list Employee
     * @param {object} listEmployees
     * @return {Employee}
     */
    ,
    set: function set(listEmployees) {
      this._listEmployees = listEmployees;
    }
  }]);

  return Employee;
}();

//------------------------------employeesMock-----------------------

var TOTO = {
  '1': {
    'id': 1,
    'name': 'Toto',
    'role': 'Cuisinier',
    'totalOrderReceived': 0
  }
};

var SOPHIE = {
  '2': {
    'id': 2,
    'name': 'Sophie',
    'role': 'Serveuse',
    'totalOrderReceived': 0
  }
};

/**
 * Class Menu
 */

var Menu = function () {
  /**
  * @constructor
  */
  function Menu() {
    _classCallCheck(this, Menu);

    this._listMenu = {};
  }

  /**
   * add Menu
   * @param {Object} plat
   * @return {Bool}
   */


  _createClass(Menu, [{
    key: 'addMenu',
    value: function addMenu(plat) {
      if ((typeof plat === 'undefined' ? 'undefined' : _typeof(plat)) != 'object') {
        return false;
      }

      Object.assign(this._listMenu, plat);

      return true;
    }

    /**
     * remove Menu
     * @param {Object} name
     * @return {Bool} 
     */

  }, {
    key: 'removeMenu',
    value: function removeMenu(name) {
      if (!name && !name.length) {
        return false;
      }

      delete this._listMenu[name];

      return true;
    }

    /**
     * Get list Menu
     * @return {object} this._listMenu;
     */

  }, {
    key: 'listMenu',
    get: function get() {
      return this._listMenu;
    }

    /**
     * Set list Menu
     * @param {string} listMenu
     * @return {Menu}
     */
    ,
    set: function set(listMenu) {
      this._listMenu = listMenu;
    }
  }]);

  return Menu;
}();

//-------------------------------menusMock---------------------------

var CHILD = {
  'Child': {
    'name': 'Child',
    'plat': SANDWICHS
  }
};

var TRUC = {
  'truc': {
    'name': 'Truc',
    'plat': HAMBURGERS
  }
};

/**
 * Class Client
 */

var Client = function () {
  /**
  * @constructor
  */
  function Client() {
    _classCallCheck(this, Client);

    this._listClient = {};
  }

  /**
   * add Client
   * @param {Object} client
   * @return {Bool}
   */


  _createClass(Client, [{
    key: 'addClient',
    value: function addClient(client) {
      if ((typeof client === 'undefined' ? 'undefined' : _typeof(client)) != 'object') {
        return false;
      }

      Object.assign(this._listClient, client);

      return true;
    }

    /**
     * Get
     * @param {Object} client
     * @return {Bool} 
     */

  }, {
    key: 'removeClient',
    value: function removeClient(client) {
      if (!client && !client.length) {
        return false;
      }

      delete this._listClient[client];

      return true;
    }

    /**
     * Get
     * @param {string} password
     * @param {float} sold
     * @return {Client}
     */

  }, {
    key: 'decreaseSold',
    value: function decreaseSold(client, sold) {

      this._listClient[client].sold -= sold;
      return this;
    }

    /**
     * Get list Client
     * @return {object} this._listClient
     */

  }, {
    key: 'listClient',
    get: function get() {
      return this._listClient;
    }

    /**
     * Set list Client
     * @param {object} listClient
     * @return {Client}
     */
    ,
    set: function set(listClient) {
      this._listClient = listClient;
    }
  }]);

  return Client;
}();

//-------------------------------ClientsMock---------------------------

var GUILLAUME = {
  '1': {
    'id': 1,
    'name': 'Guillaume',
    'sold': 50
  }
};

var MARTY = {
  '2': {
    'id': 2,
    'name': 'Marty',
    'sold': 70
  }
};

/**
 * Class Order
 */

var Order = function () {
  /**
  * @constructor
  */
  function Order() {
    _classCallCheck(this, Order);

    this._listOrder = {};
  }

  /**
   * add Order
   * @param {Object} order
   * @return {Bool}
   */


  _createClass(Order, [{
    key: 'addOrder',
    value: function addOrder(order) {
      if ((typeof order === 'undefined' ? 'undefined' : _typeof(order)) != 'object') {
        return false;
      }

      Object.assign(this._listOrder, order);

      return true;
    }

    /**
     * remove Order
     * @param {Object} Order
     * @return {Bool}
     */

  }, {
    key: 'removeOrder',
    value: function removeOrder(Order) {
      if (!Order && !Order.length) {
        return false;
      }

      delete this._listOrder[Order];

      return true;
    }

    /**
     * update State
     * @param {Object} Order
     * @return {Bool}
     */

  }, {
    key: 'updateState',
    value: function updateState(Order) {
      if (!Order && !Order.length) {
        return false;
      }

      if (this._listOrder[Order].state) {
        this._listOrder[Order].state = false;
      } else {
        this._listOrder[Order].state = true;
      }

      return true;
    }

    /**
     * verif Sold
     * @param {Object} orders
     * @return {Bool}
     */

  }, {
    key: 'verifSold',
    value: function verifSold(orders) {

      for (var element in orders) {
        if (orders[element].totalPrice > orders[element].client.sold) {

          console.log(orders.client.name + ' n\'a pas assez de solde');
          return false;
        }
      }
      return true;
    }

    /**
     * Get list Order
     * @return {Object} this._listOrder
     */

  }, {
    key: 'listOrder',
    get: function get() {
      return this._listOrder;
    }

    /**
     * Set list Order
     * @param {Object} listOrder
     * @return {Order}
     */
    ,
    set: function set(listOrder) {
      this._listOrder = listOrder;
    }
  }]);

  return Order;
}();

//-------------------------------ordersMock---------------------------


var ORDER1 = {
  '1': {

    'client': GUILLAUME['1'],
    'employee': SOPHIE['2'],
    'date': new Date("December 17, 1995 03:24:00"),
    'totalPrice': 24,
    'state': true,
    'menu': CHILD
  } };
var ORDER2 = {
  '2': {
    'client': MARTY['2'],
    'employee': SOPHIE['2'],
    'date': new Date("December 18, 1995 03:24:00"),
    'totalPrice': 35,
    'state': false,
    'menu': TRUC

  } };

/**
 * Class Restaurant
 */

var Restaurant = function () {
  /**
  * @constructor
  * @param {String} name
  * @param {String} city
  * @param {String} numberSit
  */
  function Restaurant(name, city, numberSit) {
    _classCallCheck(this, Restaurant);

    this._name = name;
    this._city = city;
    this._numberSit = numberSit;
    this._listEmployees = new Employee();
    this._menuList = new Menu();
  }

  /**
   * add Restaurant Menu
   * @param {Object} menu
   * @return {Restaurant}
   */


  _createClass(Restaurant, [{
    key: 'addRestaurantMenu',
    value: function addRestaurantMenu(menu) {
      this._menuList.addMenu(menu);
    }

    /**
     * remove Restaurant Menu
     * @param {Object} menu
     * @return {Restaurant}
     */

  }, {
    key: 'removeRestaurantMenu',
    value: function removeRestaurantMenu(menu) {
      this._menuList.removeMenu(menu);
    }

    /**
     * add Restaurant Employees
     * @param {Object} employee
     * @return {Restaurant}
     */

  }, {
    key: 'addRestaurantEmployees',
    value: function addRestaurantEmployees(employee) {

      this._listEmployees.addEmploye(employee);
    }

    /**
     * remove Restaurant Employees
     * @param {Object} employee
     * @return {Restaurant}
     */

  }, {
    key: 'removeRestaurantEmployees',
    value: function removeRestaurantEmployees(employee) {

      this._listEmployees.removeEmployee(employee);
    }

    /**
     * Get name
     * @return {String} this._name
     */

  }, {
    key: 'restaurantToString',


    /**
     * restaurant To String
     * @return {Restaurant}
     */
    value: function restaurantToString() {
      console.log('name : ' + this._name);
      console.log('city : ' + this._city);
      console.log('numberSit : ' + this._numberSit);
      console.log('listEmployee : ');
      console.log(this._listEmployees);
      console.log('listMenu : ');
      console.log(this._menuList);
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }

    /**
     * Set name
     * @param {String} name
     * @return {Restaurant}
     */
    ,
    set: function set(name) {
      this._name = name;
    }

    /**
     * Get city
     * @return {String} this._city
     */

  }, {
    key: 'city',
    get: function get() {
      return this._city;
    }

    /**
     * Set city
     * @param {String} city
     * @return {Restaurant}
     */
    ,
    set: function set(city) {
      this._city = city;
    }

    /**
     * Get number Sit
     * @return {String} this._numberSit
     */

  }, {
    key: 'numberSit',
    get: function get() {
      return this._numberSit;
    }

    /**
     * Get number Sit
     * @param {string} numberSit
     * @return {Restaurant} 
     */
    ,
    set: function set(numberSit) {
      this._numberSit = numberSit;
    }
  }]);

  return Restaurant;
}();

var menus = new Menu();
var orders = new Order();
var plats = new Plat();
var employes = new Employee();
var clients = new Client();
var mcdo = new Restaurant("mcdo", "Paris", 150);
var quick = new Restaurant("quick", "Paris", 100);

/*
menus.addMenu(CHILD);
menus.addMenu(TRUC);
//menus.removeMenu('truc');
console.log(menus._listMenu);
 

plats.addPlat(HAMBURGERS);
plats.addPlat(SANDWICHS);
//plats.removePlat('hamburgers');
console.log(plats._listPlat);
 

employes.addEmploye(TOTO);
employes.addEmploye(SOPHIE);
//employes.removeEmployee('2');
employes.updateRole('1','cuistot');
//employes.increaseTotalOrderReceive('1');
console.log(employes._listEmployees);

 
clients.addClient(MARTY);
clients.addClient(GUILLAUME);
//clients.removeClient('2');
clients.decreaseSold('1',10)
console.log(clients._listClient);

 
console.log(ORDER2[2]);

if (orders.verifSold(ORDER1)){
  orders.addOrder(ORDER1);                                               
  employes.increaseTotalOrderReceive(ORDER1[1].employee.id);
}
if (orders.verifSold(ORDER2)){
  orders.addOrder(ORDER2);
  employes.increaseTotalOrderReceive(ORDER2[2].employee.id);
}
//orders.removeOrder('Order2');
orders.updateState('1');
console.log(orders._listOrder);
 */

mcdo.addRestaurantMenu(CHILD);
mcdo.addRestaurantMenu(TRUC);
mcdo.addRestaurantEmployees(SOPHIE);
console.log(mcdo.restaurantToString());

quick.addRestaurantMenu(CHILD);
quick.addRestaurantMenu(TRUC);
quick.addRestaurantEmployees(TOTO);
console.log(quick.restaurantToString());