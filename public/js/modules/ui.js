module.exports = {

    projeleriListele: function(projeler){
        var html = ""
        for(i in projeler){
            if(i % 4 == 0){
                html += '<div class="row projeler-satir">'
            }
            html += '<div class="col item" id="' + projeler[i].pr_id + '"><div class="row"><div class="col-sm-10 item-left proje-item"><h3>' + projeler[i].pr_ad + '</h3></div><div class="col-sm-2 item-right"><div class="vr"></div><img class="updat-proje" src="./public/images/64/pen_1.png"><img class="delete-proje" src="./public/images/64/bin.png"></div></div></div>'
            if(i % 4 == 3){
                html += '</div>'
            }
        }
        if(i % 4 != 3){
            html += '</div>'
        }
        document.getElementById('projeler').innerHTML = html
    },

    islemEkleModalOku: function(){
        var data = {}
        data.proje = document.getElementById('islem-ekle-proje').value
        data.urun = document.getElementById('islem-ekle-urun').value
        data.tarih = document.getElementById('islem-ekle-tarih').value
        data.tedarikci = document.getElementById('islem-ekle-tedarikci').value
        data.carifirma = document.getElementById('islem-ekle-carifirma').value
        data.birimfiyat = document.getElementById('islem-ekle-birimfiyat').value
        data.toplamfiyat = document.getElementById('islem-ekle-toplamfiyat').value
        data.parabirimi = document.getElementById('islem-ekle-parabirimi').value
        return data
    },

    urunEkleModalOku: function(){
        var data = {}
        data.adi = document.getElementById('urun-ekle-adi').value
        data.kategorisi = document.getElementById('urun-ekle-kategori').value
        return data
    },

    kategoriEkleModalOku: function(){
        var data = {}
        data.kategori = document.getElementById('kategori-ekle-ismi').value
        return data
    },

    projeEkleModalOku: function(){
        var data = {}
        data.adi = document.getElementById('proje-ekle-adi').value
        data.adresi = document.getElementById('proje-ekle-adresi').value
        data.arsaalani = document.getElementById('proje-ekle-arsaalani').value
        data.insalani = document.getElementById('proje-ekle-insalani').value
        data.insmal = document.getElementById('proje-ekle-insmal').value
        data.tahinsmal = document.getElementById('proje-ekle-tahinsmal').value
        data.gerinsmal = document.getElementById('proje-ekle-gerinsmal').value
        data.bastar = document.getElementById('proje-ekle-bastar').value
        data.bittar = document.getElementById('proje-ekle-bittar').value
        return data
    },

    kullaniciEkleModalOku: function(){
        var data = {}
        data.ismi = document.getElementById('kullanici-ekle-ismi').value
        data.soyismi = document.getElementById('kullanici-ekle-soyismi').value
        data.uname = document.getElementById('kullanici-ekle-uname').value
        data.pass = document.getElementById('kullanici-ekle-ismi').value
        data.yetki = document.getElementById('kullanici-ekle-yetki').value
        return data
    },





    
    /////     ALERT FUNCTIONS
    alert: function(id, message, succes){
        var alrt = $('#' + id)
        alrt.html('')
        if(succes){
            alrt.html('<strong>Succes!</strong> ' + message)
        }
        else{
            alrt.html('<strong>Failed!</strong> ' + message)
        }
        alrt.slideToggle('slow');
        setTimeout(function(){
            alrt.slideToggle('slow');
        }, 3000);
    },

    setAlertModal: function(message, succes){
        if(succes){
            $('#alert-modal-suc').html('<strong>Succes!</strong> ' + message)
            $('#alert-modal-close').attr('class', 'btn btn-success')
            $('#alert-modal-suc').show()
            $('#alert-modal-fail').hide()
        }
        else{
            $('#alert-modal-fail').html('<strong>Failed!</strong> ' + message)
            $('#alert-modal-close').attr('class', 'btn btn-danger')
            $('#alert-modal-fail').show()
            $('#alert-modal-suc').hide()
        }
        document.getElementById('alert-modal-submit').click()
    },
}