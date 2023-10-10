let li = document.querySelectorAll('ul li')
let article = document.querySelectorAll('article')
li.forEach((val) => {
    val.addEventListener('click', () => {

        let titr = val.getAttribute('data-titr')

        //reset colors

        li.forEach((val) => {
            val.classList.remove('bg-white')
            val.classList.add('hover:bg-black', 'hover:text-white', 'bg-black')
        })
        //reset colors

        checkArticle(titr, val)
    })
})

function checkArticle(titr, _li) {
    article.forEach((val) => {
        let data = val.getAttribute('data-data')
        if (data == titr) {
            val.classList.remove('hidden')
            _li.classList.add('bg-white')
            _li.classList.remove('hover:bg-black', 'hover:text-green-800', 'bg-black')
        } else {
            val.classList.add('hidden')
        }
    })
}
function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("digital").innerText = time;
    document.getElementById("digital2").innerText = time;

    setTimeout(showTime, 1000);

}

let flag = ''
let mili = 0
let sec = 0
let min = 0
const btn = document.querySelectorAll('#cornometerTimer button')
btn[0].addEventListener('click', (e) => {
    if (
        e.target.getAttribute('data-status') == 'off'
    ) {
        flag = setInterval(() => {
            if (mili < 99) {
                mili++
            } else {
                mili = 0
                if (sec < 59) {
                    sec++
                } else {
                    sec = 0
                    if (min < 59) {
                        min++
                    } else {
                        min = 0
                    }
                    document.getElementById('min').innerHTML = min

                }
                document.getElementById('sec').innerHTML = sec

            }
            document.getElementById('mili').innerHTML = mili

        }, 10);
        e.target.setAttribute('data-status', 'on')
    }
})

btn[1].addEventListener('click', () => {
    btn[0].setAttribute('data-status', 'off')
    clearInterval(flag)
})
btn[2].addEventListener('click', () => {

    btn[1].click()
    mili = 0
    min = 0
    sec = 0
    document.getElementById('mili').innerHTML = mili
    document.getElementById('sec').innerHTML = sec
    document.getElementById('min').innerHTML = min

})
showTime()