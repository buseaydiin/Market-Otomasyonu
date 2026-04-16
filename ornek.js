const readline = require('readline-sync');
const input = require('readline-sync');
let urunler = ["Elma", "Muz", "Süt", "Ekmek"];
let fiyat = [10, 15, 25, 8];
let stok = [20, 20, 10, 30];
let sepet = [];



let menu = (
  "===== MARKET OTOMASYONU =====\n" +
  "1 - Urunleri Gor\n" +
  "2 - Sepete Urun Ekle\n" +
  "3 - Sepeti Gor\n" +
  "4 - Sepetten Urun Sil\n" +
  "5 - Toplam Tutari Goster\n" +
  "6 - Odeme Yap\n" +
  "7 - Stok Ekle (Yonetici)\n" +
  "8 - Cikis\n" +
  "Seciminizi yapin: "
);

function stokEkle()
{
        let stok = {}
    console.log("stok eklendi");
}


let secim = readline.question(menu);
switch(secim) {
    case "1":
        console.log("Ürün Listesi:")
        console.log(urunler);
        break;
    

    case "8":
        console.log("Güle güle!");
        break;
        
    default:
        console.log("Seçim yapmadınız veya geçersiz bir tuşa bastınız.");
        break;
}
