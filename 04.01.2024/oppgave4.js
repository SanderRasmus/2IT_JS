let alder = prompt("Hvor gammel er du?")

if(alder < 18){
    document.write("Du kan kjøpe barnebillet.")
}
else if(alder >= 18 && alder <= 66){
    document.write("Du kan kjøpe voksenbillet.")
}
else if(alder >= 67){
    document.write("Du kan kjøpe honørbillet.")
}