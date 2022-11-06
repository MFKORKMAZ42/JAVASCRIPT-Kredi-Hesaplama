function kredıHesapla()
{
   var cekilecekTutar,vadeSayisi;
   var aylikTaksit,odenecekToplamTutar;

   cekilecekTutar=document.getElementById("txtKrediTutari").value
    var liste= document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    odenecekToplamTutar=cekilecekTutar*1.1;
    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML=`Geri ödeme toplamı: ${odenecekToplamTutar}<br>Aylik taksit tutarınız: ${aylikTaksit}`;
    document.write(h5);
    

}