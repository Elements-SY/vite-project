import http from '@/http'

http.get('user').then((res) => {
  console.log(res)
})
