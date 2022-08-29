import { $fetch } from 'ohmyfetch'

export const sendButtonClick = () =>
  $fetch('https://foxy.s.talkiiing.ru/api/metrics/buttonClickEvent', {
    method: 'POST',
    body: { delay: performance.now() },
  })
