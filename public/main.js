console.log('我是main.js2')

getCSS.onclick = () => {
    const request = new XMLHttpRequest() // readyState=0
    request.open('GET', '/1.css') // readyState=1
    request.onreadystatechange = () => { // readyState=3,4
        if (request.readyState === 4) { // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerText = request.response
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.send() // readyState=2
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerText = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                alert('我是4.xml中的内容：' + text.trim())
            } else {
                alert('加载XML失败')
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            } else {
                alert('加载JSON失败')
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li")
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            } else {
                alert('加载page失败')
            }
        }
    }
    request.send()
}