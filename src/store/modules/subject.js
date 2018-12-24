// import { resolve } from 'url';
import jsonp from 'jsonp'
const state = {
  subject: {},
  classify: '',
  questions: [{
    title: '大家为什么对国产片这么苛刻？',
    comments: '35回答'
  },
  {
    title: '有没有人喜欢凯凯王版的汤川学？',
    comments: '19回答'
  },
  {
    title: '真的有饭店的打包袋长的和优衣库一样吗？',
    comments: '11回答'
  },
  {
    title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
    comments: '7回答'
  }
  ]
}

const mutations = {
  init (state, playload) {
    state.subject = playload.res
    state.classify = playload.classify
  }
}

const getters = {
  // Filtering subjectMeta
  subjectMeta: state => {
    if (state.classify === 'movie') {
      return state.subject.year + '/' +
                state.subject.genres.join(' / ') + ' / ' +
                state.subject.casts.map(item => item.name).join(' / ') + ' / ' +
                state.subject.directors.map(item => item.name).join(' / ') + ' / ' +
                state.subject.countries.join(' / ')
    } else if (state.classify === 'book') {
      return state.subject.author.join(' / ') +
                state.subject.translator.join(' / ') + ' / ' +
                state.subject.publisher + ' / ' +
                state.subject.binding + ' / ' + state.subject.pages + ' / ' +
                state.subject.price + ' / ' + state.subject.pubdate
    }
  }
}
const actions = {
  getSubject ({ commit }, playload) {
    return new Promise((resolve, reject) => {
      var option = {}
      switch (playload.classify) {
        case 'movie':
          // request.get('https://api.douban.com/v2/' + playload.classify +
          // '/subject/' + playload.id).use(jsonp).end((err, res) => {
          jsonp('https://api.douban.com/v2/' + playload.classify + '/subject/' + playload.id, option, (err, res) => {
            if (err) {
              reject(err)
            }
            commit({
              type: 'init',
              classify: playload.classify,
              res: res
            })
            resolve(res)
          })
      }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
