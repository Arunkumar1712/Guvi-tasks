
setTimeout(() => {
    console.log('1')
    let res = 10;

    document.getElementById('add').innerText = res;
    setTimeout(() => {

        let res = 9;
        console.log('2')
        document.getElementById('add').innerText = res;
        setTimeout(() => {
            let res = 8;
            console.log('3')
            document.getElementById('add').innerText = res;
            setTimeout(() => {
                let res = 7;
                console.log('4')
                document.getElementById('add').innerText = res;
                setTimeout(() => {
                    let res = 6;
                    console.log('5')
                    document.getElementById('add').innerText = res;
                    setTimeout(() => {
                        let res = 5;
                        console.log('6')
                        document.getElementById('add').innerText = res;
                        setTimeout(() => {
                            let res = 4;
                            console.log('7')
                            document.getElementById('add').innerText = res;
                            setTimeout(() => {
                                let res = 3;
                                console.log('8')
                                document.getElementById('add').innerText = res;
                                setTimeout(() => {
                                    let res = 2;
                                    console.log('9')
                                    document.getElementById('add').innerText = res;
                                    setTimeout(() => {
                                        let res = 1;
                                        console.log('10')
                                        document.getElementById('add').innerText = res;
                                        setTimeout(() => {
                                            let img=document.createElement('img')
                                            img.classList.add('imgstyle')
                                            img.setAttribute('src','./51zBs21lrsL.jpg')
                                            document.body.append(img)
                                            let res="Happy Independence Day"
                                            document.getElementById('add').innerText = res;

                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)

    }, 1000)
}, 1000)