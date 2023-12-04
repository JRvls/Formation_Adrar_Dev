/*
// A1
// Initialisation
setPos (300, 300);
changeColor(color.red);
setLineWidth(10);
faceDown();
// Réalisation
forward(100);
faceRight();
forward(50);


// A2
// Initialisation
setPos (300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceLeft();
// Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


// A3
// Initialisation
setPos (300, 300);
changeColor(color.red);
setLineWidth(10);
faceLeft();
// Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
forward(100);
faceUp();
forward(200);


// A4
// Initialisation
setPos(150, 500);
changeColor(color.green);
setLineWidth(10);
faceRight();
// Réalisation
forward(200);
arcLeft(100, 180);
forward(100);
arcRight(100, 180);
forward(200);


// A5
// Initialisation
setPos(300, 150);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
arcRight(200, 180);
arcRight(200, 180);
arcRight(100, 180);
arcLeft(100, 180);



// A6
// Initialisation
setPos(300, 500);
changeColor(color.blue);
setLineWidth(10);
faceUp();
// Réalisation
forward(100);
up();
forward(100);
down();
forward(200);


// A7
// Initialisation
setPos(300, 300);
changeColor(color.green);
setLineWidth(10);
faceDown()
// Réalisation
forward(200);
arcLeft(100, 180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100, 180);
forward(100);


// A8
// Initialisation
setPos(300, 150);
changeColor(color.red);
setLineWidth(10);
faceUp();
// Réalisation
forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);


// A9
// Initialisation
setPos(100, 500);
changeColor(color.blue);
setLineWidth(10);
faceRight();
// Réalisation
forward(400);
faceLeft();
arcRight(100, 180);
arcLeft(100, 180);
forward(400);
arcLeft(100, 180);
arcRight(100, 180);


// A10
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
arcLeft(100, 180);
changeColor(color.green);
arcLeft(200, 180);
changeColor(color.yellow);
arcLeft(400, 180);


// A11
// Initialisation
setPos(75, 150);
changeColor(color.blue);
setLineWidth(10);
faceUp();
// Réalisation
arcRight(100, 180);
up();
faceRight();
forward(100);
down();
faceUp();
arcRight(100, 180);
up();
forward(100);
faceLeft();
forward(50);
faceDown();
down();
changeColor(color.red);
arcRight(200, 180);


// A12
// Initialisation
setPos(50, 100);
changeColor(color.green);
setLineWidth(10);
faceUp();
// Réalisation
arcRight(50, 180);
forward(100);
arcLeft(50, 180);
up();
faceRight();
forward(50);
changeColor(color.red);
faceDown();
down();
arcLeft(50, 180);
forward(100);
arcRight(50, 180);


// B1
// Initialisation
setPos(100,100);
changeColor(color.green);
setLineWidth(10);
faceRight();
// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

// B2
// Initialisation
setPos(50, 300);
changeColor(color.red);
setLineWidth(10);
faceUp();
// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}

// B3
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(200);
    right(90);
}


// B4
// Initialisation
setPos(300, 300);
changeColor(color.blue);
setLineWidth(10);
faceRight();
// Réalisation
for(let i = 0 ; i < 3 ; i++){
    forward(200);
    left(120);
}


// B5
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceUp();
// Réalisation
forward(200);
changeColor(color.red);
for (let i = 0 ; i < 3 ; i++) {
    forward(100);
    right(120);
}


// B6
// Initialisation
setPos(100, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 2 ; i++){
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green);
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

// B7
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 3 ; i++){
    forward(200);
    left(120);
}
for (let i = 0 ; i < 4 ; i++){
    forward(200);
    right(90);
}


// B8
// Initialisation
setPos(100, 150);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(400);
    right(135);
}


// B9
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
forward(100);
up();
forward(100);
down();
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    right(120);
}


// B10
// Initialisation
setPos(50, 300);
changeColor(color.blue);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(200);
    right(135);
}
up();
forward(400);
changeColor(color.yellow);
down();
for (let i = 0 ; i < 8 ; i++){
    forward(400);
    left(135);
}
right(90)
up();
forward(200);
changeColor(color.red);
down();
for (let i = 0 ; i < 8 ; i++){
    forward(200);
    right(135);
}

// B11
// Initialisation
setPos(50,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for ( let i= 0 ; i < 4 ; i++) {
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}

// B12
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 3 ; i++) {
    right(90);
    forward(50);
}
up();
forward(50);
down();
changeColor(color.green);
for (let i = 0 ; i < 3 ; i++) {
    forward(50);
    right(90);
}

// B13
// Initialisation
setPos(300, 300);
changeColor(color.green);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

// B14
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
forward(100)
for (let i = 0 ; i < 6 ; i++){
    right(120);
    forward(200);
    left(120);
    forward(200);
}

// B15
// Initialisation
setPos(300, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 4 ; i++){
    forward(200);
    arcLeft(100, 90);
}

// B16
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
arcLeft(400, 90);
faceLeft();
for (let i = 0 ; i < 4 ; i++){
    arcLeft(50, 90);
    arcRight(50, 90);
}

// B17
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 6 ; i++){
    arcLeft(100, 180);
    left(120);
}

// B18
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(400);
    left(90);
    forward(100);
    left(45);
}

// B19
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 4 ; i++){
    arcLeft(100, 180);
    faceRight();
}
faceUp();
up();
forward(100);
down();
faceLeft();
for (let i = 0 ; i < 4 ; i++){
    arcLeft(100, 180);
    faceLeft();
}

// B20
// Initialisation
setPos(150, 300);
changeColor(color.yellow);
setLineWidth(10);
faceDown();
// Réalisation
for (let i = 0 ; i < 2 ; i++){
    for (let i = 0 ; i < 2 ; i++){
        forward(200);
        arcLeft(100, 90);
    }
    forward(100);
}
faceRight();
forward(400);
faceDown();
up();
forward(50);
faceLeft();
forward(200);
down();
for (let i = 0 ; i < 2 ; i++){
    arcLeft(50,180)
}

// B21
// Initialisation
setPos(300, 150);
shiftColor(0.6);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 6 ; i++){
    forward(100);
    for (let i = 0 ; i < 2 ; i++){
        left(120);
        forward(50);
    }
    forward(50);
    right(60);
    forward(50);
    right(120);
    forward(50);
    right(120);
    up();
    forward(100);
    down();
    shiftColor(0.1);
}

// B22
// Initialisation
setPos(150, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
left(30)
// Réalisation
for (let i = 0 ; i < 6 ; i++){
    forward(100);
    left(60);
}
right(150);
changeColor(color.red);
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    left(120)
}
changeColor(color.green);
for (let i = 0 ; i < 4 ; i++){
    forward(100);
    right(90);
}
left(60);
for (let i = 0 ; i < 4 ; i++){
    forward(100);
    left(90);
}

// B23
// Initialisation
setPos(150, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
left(45);
// Réalisation
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    right(90);
    forward(100);
    left(90);
}
right(135);
forward(100);
right(45);
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    right(90);
    forward(100);
    left(90);
}
right(135);
forward(100);

// B24
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(200);
    left(135);
}
forward(100);
changeColor(color.green);
for (let i = 0 ; i < 3 ; i++){
    right(135);
    forward(200);
    left(135);
    forward(100);
}
forward(100);
right(90);
forward(50);
for (let i = 0 ; i < 2 ; i++){
    left(90);
    forward(50);
}
right(90);
forward(100);
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    left(135);
    forward(200);
    right(135);
}

// C1
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 4 ; i++){
    for ( let i = 0 ; i < 3 ; i++){
        forward(200);
        right(120);
    }
    forward(200);
}

// C2
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceUp();
// Réalisation
for (let i = 0; i < 5 ; i++){
    for (let i = 0 ; i < 4 ; i++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
}

// C3
// Initialisation
setPos(150, 300);
shiftColor(0.4);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 3 ; i++){
    for (let i = 0 ; i < 8 ; i++){
        forward(200);
        left(135);
    }
    up();
    forward(400);
    shiftColor(0.1);
    down()
}

// C4
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 5 ; i++){
    for (let i = 0 ; i < 3 ; i++){
        forward(100);
        left(120);
    }
    changeColor(color.yellow);
    for (let i = 0 ; i < 4 ; i++){
        forward(100);
        right(90);
    }
    up();
    forward(200);
    down();
    changeColor(color.red);
}

// C5
// Initialisation
setPos(150, 300);
shiftColor(0.15);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 4 ; i++){
    for (let i = 0; i < 8 ; i++){
        forward(400);
        left(135);
    }
    shiftColor(0.25);
    right(90);
}

// C6
// Initialisation
setPos(150, 300);
shiftColor(0.15);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 3 ; i++){
    for (let i = 0 ; i < 4 ; i++){
        forward(200);
        left(120);
    }
    forward(200);
}

// C7
// Initialisation
setPos(150, 300);
shiftColor(0.15);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(100);
    left(45);
    for(let i = 0 ; i < 3 ; i++){
        forward(100);
        right(120);
    }
}

// C8
// Initialisation
setPos(300, 600);
changeColor(color.green);
setLineWidth(10);
faceUp();
// Réalisation
forward(400);
right(45);
for (let i = 0 ; i < 4 ; i++){
    changeColor(color.red);
    for (let i = 0 ; i < 3 ; i++){
        forward(200);
        right(120);
    }
    changeColor(color.yellow);
    forward(200);
    left(90);
}

// C9
// Initialisation
setPos(300, 150);
changeColor(color.green);
setLineWidth(10);
faceUp();
// Réalisation
for (let i = 0 ; i < 3 ; i++){
    left(120);
    forward(400);
    for (let i = 0 ; i < 3 ; i++){
        forward(100);
        right(120);
        for (let i = 0 ; i < 4 ; i++){
            right(90);
            forward(100);
        }
    }
}

// C10
// Initialisation
setPos(300, 150);
changeColor(color.red);
setLineWidth(10);
faceDown();
// Réalisation
for (let i = 0 ; i < 4 ; i++){
    for (let i = 0 ; i < 4 ; i++){
        forward(100);
        for (let i = 0 ; i < 4 ; i++){
            left(90);
            forward(50);
        }
        right(90);
    }
    forward(200);
}

// C11
// Initialisation
setPos(50, 150);
shiftColor(0.6);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 6 ; i++){
    for (let i = 0 ; i < 6 ; i++){
        for (let i = 0 ; i < 3 ; i++){
            forward(100);
            left(120);
        }
        forward(100);
        left(60);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
    right(60);
}

// C12
// Initialisation
setPos(300, 150);
changeColor(color.green);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 4 ; i++){
    for (let i = 0 ; i < 2 ; i++){
        arcLeft(100, 90);
        forward(100);
        left(90);
    }
    arcRight(100, 45);
}
changeColor(color.blue);
left(60);
arcRight(200, 300);
right(120);
for(let i = 0 ; i < 2 ; i++){
    arcLeft(100, 90);
}

// D1
// Initialisation
setPos(15, 400);
changeColor(color.red);
setLineWidth(10);
faceUp();
// Réalisation
for (let i = 0 ; i < 8 ; i++){
    forward(200);
    right(45);
}

// D2
// Initialisation
setPos(30, 300);
changeColor(color.green);
setLineWidth(10);
faceRight();
// Réalisation
forward(100);
faceDown();
forward(200);
faceRight();
forward(300);
faceUp();
forward(100);
faceLeft();
forward(200);

// D3
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
forward(200);
right(135);
forward(300);
left(135);
forward(200);

// D4
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
for (let i = 0 ; i < 6 ; i++){
    faceUp();
    forward(100);
    faceLeft();
    forward(100);
    faceUp();
    forward(50);
    faceRight();
    forward(200);
}

// D5
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceDown();
// Réalisation
for (let i = 0 ; i < 2 ; i++){
    forward(300);
    left(90);
    forward(100);
    left(90);
}
faceUp()
changeColor(color.yellow);
for (let i = 0 ; i < 4 ; i++){
    forward(100);
    right(90);
}

// D6
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let longueur;
// Réalisation
longueur = 100;
forward(longueur);
faceDown();
longueur = 200;
forward(longueur);
faceRight();
longueur = 300;
forward(longueur);

// D7
// Initialisation
setPos(300, 400);
changeColor(color.red);
setLineWidth(10);
faceUp();
let longueur;
// Réalisation
longueur = 100;
forward(longueur);
faceRight();
forward(longueur);
faceUp();
longueur = 200;
forward(longueur);
faceLeft();
forward(longueur);
faceDown();
longueur = 100;
forward(longueur);

// D8
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let longueur;
// Réalisation
for (let i = 0 ; i < 2 ; i++){
    longueur = 200;
    forward(longueur);
    faceDown();
}
for (let i = 0 ; i < 2 ; i++){
    faceLeft();
    longueur = 100;
    forward(longueur);
    faceUp();
    forward(longueur);
}

// D9
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let longueur;
// Réalisation
longueur = 100;
for (let i = 0 ; i < 6 ; i++){
    forward(longueur);
    right(120);
    longueur += 100;
}

// D10
// Initialisation
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let longueur;
// Réalisation
longueur = 100;
for (let i = 0 ; i < 10 ; i++){
    forward(longueur);
    right(90);
    longueur += 50;
}

// D11
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let longueur;
// Réalisation
longueur = 250;
for (let i = 0 ; i < 5 ; i++){
    for (let i = 0 ; i < 3 ; i++){
        forward(longueur)
        left(120)
    }
    forward(longueur);
    longueur -= 50
}

// D12
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let longueur;
// Réalisation
longueur = 100;
for (let i = 0 ; i < 6 ; i++){
    for (let i = 0 ; i < 4 ; i++){
        forward(longueur);
        left(120);
    }
    longueur += 50;
    right(60);
}

// D13
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
let rayon;
// Réalisation
rayon = 100
for (let i = 0 ; i < 8 ; i++){
    arcRight(rayon, 180);
    rayon += 50;
    up();
    forward(100);
    down();
}

// D14
// Initialisation
setPos(150, 300);
changeColor(color.green);
setLineWidth(10);
faceRight();
left(45)
let longueur;
// Réalisation
for (let i = 0 ; i < 2 ; i++){
    longueur = 50;
    for (let i = 0 ; i < 4 ; i++){
        forward(longueur);
        right(90);
        forward(longueur);
        left(90);
        longueur += 50;
    }
    right(180);
}

// D15
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceDown();
let longueur;
// Réalisation
longueur = 100;
let angle = 90;
for (let i = 0 ; i < 10 ; i++){
    forward(longueur);
    right(angle-180);
    angle += 5;
    longueur += 20;
}

// D16
// Initialisation
setPos(150, 300);
changeColor(color.green);
setLineWidth(10);
faceDown();
let rayon;
// Réalisation
forward(200);
right(120);
forward(100);
faceLeft();
for (let i = 0 ; i < 3 ; i++){
    forward(100);
    right(90)
}
left(120);
forward(100);
faceRight();
changeColor(color.yellow);
up();
forward(100);
down();
rayon = 100;
for (let i = 0 ; i < 3 ; i++){
    down();
    arcRight(rayon, 180);
    rayon += 50;
    up();
    arcRight(rayon, 180);
    rayon += 50;
}

// E1
// Initialisation
setPos(150, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
function star (){
    for (let i = 0 ; i < 5 ; i++){
        forward(150);
        right(180-36);
    }
}
star();
forward(200);
star();
forward(400);
changeColor(color.green);
star();

// E2
// Initialisation
setPos(150, 300);
changeColor(color.blue);
setLineWidth(10);
faceRight();
// Réalisation
function aile(){
    forward(400);
    for(let i = 0 ; i < 2 ; i++){
        right(120);
        forward(200);
    }
    left(60);
    forward(200);
}
for (let i = 0 ; i < 2 ; i++){
    aile();
}
right(90);
changeColor(color.red);
for (let i = 0 ; i < 2 ; i++){
    aile();
}

// E3
// Initialisation
setPos(150, 300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
// Réalisation
function carre(){
    for (let i = 0 ; i < 4 ; i++){
        forward(100);
        left(90);
    }
}
for (let i = 0 ; i < 6 ; i++){
    carre();
    forward(200);
    left(60);
}

// E4
// Initialisation
setPos(15, 550);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
function marche(){
    for(let i =  0 ; i < 2 ; i++){
        forward(100);
        faceUp();
        forward(100);
        faceRight();
    }
}
marche();
changeColor(color.yellow);
forward(200);
changeColor(color.blue);
marche();
changeColor(color.green);
marche();
forward(200);

// E5
// Initialisation
setPos(150, 300);
changeColor(color.blue);
setLineWidth(10);
faceDown();
// Réalisation
function L(){
    forward(200);
    left(90);
    forward(100);
}
L();
changeColor(color.green);
L();
changeColor(color.yellow);
L()
changeColor(color.red);
right(90);
L();

// E6
// Initialisation
setPos(150, 300);
changeColor(color.green);
setLineWidth(10);
faceRight();
// Réalisation
function triangle(){
    for (let i = 0 ; i < 3 ; i++){
        forward(200);
        right(120);
    }
    forward(200);
}
triangle();
changeColor(color.red);
triangle();
up();
forward(200);
right(90);
changeColor(color.yellow);
down();
triangle();

// E7
// Initialisation
setPos(15, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
function motif(){
    down();
    for (let i = 0 ; i < 2 ; i++){
        forward(100);
        left(45);
        forward(200);
        left(135); 
    }
    up();
}
for (let i = 0 ; i < 2 ; i++){
    motif();
    forward(200);
}
changeColor(color.blue);
for (let i = 0 ; i < 3 ; i++){
    motif();
    forward(100);
}

// E8
// Initialisation
setPos(15, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
function triangle(){
    for(let i = 0 ; i < 3 ; i++){
        forward(200);
        left(120);
    }
    for(let i = 0 ; i < 3 ; i++){
        forward(100);
        right(120);
    }
}
triangle();
forward(200);
changeColor(color.blue);
triangle();
forward(200);
faceDown();
changeColor(color.yellow);
triangle();

// E9
// Initialisation
setPos(15, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
function maison(){
    faceUp();
    forward(200);
    right(45);
    forward(100);
    right(90);
    forward(100);
    right(45);
    forward(200);
    faceRight();
}
forward(100);
maison();
forward(200);
maison();
forward(100);
changeColor(color.green);
maison();
forward(200);

// E10
// Initialisation
setPos(15, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();
// Réalisation
function croix(){
    down();
    for (let i = 0 ; i < 4 ; i++){
        for (let i = 0 ; i < 2 ; i++){
            forward(50);
            right(90);
        }
        forward(50);
        left(90);
    }
    up();
}
for (let i = 0 ; i < 3 ; i++){
    for (let i = 0 ; i < 2 ; i++){
        croix();
        forward(200);
        faceUp();
    }
    faceRight();
    shiftColor(0.3)
}

// E11
// Initialisation
setPos(15, 300);
shiftColor(0.75);
setLineWidth(10);
faceRight();
// Réalisation
function forme(){
    forward(200);
    right(60);
    forward(100);
    right(60);
    forward(100);
}
for (let i = 0 ; i < 3 ; i++){
    forme();
    up();
    forward(100);
    down();
    shiftColor(-0.1);
}
up();
faceUp();
forward(100);
down();
forward(100);
for (let i = 0 ; i < 3 ; i++){
    forme();
}
*/
// E12
// Initialisation
setPos(15, 300);
shiftColor(0.6);
setLineWidth(10);
faceRight();
// Réalisation
function carre(){
    let longueur = 100;
    for (let i = 0 ; i < 3 ; i++){
        down();
        for (let i = 0 ; i < 4 ; i++){
            forward(longueur);
            arcLeft(100, 90);
        }
        longueur += 50;
    }
    up();
    faceDown();
    shiftColor(0.25);
}
carre();
forward(200);
carre();
faceRight();
forward(500);
faceRight();
carre();