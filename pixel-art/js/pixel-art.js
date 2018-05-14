var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorId.style.backgroundColor = colorActual;
  })
);

// Mis variables
var paletaId = document.getElementById('paleta');

var pixelesId = document.getElementById('grilla-pixeles');

var colorId = document.getElementById('indicador-de-color');

var estadoMouse = 0;

// Mis funciones
var paletaColores = function(){
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = "color-paleta";
    paletaId.appendChild(nuevoDiv);
    nuevoDiv.addEventListener("click", function(event){
      var clickedElem = event.target.style.backgroundColor;
      colorId.style.backgroundColor = clickedElem;
    });
  }
}

var grillaPixeles = function(){
  for (var i = 0; i < 1750; i++) {
    var nuevoDiv = document.createElement('div');
    pixelesId.appendChild(nuevoDiv);
    nuevoDiv.addEventListener("mouseover", function(event){
      if (estadoMouse === 1){
        var colorPixel = document.getElementById("indicador-de-color").style.backgroundColor;
        var celdaPixel = event.target;
        celdaPixel.style.backgroundColor = colorPixel;
      }
    });
  }
}

document.body.addEventListener("mousedown", function(){
  estadoMouse = 1;
});

document.body.addEventListener("mouseup", function(){
  estadoMouse = 0;
});

// Invocando funciones
paletaColores()
grillaPixeles()