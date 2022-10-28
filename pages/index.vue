<template>
    <div  class="main_body">
      <h3 class="calclHeader">Валютный калькулятор</h3>
      <div class="calculator_main">
        <div class="calculator_left">
          <div class="inputs">
            <div class=" inpt_div" >
              <label>Валюта 1 : {{getValute.EUR?.Name}}</label>
              <input  v-model="euroPrice" type="text" placeholder="Введите название или код">
            </div>

            <div class=" inpt_div" >
              <label>Валюта 2: {{getValute.USD?.Name}}</label>
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
          <div class="right_head">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:</div>
          <div style="" class="right_container">
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
          <div style="display: flex; flex-direction: column" class="contacts_text_block">
            <div class="help">Нужна помощь?<br>
              Мы поможем! Просто свяжитесь с нами.</div>

            <div class="help_text">Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.</div>
          </div>
          <div class="contacts_info">
            <a class="links_to telefon" href="tel:8 (800) 888-90-28" style="margin-bottom: 35px">8 (800) 888-90-28 </a>
            ИЛИ
            <a class=" mail" href="mailto:info@example.ru " style="margin-top: 20px">info@example.ru</a>
          </div>
        </div>

      </div>

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
        return  this.getValute.EUR?.Value * this.cash
      },
      usdPrice(){
        return  this.getValute.USD?.Value * this.cash
      }
    },
  methods:{
    ...mapActions(['getData'])
  },
  created() {
    this.getData()

  }
}
</script>

<style scoped >
@media (max-width: 1280px){
  .telefon{

  }
  .contacts_info{
    width: 345px!important;
    font-weight: 400!important;
    font-size: 18px!important;
    line-height: 21px!important;
  }
  .links_to{
    font-weight: 500!important;
    font-size: 40px!important;
    line-height: 46px!important;
  }
  .mail{
    font-weight: 400!important;
    font-size: 24px!important;
    line-height: 28px!important;
  }
  .calclHeader{
    font-weight: 500!important;
    font-size: 26px!important;
    line-height: 30px!important;
  }
  .calculator_main{
    max-width: 1280px!important;
  }
  .inpt_div label{
    font-weight: 500!important;
    font-size: 14px!important;
    line-height: 16px!important;
  }
  .inpt_div input{
    width: 561px!important;
    height: 50px!important;
  }
  .calculator_right{
    width: 570px!important;
    height: 375px!important;
  }
  .right_head{
    font-weight: 500!important;
    font-size: 15px!important;
    line-height: 20px!important;
  }
  .right_li{
    font-weight: 400!important;
    font-size: 14px!important;
    line-height: 18px!important;
  }
  .right_foto{
    width: 245px!important;
    height: 240px!important;
  }
  .manyfoto{
    width: 116px!important;
    height: 116px!important;
  }
  .right_container{
    flex-wrap: nowrap!important;
  }
  .contacts{
    width: 1170px!important;
    height: 211px!important;
    padding: 40px 100px 35px 30px!important;
  }
  .mail{
    font-weight: 400 !important;
    font-size: 24px !important;
    line-height: 28px !important;
    letter-spacing: 1px !important;
  }
  .help{
    font-weight: 500!important;
    font-size: 29px!important;
    line-height: 36px!important;
    width: 608px!important;
    height: 52px!important;
  }
  .help_text{
    width: 467px!important;
    height: 25px!important;
    font-weight: 400!important;
    font-size: 13px!important;
    line-height: 18px!important;
  }
}
@media (max-width: 768px){
  .order_text{
    font-weight: 700!important;
    font-size: 16px!important;
    line-height: 140%!important;
    margin-left: 20px!important;
  }
  .contacts_info{
    font-weight: 400!important;
    font-size: 12px!important;
    line-height: 14px!important;
  }
  .telefon{
    font-weight: 500!important;
    font-size: 24px!important;
    line-height: 28px!important;
    margin-bottom: 15px!important;
  }
  .mail{
    font-weight: 400 !important;
    font-size: 20px !important;
    line-height: 23px !important;
    letter-spacing: 1px !important;
    margin-top: 5px!important;
  }
  .order{
    width: 336px!important;
    min-height: 108px!important;
  }
  .help{
    width: 352px!important;
    font-weight: 500!important;
    font-size: 18px!important;
    line-height: 24px!important;
  }
  .help_text{
    font-weight: 400!important;
    font-size: 10px!important;
    line-height: 12px!important;
    width: 352px!important;
    margin-top: 5px!important;
  }
  .contacts{
    width: 707px!important;
    height: 127px!important;
    box-sizing: border-box;
    padding: 33px 68px 18px 19px!important;
  }
  .calclHeader{
    font-weight: 500!important;
    font-size: 26px!important;
    line-height: 30px!important;
  }
  .calculator_main{
    max-width: 768px!important;
  }
  .inpt_div label{
    font-weight: 500!important;
    font-size: 14px!important;
    line-height: 16px!important;
  }
  .inpt_div input{
    width: 337px!important;
    height: 46px!important;
    box-sizing: border-box;
  }
  .calculator_right{
    width: 344px!important;
    height: 354px!important;
  }
  .right_head{
    font-weight: 500!important;
    font-size: 13px!important;
    line-height: 18px!important;
  }
  .right_li{
    font-weight: 400!important;
    font-size: 13px!important;
    line-height: 15px!important;
  }
  .right_foto{
    width: 86px!important;
    height: 260px!important;
  }
  .manyfoto{
    width: 86px!important;
    height: 58px!important;
  }
  .right_container{
    flex-wrap: nowrap!important;

  }
  .contacts_text_block{
    width: 384px!important;
    flex-wrap: nowrap!important;
  }
}
@media (max-width: 360px){
  .order_text{
    font-weight: 700!important;
    font-size: 16px!important;
    line-height: 140%!important;
    margin-left: 20px!important;
  }
  .contacts_info{
    font-weight: 400!important;
    font-size: 12px!important;
    line-height: 14px!important;
  }
  .telefon{
    font-weight: 500!important;
    font-size: 26px!important;
    line-height: 30px!important;
    margin-top: 30px!important;
    margin-bottom: 15px!important;
  }
  .mail{
    font-weight: 400!important;
    font-size: 18px!important;
    line-height: 21px!important;
    letter-spacing: 1px !important;
    margin-top: 5px!important;
  }
  .order{
    width: 336px!important;
    min-height: 82px!important;
  }
  .help{
    width: 329px!important;
    font-weight: 700!important;
    font-size: 16px!important;
    line-height: 24px!important;
    text-align: center;
  }
  .help_text{
    font-weight: 400!important;
    font-size: 12px!important;
    line-height: 14px!important;
    width: 329px!important;
    margin-top: 5px!important;
    text-align: center;
  }
  .contacts{
    width: 360px!important;
    height: 237px!important;
    box-sizing: border-box;
    padding: 26px 15px 20px 15px!important;
    margin-top: 20px!important;
    flex-wrap: wrap;
    margin-left: -15px;
    border-radius: 0px!important;
  }
  .calclHeader{
    font-weight: 700!important;
    font-size: 20px!important;
    line-height: 140%!important;
    width: 315px!important;
  }
  .calculator_main{
    max-width: 330px!important;
  }
  .inpt_div label{
    font-weight: 500!important;
    font-size: 14px!important;
    line-height: 16px!important;
  }
  .inpt_div input{
    width: 330px!important;
    height: 46px!important;
    box-sizing: border-box;
  }
  .calculator_right{
    width: 330px!important;
    height: 387px!important;
    padding: 25px 15px 15px 15px !important;
    margin-top: 15px!important;
  }
  .right_head{
    font-weight: 500!important;
    font-size: 13px!important;
    line-height: 18px!important;
  }
  .right_li{
    font-weight: 400!important;
    font-size: 14px!important;
    line-height: 18px!important;
  }
  .right_foto{
    width: 300px!important;
    height: 48px!important;
  }
  .manyfoto{
    width: 69px!important;
    height: 46px!important;
  }
  .right_container{
    flex-wrap: wrap!important;
  }
  .contacts_text_block{
    width: 384px!important;
    flex-wrap: nowrap!important;
  }
}
.mail{
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #093078;
  font-family: 'Roboto';
  font-style: normal;
}
.contacts_text_block{
  width: 770px;
}
.contacts_info{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #404456;
}
.links_to{
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 46px;
  color: #093078;
}
.right_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.help{
  width: 775px;
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
  display: flex;
  box-sizing: border-box;
  max-width: 1440px;
  height: 260px;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
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
