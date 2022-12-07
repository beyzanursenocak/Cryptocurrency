<template>
  <div class="row">
    <div class="col">
      <h1 align="center">Cryptocurrency Prices</h1>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="table-responsive-sm">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col" v-for="titles in title" :key="titles">
                {{ titles }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row" v-for="(coin, index) in filterCoin" :key="coin.id">
              <td class="text-muted">
                {{ index + 1 }}
              </td>
              <td>
                  <img :src="coin.image" style="width: 30px" />
                  <span>
                    {{ coin.name }}
                  </span>
              </td>
              <td>${{ coin.current_price }}</td>
              <td :class="[coin.price_change_percentage_1h_in_currency < 0 ? danger : success]">
                {{ coin.price_change_percentage_1h_in_currency.toFixed(2) }}%
              </td>
              <td :class="[coin.price_change_percentage_24h < 0 ? danger : success]">
                {{ coin.price_change_percentage_24h.toFixed(2) }}%
              </td>
              <td :class="[coin.price_change_percentage_7d_in_currency < 0 ? danger : success]">
                {{ coin.price_change_percentage_7d_in_currency.toFixed(2) }}%
              </td>
              <td>${{ coin.total_volume.toLocaleString() }}</td>
              <td>${{ coin.market_cap.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "CoinsComp",
  data() {
    return {
      coin: [],
      filterCoin: [],
      title: ["", "Coin", "Price", "1h", "24h", "7d", "24h Volume", "Market Cap"],
      success: "text-success",
      danger: "text-danger",
    };
  },
  mounted() {
    this.getCoin();
  },
  methods: {
    async getCoin() {
      const response = await api.get(
        "/markets?vs_currency=usd&ids=bitcoin%2Cterra-luna%2Cethereum%2Ccosmos%2Cdacxi&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      );
      this.filterCoin = response.data;
      this.coin = response.data;
    },
    updateCoin() {
      setTimeout(() => {
        this.getCoin();
      }, 10000);
    },
  },
  watch: {
    coin() {
      this.updateCoin();
    },
  },
};
</script>
