Date.prototype.getWeekDay = function () {
  let weekday = ['Sun', 'Mon', 'Tues', 'Wdn', 'Thr', 'Fri', 'Str']
  return weekday[this.getDay()]
}
const months = [...Array(11).keys()].map((key) =>
  new Date(0, key).toLocaleString('en', { month: 'long' })
)

months.push('December')
const clockApp = document.querySelector('.app')
const hourHand = document.querySelector('.hours')
const minutesHand = document.querySelector('.minutes')
const secondsHand = document.querySelector('.seconds')

setInterval(updateTime, 1000)

function updateTime() {
  const data = new Date()
  const secDeg = (data.getSeconds() / 60) * 360
  const minDeg = (data.getMinutes() / 60) * 360
  const hrDeg = (data.getHours() / 12) * 360
  secondsHand.style.transform = `rotate(${secDeg}deg)`
  minutesHand.style.transform = `rotate(${minDeg}deg)`
  hourHand.style.transform = `rotate(${hrDeg}deg)`

  const timeHr = document.querySelector('.date-timehr')
  const timeMin = document.querySelector('.date-timemin')
  const timeCut = document.querySelector('.date-timecut')
  timeHr.innerHTML = data.getHours()
  timeMin.innerHTML = data.getMinutes()

  if (timeMin.innerHTML < 10) {
    timeMin.innerHTML = 0 + timeMin.innerHTML
  }
  if (timeHr.innerHTML < 10) {
    timeHr.innerHTML = 0 + timeHr.innerHTML
  }

  // if (timeHr.innerHTML >= 12) {
  //   timeCut.innerHTML = 'PM'
  // } else {
  //   timeCut.innerHTML = 'AM'
  // }

  const timeDayNum = document.querySelector('.date-daynum')
  const timeDayWeek = document.querySelector('.date-dayweek')
  timeDayNum.innerHTML = `${data.getDate()} ${months[data.getMonth()]}`
  timeDayWeek.innerHTML = data.getWeekDay()
}
