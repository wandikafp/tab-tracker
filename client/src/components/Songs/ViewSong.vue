<template>
  <div>
    <v-layout>
      <v-flex xs5>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs7 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from './ViewSongMetadata'
import Tab from './ViewSongTab'
import Lyrics from './ViewSongLyrics'
import YouTube from './ViewSongYoutube'
import SongService from '@/services/SongService'
export default {
  components: {
    SongMetadata,
    Tab,
    Lyrics,
    YouTube
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.get(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
