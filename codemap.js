//
//  Code Map Tranfer 
//

class CodeMap {
    constructor(table) {
        this.table = table;
    }

    getStatus(code, count=0, status=[]) {
        this.checkCodeExist(code);
        while (code) {
            if (code % 2) status.push(this.table[count]);
            code = Math.floor(code / 2);
            count += 1;
        }
        return status;
    }

    getCode(status) {
        this.checkStatusExist(status);
        var code = 0;
        for (var i=0; i<status.length; i++) {
            var index = this.table.indexOf(status[i]);
            code += Math.pow(2, index);
        }
        return code;
    }

    equal(code, status) {
        return this.getCode(status) == code;
    }

    have(code, status) {
        var achieve = this.getStatus(code);
        for (var i = 0; i < status.length; i++) {
            if (achieve.indexOf(status[i]) == -1) return false;
        }
        return true;
    }
    
    checkCodeExist(code) {
        if (code >= Math.pow(2, this.table.length)) {
            throw new Error("code is not exist");
        }
    }

    checkStatusExist(status) {
        for (var i=0; i<status.length; i++) {
            var isFind = this.table.indexOf(status[i])
            if (isFind == -1) throw new Error('status is not exist');
        }
    }
}

module.exports = CodeMap;

