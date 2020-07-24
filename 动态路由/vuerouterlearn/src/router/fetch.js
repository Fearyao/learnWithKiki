const fetchRouter = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{
        path: '/fetch',
        name: 'fetch',
        component: 'fetch'
      }])
    }, 100)
  })
}

export default fetchRouter
