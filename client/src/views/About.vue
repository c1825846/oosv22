<template>
  <div class="about">
    <div class="container">
      <div class="about__body">
        <div class="about__paragraph">
          <div class="about__title">О нас</div>
          <div class="about__info">
            Наша компания занимается разработкой и продажей комбикормового оборудования. <br>
            Наш ассортимент включает бла-бла. <br>
            Мы работаем уже 15 лет и готовы
            предоставить Вам высококачественные товары напряму с завода-производителя. <br>
            А также оказать консультацию по выбору оборудования и запчастей к нему.
          </div>
        </div>
        <div class="about__paragraph">
          <div class="about__title">Контакты</div>
          <div class="about__info">г.Барнаул, ул. Попоав, 220а</div>
          <div class="about__info">
            <a href="tel:89619888898">
              8-961-988-88-98
            </a>
          </div>
          <div class="about__info">
            <a href="mailto:ooosv22@mail.ru">
              ooosv22@mail.ru
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="about__map">
      <yandex-map
          :coords="markerCoords"
          :zoom="17"
          :behaviors="['multiTouch', 'drag']"
      >
        <ymap-marker
            :coords="markerCoords"
            marker-id="111"
        />
      </yandex-map>
    </div>
  </div>
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  name: "About",
  components: {
    yandexMap, ymapMarker
  },
  data() {
    return {
      markerCoords: [
        53.329004,
        83.658845
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  &__paragraph {
    margin-bottom: 20px;
  }

  &__title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__info {
    line-height: 1.5;
  }
}

.ymap-container {
  height: 420px;
}
</style>