<template>
    <div  class="main_body">
      <h3 class="calclHeader">Валютный калькулятор</h3>
      <div class="calculator_main">
        <div class="calculator_left">
          <div class="inputs">
            <div class=" inpt_div" >
              <label>Валюта 1 : {{getValute.EUR}}</label>
              <input  v-model="euroPrice" type="text" placeholder="Введите название или код">
            </div>

            <div class=" inpt_div" >
              <label>Валюта 2: {{getValute.USD}}</label>
              <input v-model="usdPrice"  type="text" placeholder="Введите название или код">
            </div>

            <div class=" inpt_div" >
              <label>Количество</label>
              <input v-model="cash"  type="text" placeholder="Введите число">
            </div>
          </div>
          <div class="order">
            <img src="../assets/images/info.svg" style="margin-left: 30px" alt="">
            <div class="order_text"> Итого: </div>
          </div>
        </div>
        <div class="calculator_right">
          <h3 class="right_head">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</h3>
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
            <ul class="right_ul">
              <li class="right_li">incididunt ut labore et dolore magna aliqua</li>
              <li class="right_li">incididunt ut labore et</li>
              <li class="right_li">incididunt ut labore et dolore</li>
              <li class="right_li">labore et dolore</li>
              <li class="right_li">incididunt ut</li>
              <li class="right_li">incididunt ut labore et dolore</li>
              <li class="right_li">incididunt ut labore</li>
            </ul>
            <div class="right_foto">
              <div class="manyfoto" :style="{'background': ` url('` + fotos.one + `')`,'background-position': 'center','background-size': 'cover'}"></div>
              <div class="manyfoto" :style="{'background': ` url('` + fotos.two + `')`,'background-position': 'center','background-size': 'cover'}"></div>
              <div class="manyfoto" :style="{'background': ` url('` + fotos.three + `')`,'background-position': 'center','background-size': 'cover'}"></div>
              <div class="manyfoto" :style="{'background': ` url('` + fotos.four + `')`,'background-position': 'center','background-size': 'cover'}"></div>
            </div>
          </div>
        </div>
        <div class="contacts">
          <div style="display: flex; flex-direction: column; flex-wrap: wrap">
            <div class="help">Нужна помощь?<br>
              Мы поможем! Просто свяжитесь с нами.</div>
            <br>
            <div class="help_text">Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.</div>
          </div>
        </div>
      </div>
        <div>{{getValute}}</div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    data() {
      return{
        fotos: {
          one: require(`../assets/images/img-1.jpg`),
          two: require(`../assets/images/img-2test.png`),
          three: require(`../assets/images/img-3test.png`),
          four: require(`../assets/images/img-4.png`),
        },
        cash: 0
      }
    },

    computed: {
      ...mapGetters(['getValute']),
      euroPrice(){
        return  this.getValute.EUR.Value * this.cash
      },
      usdPrice(){
        return  this.getValute.USD.Value * this.cash
      }
    },
  methods:{
    ...mapActions(['checkToken'])
  },
  created() {
    this.checkToken()

  }
}
</script>

<style scoped >
.help{
  width: 775px;
  height: 67px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  color: #093078;
}
.help_text{
  width: 665px;
  height: 37px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #404456;
  margin-top: 30px;

}
.contacts{
  max-width: 1440px;
  flex-grow: 1;
  background: #EEF5FF;
  border-radius: 16px;
  margin-top: 40px;
  padding: 65px 137px 55px 50px;
}
.order_text{
  margin-left: 35px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: #0F4471
}
.order{
  max-width: 700px;
  min-height: 130px;
  background: #EEF5FF;
  border-radius: 16px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.calculator_left{

}
.inpt_div{
  display: flex;
  flex-direction: column;
}
.inpt_div:not(:first-child) {
  margin-top: 30px;
}
.inpt_div label{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2C3A4B;
  margin-bottom: 15px;
}
.inpt_div input{
  width: 699px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  padding-left: 20px;
  outline:none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #A0A3BD;
}
.inpt_div input:focus{
  border: 1px solid #DFDFDF;
}
.right_foto{
  max-width: 307px;
  max-height: 301px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 17px;
  justify-content: space-around;

}
.calculator_main{
  display: flex;
  max-width: 1440px;
  flex-wrap: wrap;
  justify-content: space-between
}
.calculator_right{
  max-width: 705px !important;

  min-height: 465px;
  background: #EEF5FF;
  border: 1px solid #DFE1F0;
  box-shadow: 0px 0px 20px rgba(239, 239, 239, 0.5);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px 30px;
}
.calclHeader{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 40px;
  color: #0F4471;
  width: 470px;
}
.right_head{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #0F4471;
  text-transform: uppercase;
  max-width: 645px;
}
.right_li{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #404456;
  margin-bottom: 23px;
  max-width: 288px;
}
li {
  list-style-image: url(../assets/images/marker.svg);
}
.right_ul{
  padding-left: 18px;
  max-width: 308px;
}
.manyfoto{
  width: 145px;
  height: 145px;
  background: #EEF5FF

}
</style>
