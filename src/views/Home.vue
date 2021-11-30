<template>
  <main>
    <fieldset>
      <legend>
        Sélectionne la ou les liste(s) que tu souhaites réviser&nbsp;:
      </legend>
      <ul>
        <li v-for="list in wordsList" :key="list.id">
          <input
            type="checkbox"
            v-model="checkedLists"
            :value="list.id"
            :id="list.id"
            name="list"
          />
          <label :for="list.id"> {{ list.title }}</label>
        </li>
      </ul>
    </fieldset>
  </main>
  <footer>
    <button :disabled="!checkedLists.length" @click="goToWords">Suivant</button>
  </footer>
</template>

<script>
import wordsList from '../../words';

export default {
  name: 'Home',
  data() {
    return {
      wordsList,
      checkedLists: [],
    };
  },
  methods: {
    goToWords() {
      this.$router.push({ name: 'Words', query: { lists: this.checkedLists } });
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    & + label {
      // Display
      position: relative;
      display: flex;
      justify-content: center;
      height: 4rem;
      box-sizing: border-box;
      // Decoration
      border-radius: 1em;
      background-color: var(--color-1);
      border: 0.2rem solid var(--color-2);
      // Font
      font-size: 2rem;
      line-height: 3.6rem;

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: var(--color-2);
      }

      &:active {
        background-color: var(--color-2);
        border-color: var(--color-3);
        &:before {
          border: 0.2rem solid var(--color-3);
        }
      }

      &:before {
        // Display
        content: '';
        position: absolute;
        display: block;
        width: 2rem;
        height: 2rem;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        // Decoration
        background: white;
        border: 0.2rem solid var(--color-2);
        border-radius: 50%;
      }
    }

    &:focus + label {
      background-color: var(--color-2);
    }

    &:checked {
      & + label {
        background-color: var(--color-2);
        border-color: var(--color-3);
        &:before {
          border: 0.2rem solid var(--color-3);
        }
        &:after {
          content: '';
          position: absolute;
          left: 1.6rem;
          top: 50%;
          margin-top: -0.6rem;
          height: 0.6rem;
          width: 0.8rem;
          border-left: 0.3rem solid;
          border-bottom: 0.3rem solid;
          border-color: var(--color-3);
          transform: rotate(-45deg);
        }
      }

      &:focus,
      &:hover {
        & + label {
          background-color: var(--color-3);
        }
      }
    }
  }
}
</style>
