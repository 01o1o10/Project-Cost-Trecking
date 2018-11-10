module.exports = {
    projeleriGetir: function(cb){
        var q = "select * from projects"
        sql.query(q, function(projeler){
            cb(projeler)
        })
    },

    getProject: function(id, cb){
        var q = "select * from projects where pr_id=" + id
        sql.query(q, function(project){
            q = "select * from operations op, products pd, categories ctg where op_pj=" + id + " and op_pd=pd_id and ctg_id=pd_ctg"
            sql.query(q, function(results){
                cb(project[0], results)
            })
        })
    },

    getIslem: function(id, cb){
        sql.query("select * from operations where op_id=" + id, function(islem){
            cb(islem[0])
        })
    }
}