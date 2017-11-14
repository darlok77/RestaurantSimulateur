/**
 * Class Ingredients
 */
class Ingredients {
  /**
  * @constructor
  * @param {Object} listIngredient
  */
  constructor(listIngredient){
    this.listIngredient = listIngredient;
  }

  /**
   * add Ingredient
   * @param {Object} id
   * @param {Int} value
   * @return {Bool}
   */
  addIngredient (id, value){
    if (! this.listIngredient[id]) {
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
  removeIngredient (id, value){

    if (! this.listIngredient[id] && ! this.listIngredient[id].nb) {
      return false;
    }

    this.listIngredient[id].nb -= value;

    return true;
  }
  
  /**
   * Get list Ingredient
   * @return {Objetc} this._listIngredient
   */
  get listIngredient(){
    return this._listIngredient;
  }

  /**
   * Set list Ingredient
   * @param {Objetc} listIngredient
   * @return {Ingredient}
   */
  set listIngredient(listIngredient){
    this._listIngredient = listIngredient;
  }
}

//-----------------------ingredientsMock-----------------------------

const listIngredient = {
  'viande':{
    'price' : 1.20,
    'nb' : 0
  },
  'poisson':{
    'price' : 2.2,
    'nb' : 0
  },
  'salade':{
    'price' : 2.2,
    'nb' : 0
  },
  'pain':{
    'price' : 2.2,
    'nb' : 0
  },
  'yahourt':{
    'price' : 2.2,
    'nb' : 0
  },
  'eau':{
    'price' : 2.2,
    'nb' : 0
  }
};

/**
 * Class Plat
 */
class Plat{
  /**
  * @constructor
  */
  constructor(){
    this._listPlat = {};
  }

  /**
   * add Plat
   * @param {Object} plat
   * @return {Bool}
   */
  addPlat(plat) {
    if (typeof plat != 'object') {
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
  removePlat (name) {
    if (! name && ! name.length) {
      return false;
    }

    delete this._listPlat[name];

    return true;
  }

  /**
   * Get list Plat
   * @return {object} this._listPlat
   */
  get listPlat(){
    return this._listPlat;
  }

  /**
   * Set list Plat
   * @param {Object} listPlat
   * @return {Plat}
   */
  set listPlat(listPlat){
    this._listPlat = listPlat;
  }
}

//-------------------------------platsMock---------------------------
const HAMBURGERS = {
  'hamburgers' : {
    'ingredient1' : listIngredient['viande'],
    'ingredient2' : listIngredient['pain'],
    'ingredient3' : listIngredient['salade']
  }
};

const SANDWICHS = {
  'sandwichs': {
    'ingredient1' : listIngredient['viande'],
    'ingredient2' : listIngredient['pain'],
    'ingredient3' : listIngredient['salade']
  }
};


/**
 * Class Employee
 */
class Employee{
  /**
  * @constructor
  */
  constructor(){
    this._listEmployees = {};
  }

  /**
   * add Employe
   * @param {Object} employee
   * @return {Bool}
   */
  addEmploye(employee) {
    if (typeof employee != 'object') {
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
  removeEmployee (employee) {
    if (! employee && ! employee.length) {
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
  updateRole(employee,newRole){
    if (! employee && ! employee.length) {
      return false;
    }

    this._listEmployees[employee].role = newRole;
    return true;
  }
  
  /**
   * increase Total Order Receive
   * @param {Object} employee
   * @return {Employees}
   */
  increaseTotalOrderReceive(employee){
    
    this._listEmployees[employee].totalOrderReceived ++;
    return this;
  }
  
  /**
   * Get list Employee
   * @return {object} this._listEmployees
   */
  get listEmployee(){
    return this._listEmployees;
  }

  /**
   * Set list Employee
   * @param {object} listEmployees
   * @return {Employee}
   */
  set listEmployee(listEmployees){
    this._listEmployees = listEmployees;
  }
}

//------------------------------employeesMock-----------------------

const TOTO = {
  '1' : {
    'id' : 1,
    'name' : 'Toto',
    'role' : 'Cuisinier',
    'totalOrderReceived' : 0
  }
};

const SOPHIE = {
  '2' : {
    'id' : 2,
    'name' : 'Sophie',
    'role' : 'Serveuse',
    'totalOrderReceived' : 0
  }
};


/**
 * Class Menu
 */
class Menu{
  /**
  * @constructor
  */
  constructor(){
    this._listMenu = {};
  }

  /**
   * add Menu
   * @param {Object} plat
   * @return {Bool}
   */
  addMenu(plat) {
    if (typeof plat != 'object') {
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
  removeMenu (name) {
    if (! name && ! name.length) {
      return false;
    }

    delete this._listMenu[name];

    return true;
  }

  /**
   * Get list Menu
   * @return {object} this._listMenu;
   */
  get listMenu(){
    return this._listMenu;
  }

  /**
   * Set list Menu
   * @param {string} listMenu
   * @return {Menu}
   */
  set listMenu(listMenu){
    this._listMenu= listMenu;
  }
}

//-------------------------------menusMock---------------------------

const CHILD = {
  'Child' : {
    'name' : 'Child',
    'plat': SANDWICHS
  }
};

const TRUC = {
  'truc' : {
    'name' : 'Truc',
    'plat' : HAMBURGERS
  }
};



/**
 * Class Client
 */
class Client{
  /**
  * @constructor
  */
  constructor(){
	  this._listClient = {};
  }

  /**
   * add Client
   * @param {Object} client
   * @return {Bool}
   */
  addClient(client) {
    if (typeof client != 'object') {
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
  removeClient (client) {
    if (! client && ! client.length) {
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
  decreaseSold(client,sold) {
    
    this._listClient[client].sold -= sold;
    return this;
  }

  /**
   * Get list Client
   * @return {object} this._listClient
   */
  get listClient(){
    return this._listClient;
  }

  /**
   * Set list Client
   * @param {object} listClient
   * @return {Client}
   */
  set listClient(listClient){
    this._listClient= listClient;
  }
}

//-------------------------------ClientsMock---------------------------

const GUILLAUME= {
  '1' : {
    'id' : 1,
    'name' : 'Guillaume',
    'sold': 50
  }
};


const MARTY = {
  '2' : { 
    'id' : 2,
	'name' : 'Marty',
    'sold': 70
	}
};

/**
 * Class Order
 */
class Order{
  /**
  * @constructor
  */
  constructor(){
    this._listOrder = {};
  }

  /**
   * add Order
   * @param {Object} order
   * @return {Bool}
   */
  addOrder(order) {
    if (typeof order != 'object') {
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
  removeOrder (Order) {
    if (! Order && ! Order.length) {
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
  updateState(Order){
    if (! Order && ! Order.length) {
      return false;
    }
    
    if (this._listOrder[Order].state){
      this._listOrder[Order].state = false;
    }
    else{
      this._listOrder[Order].state = true;
    }
    
    return true;
  }
  
  /**
   * verif Sold
   * @param {Object} orders
   * @return {Bool}
   */
  verifSold(orders){
      
    for (let element in orders) {
      if(orders[element].totalPrice > orders[element].client.sold){ 
      
        console.log(orders.client.name +' n\'a pas assez de solde');
        return false;
      }


    }
      return true
  }      
    
  /**
   * Get list Order
   * @return {Object} this._listOrder
   */
  get listOrder(){
    return this._listOrder;
  }

  /**
   * Set list Order
   * @param {Object} listOrder
   * @return {Order}
   */
  set listOrder(listOrder){
    this._listOrder = listOrder;
  }
}

//-------------------------------ordersMock---------------------------
const ORDER1 = {
  '1' : {

    'client'  : GUILLAUME['1'],
    'employee': SOPHIE['2'],
    'date'    : new Date("December 17, 1995 03:24:00"),
    'totalPrice': 24,
    'state'   : true,
    'menu' : CHILD
  }};
  const ORDER2 ={
    '2' : {
    'client'  : MARTY['2'],
    'employee': SOPHIE['2'],
    'date'    : new Date("December 18, 1995 03:24:00"),
    'totalPrice': 35,
    'state'   : false,
    'menu' : TRUC

  }};

/**
 * Class Restaurant
 */
class Restaurant {
    /**
   * @constructor
   * @param {String} name
   * @param {String} city
   * @param {String} numberSit
   */
	constructor(name, city, numberSit){
		this._name=name;
		this._city=city;
		this._numberSit= numberSit;
		this._listEmployees = new Employee();
		this._menuList= new Menu();
		

	}
  
  /**
   * add Restaurant Menu
   * @param {Object} menu
   * @return {Restaurant}
   */
  addRestaurantMenu(menu) {
    this._menuList.addMenu(menu);
  }
  
  /**
   * remove Restaurant Menu
   * @param {Object} menu
   * @return {Restaurant}
   */
  removeRestaurantMenu (menu) {
    this._menuList.removeMenu(menu);
  }
  
  /**
   * add Restaurant Employees
   * @param {Object} employee
   * @return {Restaurant}
   */
  addRestaurantEmployees(employee) {
    
   this._listEmployees.addEmploye(employee);
    
  }
  
  /**
   * remove Restaurant Employees
   * @param {Object} employee
   * @return {Restaurant}
   */
  removeRestaurantEmployees (employee) {
    
    this._listEmployees.removeEmployee(employee);
    
  }

  
  /**
   * Get name
   * @return {String} this._name
   */
  get name(){
    return this._name;
  }
  
  /**
   * Set name
   * @param {String} name
   * @return {Restaurant}
   */
  set name(name){
    this._name = name;
  }
  
  /**
   * Get city
   * @return {String} this._city
   */
  get city(){
    return this._city;
  }

  /**
   * Set city
   * @param {String} city
   * @return {Restaurant}
   */
  set city(city){
    this._city = city;
  }
  
  /**
   * Get number Sit
   * @return {String} this._numberSit
   */
  get numberSit(){
    return this._numberSit;
  }

  /**
   * Get number Sit
   * @param {string} numberSit
   * @return {Restaurant} 
   */
  set numberSit(numberSit){
    this._numberSit = numberSit;
  }
  
  /**
   * restaurant To String
   * @return {Restaurant}
   */
  restaurantToString(){
    console.log('name : ' + this._name);
    console.log('city : '+ this._city);
    console.log('numberSit : '+this._numberSit);
    console.log('listEmployee : ');
    console.log(this._listEmployees);
    console.log('listMenu : ');
    console.log(this._menuList);
		
  }
}

let menus = new Menu();
let orders = new Order(); 
let plats = new Plat();
let employes = new Employee();
let clients = new Client();
let mcdo = new Restaurant("mcdo","Paris",150);
let quick = new Restaurant("quick","Paris",100);

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
