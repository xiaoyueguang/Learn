{
    const s = new Set()
    [1, 2, 3, 4, 4, 5, 3, 2].map(data => s.add(data))

    console.log(s)  //=> Set{1, 2, 3, 4, 5}
    s.size  //=> 5
}
{
    const s = new Set([1, 2, 3, 4, 5, 4, 3, 2])
    console.log(s)  //=> Set{1, 2, 3, 4, 5}
    s.size //=> 5
}
{
    function dedupe (arr) {
        return [... new Set(arr)]
    }

    const arr = [1, 2, 3, 2, '1']
    console.log(dedup(arr))
}
{
    const s = new Set()
    s.add(NaN)  //=> Set(NaN)
    s.add(NaN)  //=> Set(NaN)
    s.add([])   //=> Set(NaN, [])
    s.add([])   //=> Set(NaN, [], [])
    s.add({})   //=> Set(NaN, [], [], {})
    s.add({})   //=> Set(NaN, [], [], {}, {})
    s.add(undefined)   //=> Set(NaN, [], [], {}, {}, undefined)
    s.add(undefined)   //=> Set(NaN, [], [], {}, {}, undefined)
    s.add(null)   //=> Set(NaN, [], [], {}, {}, undefined, null)
    s.add(null)   //=> Set(NaN, [], [], {}, {}, undefined, null)
}
{
	const s = new Set([1, 2, 3])
	console.log(s.keys())		//=> SetIterator { 1, 2, 3 }
	console.log(s.values())		//=> SetIterator { 1, 2, 3 }
	console.log(s.entries())	//=> SetIterator { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
}
{
    const m = new Map([['name', 'lin'], ['age', 18]])
    const o = 'sex'
    m.set(o, 'boy')
    m.get(o)    //=> boy
    m.get('name')   //=> lin
    m.get('age')    //=> 18
}
{
    const m = new Map()
    const o = {a: 1}
    const q = {a: 1}
    m.set(o, 111)
    m.set(q, 222)
    m.get(o)    //=> 111
    m.get(q)    //=> 222
    m.set([], 333)
    m.size  //=> 3
    m.set([], 444)
    m.size  //=> 4
}