window.onload = function()
{
    var colores = {
        "colors": [
            {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,255,255,1],
                "hex": "#000"
            }
            },
            {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0,0,0,1],
                "hex": "#FFF"
            }
            },
            {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,0,0,1],
                "hex": "red"
            }
            },
            {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0,0,255,1],
                "hex": "#00F"
            }
            },
            {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255,255,0,1],
                "hex": "#FF0"
            }
            },
            {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0,255,0,1],
                "hex": "#0F0"
            }
            }
        ]
    }
    var coloresDiv = document.getElementById("colores");

    colores.colors.forEach(function(co){
        coloresDiv.innerHTML = coloresDiv.innerHTML + 
        '<div style = "background: ' + co.code.hex + '; padding: 20px; margin-bott: 10px;">'+
            '<div>' + co.color + '</div>' +
            '<div>' + (co.category ? co.category: "") + '</div>' + 
            '<div>' + (co.type ? co.type : "") +'</div>' +
            '<div>rgba(' + co.code.rgba.join(',') + ')</div>'+
            '<div>'+ co.code.hex + '</div>' + 
        '</div/'

    });
}

    
