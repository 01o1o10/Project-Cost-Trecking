/////     IMPORTS
const sql = require('./public/js/modules/sql')
const ui = require('./public/js/modules/ui')
const projeler = require('./public/js/modules/projeler')
const ekle = require('./public/js/modules/ekle')




/////     VARIABLES






$(document).ready(function(){
    /////     OPERATIONS
    start()





    //// EVENTS
    document.getElementById('kategori-ekle-submit').onclick = function(){
        ekle.kategoriEkle(ui.kategoriEkleModalOku(), function(status, data){
            if(status){
                ui.alert("kategori-ekle-succes", "Kayıt başarıyla eklendi!", true)
                $('.select-kategori').append('<option value="' + data.insertId + '">' + data.kategori + '</option>')
            }
            else{
                ui.alert("kategori-ekle-failed", data, false)
            }
        })
    }

    document.getElementById('urun-ekle-submit').onclick = function(){
        ekle.urunEkle(ui.urunEkleModalOku(), function(status, data){
            if(status){
                ui.alert("urun-ekle-succes", "Kayıt başarıyla eklendi!", true)
                $('.select-urun').append('<option value="' + data.insertId + '">' + data.adi + '</option>')
            }
            else{
                ui.alert("urun-ekle-failed", data, false)
            }
        })
    }

    document.getElementById('proje-ekle-submit').onclick = function(){
        ekle.projeEkle(ui.projeEkleModalOku(), function(status, data){
            if(status){
                ui.alert("proje-ekle-succes", "Kayıt başarıyla eklendi!", true)
                $('.select-proje').append('<option value="' + data.insertId + '">' + data.adi + '</option>')
                var sonSatir = $('#projeler').children().last()
                if(sonSatir.children.length != 4){
                    sonSatir.append('<div class="col item" id="' + data.insertId + '"><div class="row"><div class="col-sm-10 item-left"><h3>' + data.adi + '</h3></div><div class="col-sm-2 item-right"><div class="vr"></div><img class="updat-proje" src="./public/images/64/pen_1.png"><img class="delete-proje" src="./public/images/64/bin.png"></div></div></div>')
                }else{
                    $('#projeler').append('<div class="row projeler-satir"><div class="col item" id="' + data.insertId + '"><div class="row"><div class="col-sm-10 item-left"><h3>' + data.adi + '</h3></div><div class="col-sm-2 item-right"><div class="vr"></div><img class="updat-proje" src="./public/images/64/pen_1.png"><img class="delete-proje" src="./public/images/64/bin.png"></div></div></div></div>')
                }
            }
            else{
                ui.alert("proje-ekle-failed", data, false)
            }
        })
    }

    document.getElementById('kullanici-ekle-submit').onclick = function(){
        ekle.kullaniciEkle(ui.kullaniciEkleModalOku(), function(status, data){
            if(status){
                ui.alert("kullanici-ekle-succes", "Kayıt başarıyla eklendi!", true)
            }
            else{
                ui.alert("kullanici-ekle-failed", data, false)
            }
        })
    }

    document.getElementById('islem-ekle-submit').onclick = function(){
        ekle.islemEkle(ui.islemEkleModalOku(), function(status, data){
            if(status){
                ui.alert("islem-ekle-succes", "Kayıt başarıyla eklendi!", true)
            }
            else{
                ui.alert("islem-ekle-failed", data, false)
            }
        })
    }

    $(document).on('click', '.proje-item', function(){
        $('#projeler').hide()
        $('#islemler').show()
        var projeId = this.parentElement.parentElement.id
        projeler.getProject(projeId, function(proje, islemler){
            $('#baslik').text(proje.pr_ad)
            $('#proje-adresi').text(proje.pr_adresi)
            $('#proje-alani').append(proje.pr_arsa_alani + "m")
            $('#insaat-alani').append(proje.pr_ins_alani + "m")
            $('#proje-ins-mal').text(proje.pr_ins_mal + ' TL')
            $('#proje-tah-ins-mal').text(proje.pr_tah_ins_mal + ' TL')
            $('#proje-ger-ins-mal').text(proje.pr_ger_ins_mal + ' TL')
            $('#proje-har-top-mal').text(proje.pr_har_mal + ' TL')
            $('#proje-bas-tar').text(proje.pr_bas_tar.toISOString().slice(0, 10))
            $('#proje-tah-bit-tar').text(proje.pr_bit_tar.toISOString().slice(0, 10))

            
            var html = ""
            for(i in islemler){
                if(i % 4 == 0){
                    html += '<div class="row islem-satir">'
                }
                html += '<div class="col item" id="' + islemler[i].op_id + '"><div class="row" style="margin: 0; padding: 0;"><div class="col-sm-10 item-left islem-item"><h4>' + islemler[i].pd_name + '</h4>' + '<p><b>Toplam fiyat: </b>' + islemler[i].op_toplam_fiyat + ' ' + islemler[i].op_para_birimi +'</p></div><div class="col-sm-2 item-right"><div class="vr"></div><img class="updat-islem" src="./public/images/64/pen_1.png"><img class="delete-islem" src="./public/images/64/bin.png"></div></div></div>'
                if(i % 4 == 3){
                    html += '</div>'
                }
            }
            if(i % 4 != 3){
                html += '</div>'
            }
            document.getElementById('proje-islemleri').innerHTML = html
        })
    })

    $(document).on('click', '.islem-item', function(){
        $('#islemler').hide()
        $('#islem').show()
        var urunAdi = this.getElementsByTagName('h4')[0].innerText
        var islemId = this.parentElement.parentElement.id
        projeler.getIslem(islemId, function(islem){
            $('#baslik').text($('#baslik').text() + ' / ' + urunAdi)
            $('#islem-tarihi').text(islem.op_tarih.toISOString().slice(0, 10))
            $('#islem-tedarikci').append(islem.op_tedarikci)
            $('#islem-cari-firma').append(islem.op_cari_firma)
            $('#islem-para-birimi').text(islem.op_para_birimi)
            $('#islem-birim-fiyat').text(islem.op_birim_fiyat + ' ' + islem.op_para_birimi)
            $('#islem-toplam-fiyat').text(islem.op_toplam_fiyat + ' ' + islem.op_para_birimi)
        })
    })

    document.getElementById('back').onclick = function(){
        var baslik = document.getElementById('baslik').innerText
        if(baslik.includes('/')){
            $('#islem').hide()
            $('#islemler').show()
            document.getElementById('baslik').innerText = baslik.split(' / ')[0]
        }
        else{
            $('#islemler').hide()
            $('#projeler').show()
            document.getElementById('baslik').innerText = 'Projeler'
        }
    }

    




    /////     FUNCTIONS
    function start(){
        sql.startconnection()
        projeler.projeleriGetir(function(projeler){
            ui.projeleriListele(projeler)
        })
        setSelects()
    }

    function setSelects(){
        sql.query("select * from categories", function(categories){
            for(i in categories){
                $('.select-kategori').append('<option value="' + categories[i].ctg_id + '">' + categories[i].ctg_name + '</option>')
            }
        })
        sql.query("select * from projects", function(projects){
            for(i in projects){
                $('.select-proje').append('<option value="' + projects[i].pr_id + '">' + projects[i].pr_ad + '</option>')
            }
        })
        sql.query("select * from products", function(products){
            for(i in products){
                $('.select-urun').append('<option value="' + products[i].pd_id + '">' + products[i].pd_name + '</option>')
            }
        })
    }
})