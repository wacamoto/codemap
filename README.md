#codemap
mapping code to status

### npm install
```
npm install code-map
```

###how to use


```javascript
> var CodeMap = require('code-map');
> var table = [ 'open a', 'open b', 'open c', 'open d', 'open e']
>
> var codemap = new CodeMap(table);
>
> codemap.getStatus(21);
[ 'open a', 'open c', 'open e' ]
>
> codemap.getCode(['open a', 'open b', 'open e']);
19
>
> codemap.equal(21, ['open a', 'open c', 'open e']);
true
>
> codemap.have(21, ['open a', 'open b', 'open c']);
false

```
