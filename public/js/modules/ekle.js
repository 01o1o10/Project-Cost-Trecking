module.exports = {
    kategoriEkle: function(data, cb){
        if(data.kategori){
            sql.query("insert into categories(ctg_name) values('" + data.kategori + "')", function(check){
                if(check.insertId){
                    data.insertId = check.insertId
                    cb(true, data)
                }
                else {
                    cb(false, 'Eklemekte olduğunuz kategori zaten ekli!')
                }
            })
        }
        else {
            cb(false, 'Alanlar boş bırakılamaz!')
        }
    },

    urunEkle: function(data, cb){
        if(data.adi && data.kategorisi){
            var q = "insert into products(pd_name, pd_ctg) values('" + data.adi + "', '" + data.kategorisi + "')"
            sql.query(q, function(check){
                if(check.insertId){
                    data.insertId = check.insertId
                    cb(true, data)
                }
                else{
                    cb(false, "Eklemekte olduğunuz ürün zaten ekli!")
                }
            })
        }
        else {
            cb(false, "Alanlar boş bırakılamaz!")
        }
    },

    kullaniciEkle: function(data, cb){
        if(data.ismi && data.soyismi && data.uname && data.pass && data.yetki){
            var q = "insert into users(u_fname, u_lname, u_uname, u_pass, u_aut) values('" + data.ismi + "', '" + data.soyismi + "', '" + data.uname + "', '" + data.pass + "', '" + data.yetki + "')"
            sql.query(q, function(check){
                if(check.affectedRows){
                    cb(true, data)
                }
                else {
                    cb(false, "Eklemekte olduğunuz kullanıcı adı kullanımda!")
                }
            })
        }
        else{
            cb(false, "Alanlar boş brakılamaz!")
        }
    },

    projeEkle: function(data, cb){
        if(data.adi && data.adresi && data.arsaalani && data.insalani && data.insmal && data.tahinsmal && data.bastar && data.bittar){
            var q = "insert into projects(pr_ad, pr_adresi, pr_arsa_alani, pr_ins_alani, pr_ins_mal, pr_tah_ins_mal, pr_ger_ins_mal, pr_bas_tar, pr_bit_tar) values('" + data.adi + "', '" + data.adresi + "', " + data.arsaalani + ", " + data.insalani + ", " + data.insmal + ", " + data.tahinsmal + ", " + data.gerinsmal + ", '" + data.bastar + "', '" + data.bittar + "')"
            sql.query(q, function(check){
                if(check.insertId){
                    data.insertId = check.insertId
                    cb(true, data)
                }
                else {
                    cb(false, "Eklemekte olduğunuz proje zaten ekli!")
                }
            })
        }
        else {
            cb(false, "Alanlar boş bırakılamaz!")
        }
    },

    islemEkle: function(data, cb){
        if(data.proje && data.urun && data.tarih && data.tedarikci && data.carifirma && data.birimfiyat && data.toplamfiyat && data.parabirimi){
            var q = "insert into operations(op_pj, op_pd, op_tarih, op_tedarikci, op_birim_fiyat, op_toplam_fiyat, op_para_birimi, op_cari_firma) values(" + data.proje + ", " + data.urun + ", '" + data.tarih + "', '" + data.tedarikci + "', " + data.birimfiyat + ", " + data.toplamfiyat + ", '" + data.parabirimi + "', '" + data.carifirma + "')"
            sql.query(q, function(check){
                console.log(check)
                if(check.insertId){
                    data.insertId = check.insertId
                    cb(true, data)
                }
                else{
                    cb(false, "Hata oluştu yazılımcınızla görüşün!")
                }
            })
        }
        else {
            cb(false, "Alanalar boş brakılamaz!")
        }
    }
}