const puppeteer = require('puppeteer')
const express = require('express')

async function exec (index = 1) {
  // 创建一个浏览器 launch 可接受参数 自定义
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // 跳转
  await page.goto(`https://s.taobao.com/search?q=javascript&s=${(index - 1) * 44}`)
  // 截图
  // await page.screenshot({path: `screenshots/taobao-${index}.png`});

  // 页面 JS 执行
  const items = await page.evaluate(() => {

    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = '//cdn.bootcss.com/jquery/3.2.1/jquery.js'
      document.head.appendChild(script)

      script.onload = () => {
        const $el = $('#mainsrp-itemlist')
        const items = []
        $el.find('.item').each(function () {
          const $this = $(this)
          items.push({
            img: $.trim($this.find('.J_ItemPic').attr('src')),
            title: $.trim($this.find('.J_ClickStat').text()),
            link: $.trim($this.find('.J_ClickStat').attr('href')),
            prize: $.trim($this.find('.price strong').text()),
            shop: $.trim($this.find('.shopname').text()),
            address: $.trim($this.find('.location').text()),
            payed: parseInt($this.find('.deal-cnt').text(), 10)
          })
        })
        resolve(items)
      }
    })
  })
  // 关闭
  browser.close()
  return items
}

const app = express()

app.get('/*', async function(req, res){
  const page = req.originalUrl.substr(1)
  const result = await exec(page)
  res.json(result);
})

app.listen(3000)
