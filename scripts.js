let Cream = function() {
    

    this.get = function() {
        this.age = prompt('Ваш возраст', 18);
        this.skin= prompt('Введите тип важей кожи. Например: нормальная, сухая или комби', 'нормальная');
        this.spf = +prompt('Введите максимальный желаемый уровень spf в креме (число), если хотите без spf, введите 0', 0);
        
        

        this.analysis();
    };

    this.analysis = function() {
        if (this.spf == 0) {
            if (this.age >= 18 && this.age < 30) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' Sativa Крем для лица №23';
                    break;
                    case 'сухая':
                        this.result = ' CeraVe SPF25 увлажняющий для нормальной и сухой кожи'; 
                    break;
                    case 'комби':
                        this.result = ' Belita Ромашковый крем для смешанного типа кожи'; 
                    break;
                    default: console.log('вы ввели не верный тип кожи');
                }
            } else if (this.age > 0 && this.age < 18) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' INTERAPOTHEK ДЕТСКИЙ КРЕМ-БАЛЬЗАМ CREMA BALSAMICA BEBE';
                    break;
                    case 'сухая':
                        this.result = ' Modum Крем Классика детский от непогоды'; 
                    break;
                    case 'комби':
                        this.result = ' MI&KO КРЕМ ДЕТСКИЙ НЕЖНЫЙ ВОЗРАСТ'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            } else if (this.age > 30) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' Активный крем для лица iSeul';
                    break;
                    case 'сухая':
                        this.result = ' Пробуждающий крем для лица Oceanum'; 
                    break;
                    case 'комби':
                        this.result = ' Крем для сужения пор Expert от Faberlic'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            }
        } else if (this.spf > 0 && this.spf < 20) {
            if (this.age >= 18 && this.age < 30) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' Ziaja BB cream for normal, dry & sensitive skin Light tone 50 мл';
                    break;
                    case 'сухая':
                        this.result = ' Farmona Professional Anti Pollution SPF15 (50 мл)'; 
                    break;
                    case 'комби':
                        this.result = ' Lancome Мгновенно успокаивающий крем-гель Hydra Zen SPF15 50 мл'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            } else if (this.age > 0 && this.age < 18) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' INTERAPOTHEK ДЕТСКИЙ КРЕМ-БАЛЬЗАМ CREMA BALSAMICA BEBE';
                    break;
                    case 'сухая':
                        this.result = ' Modum Крем Классика детский от непогоды'; 
                    break;
                    case 'комби':
                        this.result = ' Uriage Bariesan крем'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            } else if (this.age > 30) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' Lancome Дневной крем с лифтинг-эффектом Renergie Multi-Lift SPF 15 50 мл';
                    break;
                    case 'сухая':
                        this.result = ' Lancome Дневной крем с лифтинг-эффектом Renergie Multi-Lift SPF 15 50 мл'; 
                    break;
                    case 'комби':
                        this.result = ' Lancome Дневной крем с лифтинг-эффектом Renergie Multi-Lift SPF 15 50 мл'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            }
        } else if (this.spf >= 20) {
            if (this.age >= 18 && this.age < 30) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = ' Bielenda Sun Care SPF50 50 мл';
                    break;
                    case 'сухая':
                        this.result = ' Isis Pharma Ruboril Expert SPF 50+ (40 мл))'; 
                    break;
                    case 'комби':
                        this.result = ' Belita Локальная защита'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            } else if (this.age > 0 && this.age < 18) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = 'Крем Floresan Africa Kids «На суше и на море»';
                    break;
                    case 'сухая':
                        this.result = 'Крем «Моё солнышко»'; 
                    break;
                    case 'комби':
                        this.result = 'Крем Mommy Care'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            } else if (this.age > 30) {
                switch(this.skin) {
                    case 'нормальная':
                        this.result = 'Вам подойдет: Солнцезащитный крем Avon антивозрастной для лица SPF 50';
                    break;
                    case 'сухая':
                        this.result = 'Солнцезащитный крем Ив Роше / Yves Rocher антивозрастной для лица SPF30 (Solaire Peau Parfaite) '; 
                    break;
                    case 'комби':
                        this.result = 'Солнцезащитный крем Avene Антивозрастной SPF 50+'; 
                    break;
                    default: this.result = 'вы ввели не верный тип кожи';
                }
            }
        }

        this.show();
    };

    this.show = function() {
        console.log(this.result);
    };

    this.name = function() { // как можно сделать, чтобы в объекте в свойстве name записывался результат моего метода analysis, то есть название крема? Я вывела в result название, а потом как?
        let nameCream = this.result;
        return nameCream;
    };

};


let myCream = function(age, skin) {

    Cream.apply(this, arguments);
    let luxury = false;
    this.age = age;
    this.getluxury = function () {
        if (this.age > 40) {
            luxury = true;   
        } else luxury = false;

    };

    this.luxury = function() {
        return luxury;
    };

    let effect;
    this.skin = skin;
    this.getEffect = function() {
        if (this.skin == 'нормальная') {
            effect = 'Результат применения крема: Увлажненная кожа';
            console.log(effect);
        } else if (this.skin == 'сухая') {
            effect = 'Результат применения крема: Кожа, напитанная изнутри';
            console.log(effect);
        } else if (this.skin == 'комби') {
            effect = 'Результат применения крема: Ровная матовая кожа';
            console.log(effect);
        }
    };
    
    
    this.duration = function(volume) {
        itog = volume / 0.277;
        console.log('Вашего крема хватит на ' + Math.round(itog) + ' применений(е)');
    };
};

let creamTest = new myCream(75);
    

creamTest.get(); //находит подходящий крем для лица
creamTest.getluxury(); // выясняет, является ли этот крем "люксовой косметикой"
console.log(creamTest.luxury()); //выводит в консоль правда или нет, что крем класса люкс
creamTest.getEffect(); //выводит в консоль результат использования крема
creamTest.duration(75); //считает, в зависимости от введенного объема, на сколько применений хватит крема
console.log(creamTest);
