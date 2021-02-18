<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button @click="increment">Up</ion-button>

      <ion-list>
        <ion-list-header>
          Recent Conversations {{ value }}
        </ion-list-header>
        <ion-item v-for="user in data" :key="user.id">
          <ion-label>{{ user.name }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore} from 'vuex';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonListHeader, IonButton } from '@ionic/vue';
import { defineComponent, onMounted, ref, computed } from 'vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonLabel, IonListHeader, IonButton },
  setup() {
    const router = useRouter();
    const data = ref<any>(null)
    onMounted(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => (data.value = json))
    });

    const store = useStore();

    const increment = () => {
      return store.dispatch('incrementCount');
    }

    return {
      router,
      data,
      value: computed(() => store.state.count),
      increment: () => increment(),
    };
  },
}
</script>
