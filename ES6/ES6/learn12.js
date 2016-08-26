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
    function dedup (arr) {
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