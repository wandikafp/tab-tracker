import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  get (songId) {
    return Api().get(`song/${songId}`)
  },
  put (songId) {
    return Api().put(`song/${songId}`)
  },
  create (song) {
    return Api().post('song', song)
  }
}
