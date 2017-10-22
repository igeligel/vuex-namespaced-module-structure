<template>
  <div>
    <h1>Home</h1>
    <ChatList :messages="messages" />
    <ProductList :products="products" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatList from '@/components/ChatList';
import ProductList from '@/components/ProductList';

export default {
  name: 'HomeView',
  components: {
    ChatList,
    ProductList,
  },
  computed: {
    ...mapGetters({
      messages: 'chat/messages',
      products: 'products/products',
    }),
  },
  mounted() {
    this.$store.dispatch('chat/getMessages');
    this.$store.dispatch('products/getProducts');
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: 100;
  font-size: 3em;
  letter-spacing: 0.05em;
  color: #4b4b4b;
}
</style>
