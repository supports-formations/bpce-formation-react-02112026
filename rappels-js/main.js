// 3 problèmes de js
// 1. absence de typage : typescript
// 2. interprété : typescript + tsc
// 3. comportement de this => js... ts
// 4. bcp de liberté : ts
// 5. client: pas full e2e 
// 6. trop de librairies => trop de frameworks
// 7. compatibilité sur N navigateurs / versions => soucis de livraison
// ==> webpack + transpileur (babel) ou vitejs

function Ship(name) {
    this.matricule = name;
    console.info(this); // le context !! mais lequel ? de base : window

    //const luke = new Luke('Luke', 'Bleu');
}

//Ship('123XD');

function Luke(name, sabreColor) {
    
    this.name = name;
    this.sabreColor = sabreColor;

    console.info('Luke', this);
}

const ship = new Ship('123XD'); // le new crée un context unique !
const ship2 = new Ship('124XD'); // le new crée un context unique !


const luke = new Luke('Luke', 'Bleu');
const ShipCustom = Ship.bind(luke); // capture de this
ShipCustom('myShip');


const lukeBis = new Luke('Luke', 'Bleu');
Ship.call(luke, 'X1233'); // capture de this + exécution

// Les fonctions prennent le context du parent !

