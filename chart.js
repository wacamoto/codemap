var Chart = function (table){

        this.table = table;

    this.getStatus = function(code, count, status) {
        if(typeof count == 'undefined') {count = 0}
        if(typeof status== 'undefined') {status= 0}
        if (code % 2) {
            status.push(this.table[count]);
        }
        code = Math.round(code/2);
        if (code == 0) {
            return; 
        }
        count += 1;
        return this.getCode(code, count, status);
    }

    this.getCode = function(status) {
        var code = 0;
        for (var i in status) {
            code += this.table[i];
        }
        return code;
    }

    function() {}
}

module.exports = Chart;



