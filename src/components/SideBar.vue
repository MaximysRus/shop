<template>
    <div class='SideBar'>
      <form class="ItemForm" @submit.prevent="submit($event)">

          <div class="Field">
            <label for="itemName">Название товара <span></span></label>
            <input type="text" id="itemName" name="name" placeholder="Название товара" v-model="form.name" @blur="onBlur($event)">
            <span class="warningText">{{formErrors.name}}</span>
          </div>


          <label for="itemDescription">Описание товара</label>
          <textarea id="itemDescription" name="Description" placeholder="Описание товара" v-model="form.description"></textarea>

          <div class="Field">
            <label for="itemImgURL">Ссылка на изображение товара <span></span></label>
            <input type="text" id="itemImgURL" name="imgURL" placeholder="Ссылка на изображение товара" v-model="form.imgURL" @blur="onBlur($event)">
            <span class="warningText">{{formErrors.imgURL}}</span>
          </div>

          <div class="Field">
            <label for="itemCost">Цена <span></span></label>
            <input type="number" id="itemCost" name="cost" placeholder="Цена" v-model="form.cost" @blur="onBlur($event)">
            <span class="warningText">{{formErrors.cost}}</span>
          </div>

          <button type="submit" :disabled="checkValid()">Добавить товар</button>

      </form>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      form: {
        name: "",
        description: "",
        imgURL: "",
        cost: "",
      },
      formErrors: {
        name: "",
        description: "",
        imgURL: "",
        cost: "",
      }
    }
  },
  methods: {
    checkValid() {
      return !this.form.name || this.form.cost<0 || !this.form.imgURL|| !this.form.cost
    },
    submit(e) {
      e.preventDefault();
      this.$store.commit('addItem', this.form);
    },
    onBlur(e) {
      const {value, parentNode: parent, name} = e.target;
      if(!value) {
        this.formErrors[name] = "Поле является обязательным";
        !parent.classList.contains("error") && parent.classList.add("error");
        return;
      }
      if(name ===  'cost' && value < 0){
        this.formErrors.cost = "Должно быть положительным";
        !parent.classList.contains("error") && parent.classList.add("error");
        return;
      }
      parent.classList.remove("error");
    }
  }
}
</script>

<style lang="scss">
.Field {
  display: block;
  position: relative;
  .warningText{
    opacity: 0;
    font-size: 8px;
    color: #FF8484;
    position: absolute;
    left: 0px;
    bottom: -14px;
  }
  &.error{
    .warningText{
      opacity: 1;
    }
    input{
      outline: 1px solid #FF8484;
    }
  }
}
.SideBar {
  display: block;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 1px 2px 2px grey;
  background: #FFFEFB;
  height: 440px;
  width: 332px;
  min-width: 332px;
}
.ItemForm {
  label {
    margin-top: 15px;
    margin-bottom: 5px;
    position: relative;
    span {
      display: inline-block;
      margin-bottom: 8px;
      height: 4px;
      width: 4px;
      background: #FF8484;
      border-radius: 50%;
    }
  }
  label, input, textarea, button {
    display: block;
    width: 100%;
  }
  input, textarea {
    outline: none;
    border: none;
    background: #FFFEFB;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    width: calc(100% - 40px);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  textarea {
    resize: none;
    height: 108px;
  }
  button {
    font-weight: 600;
    border-radius: 10px;
    height: 36px;
    outline: none;
    border: none;
    margin-top: 20px;
    background:#7BAE73;
    color: #FFFFFF;
    &:disabled {
      opacity: 1;
      background: #EEEEEE;
      color: #B4B4B4;
    }
  }
}
</style>