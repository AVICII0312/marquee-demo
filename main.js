let n
初始化()
setInterval(() => {
    getLeave(currentImages(n))
        .one('transitionend', (y) => {
            getEnter($(y.currentTarget))
        })

    getCurrent(currentImages(n + 1))

    n += 1
    console.log(`${x(n)}`)

}, 2000)


function 初始化() {
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function currentImages(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
function getLeave($node) {
    return $node.removeClass('current').addClass('leave')
}
function getEnter($node) {
    return $node.removeClass('leave').addClass('enter')
}
function getCurrent($node) {
    return $node.removeClass('enter').addClass('current')
}
function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }

    }
    return n
}