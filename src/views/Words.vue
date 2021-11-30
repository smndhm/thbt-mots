<template>
  <template v-if="!started">
    <main>
      <h2>Voici les mots que tu vas devoir écrire&nbsp;:</h2>
      <ul class="weeks">
        <li v-for="list in wordsList" :key="list.id">
          <h3>{{ list.title }}</h3>
          <ul class="words">
            <li v-for="(word, index) in list.words" :key="index">
              {{ word }}
            </li>
          </ul>
        </li>
      </ul>
    </main>
    <footer>
      <button @click="start">Commencer</button>
    </footer>
  </template>

  <template v-else-if="started && !ended">
    <main class="justify-center">
      <p class="word" v-show="displayedWord">
        {{ word }}
      </p>
    </main>
    <footer class="button-center">
      <span>
        <button @click="audio.play()">Réécouter</button>
      </span>
      <span>
        <button @click="next" v-if="displayedWord">Suivant</button>
        <button @click="displayWord" :disabled="waitForNext" v-else>
          Voir
        </button>
      </span>
    </footer>
  </template>

  <template v-else-if="ended">
    <main>
      <h2>Voici les mots que tu viens d'écrire&nbsp;:</h2>
      <ul class="words">
        <li v-for="(word, index) in this.words" :key="index">{{ word }}</li>
      </ul>
    </main>
    <footer>
      <button @click="backHome">Retour</button>
    </footer>
  </template>
</template>

<script>
import wordsList from '../../words';
import { paramCase } from 'param-case';

export default {
  name: 'Words',
  data() {
    return {
      wordsList,
      words: [],
      index: 0,
      displayedWord: false,
      audio: null,
      ready: false,
      started: false,
      ended: false,
      waitForNext: true,
    };
  },
  computed: {
    word() {
      return this.words[this.index];
    },
    file() {
      return paramCase(this.word);
    },
    isLast() {
      return this.index === this.words.length - 1;
    },
  },
  methods: {
    loadAudio() {
      this.waitForNext = true;
      this.audio = new Audio(`audio/${this.file}.mp3`);
      this.audio.addEventListener('canplaythrough', () => {
        this.audio.play();
      });
      this.audio.addEventListener('ended', () => {
        this.waitForNext = false;
      });
    },
    start() {
      this.started = true;
      this.loadAudio();
    },
    next() {
      if (this.isLast) {
        this.ended = true;
      } else {
        this.index++;
        this.displayedWord = false;
        this.loadAudio();
      }
    },
    displayWord() {
      this.displayedWord = true;
    },
    backHome() {
      this.$router.push({ name: 'Home' });
    },
  },
  created() {
    // Getting lists, making sure it's an Array
    const lists = Array.isArray(this.$route.query.lists)
      ? this.$route.query.lists
      : [this.$route.query.lists];
    // Filter lists
    this.wordsList = this.wordsList.filter((list) => {
      return lists.includes(`${list.id}`);
    });
    // Get words
    this.words = this.wordsList.map((list) => list.words).flat();
    // Shuffle words
    for (let i = this.words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.words[i], this.words[j]] = [this.words[j], this.words[i]];
    }
  },
  beforeUpdate() {
    // this.loadAudio();
  },
};
</script>

<style lang="scss" scoped>
ul.words {
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  li {
    display: inline-block;
    background: var(--color-1);
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid var(--color-4);
  }
}

li ul.words {
  padding: 0 0 1rem;
}

p.word {
  font-size: 6rem;
}
footer.button-center {
  display: flex;
  & > span {
    width: 50%;
    &:first-child {
      padding-right: 0.5rem;
      text-align: right;
    }
    &:nth-child(2) {
      padding-left: 0.5rem;
      text-align: left;
    }
  }
}
</style>
