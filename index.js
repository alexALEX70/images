function func(start, end) {

    for (let i = start; i <= end; i++) {
        let res = '';

        if (i % 3 == 0)
            res += 'Fizz';

        if (i % 5 == 0)
            res += 'Buzz';

        console.log(res || i);
    }
}
func(1, 50);
