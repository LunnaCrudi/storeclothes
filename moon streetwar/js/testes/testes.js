let data_hora = new Date()
let hora = data_hora.getHours()
let previsao_tempo = "chuvoso"

if (hora < 12){
    console.log("Bom dia!!!");
    if (previsao_tempo == "chuvoso")
    {
        console.log("Está chovendo, leve um guarda-chuva consigo")
    }
}
else{
    if(hora >= 12 && hora < 18)
    {
        console.log("Boa tarde...");
        if (previsao_tempo == "chuvoso")
    {
        console.log("Está chovendo, leve um guarda-chuva consigo")
    }
    }
    else{
        console.log("Boa noite...");
        if (previsao_tempo == "chuvoso")
    {
        console.log("Está chovendo, leve um guarda-chuva consigo")
    }
    }
}
//para funcionar js aqui no vscode usa o -console.log- mas no chrome tem que substituir por -alert-