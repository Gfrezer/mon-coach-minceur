 <template>
  <div class="modal" v-show="value">
    <p class="my-4">Hello from modal!</p>
  </div>
</template>

<script>
export default {
  name: "modal",

  props: {
    value: {
      required: true
    }
  }
};
</script>

<style>
.modal {
  position: relative;
  border: solid 2px rgb(150, 22, 22);
  display: block;
}
</style>