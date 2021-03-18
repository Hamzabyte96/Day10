function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Sinan Sakic",
            title: "Ne tuguj druze stari",
            release_year: 1978,
            formats: {
                1: "DC",
                2: "T8",
                3: "PL"
            },
        },
        
    };
    return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;