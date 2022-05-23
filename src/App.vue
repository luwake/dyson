<template>
  <div id="app">
    <span class="selection">
      <button @click="SetVisiable()">
        设置产物
      </button>
      <div class="selection-dialog"
           v-if="Visiable==true"
           @click="SetVisiable">
        <table cellspacing="0"
               cellpadding="0">
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('A', i - 1)"
                 v-if="[9,10,11].indexOf(i-1) < 0">
                <img :src="'/static/img/products/a' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('B', i - 1)"
                 v-if="[8].indexOf(i-1) < 0">
                <img :src="'/static/img/products/b' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('C', i - 1)"
                 v-if="[2,5,7].indexOf(i-1) < 0">
                <img :src="'/static/img/products/c' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('D', i - 1)">
                <img :src="'/static/img/products/d' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('E', i - 1)"
                 v-if="[8].indexOf(i-1) < 0">
                <img :src="'/static/img/products/e' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('F', i - 1)"
                 v-if="[1,4,5,8,9,10,11].indexOf(i-1) < 0">
                <img :src="'/static/img/products/f' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
          <tr>
            <td v-for="i in 12"
                :key="i">
              <a @click.stop="CreateProduct('G', i - 1)"
                 v-if="[6,7,8,9,10].indexOf(i-1) < 0">
                <img :src="'/static/img/products/g' + (i - 1) + '.png'" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </span>
    <span>每分钟数量：</span>
    <input type="number"
           v-model.number="DataProduct">
    <span>或者：</span>
    <select v-model.number="DataMachine">
      <option value="0">设备设备数量</option>
      <option value="1">需要1个设备</option>
      <option value="2">需要2个设备</option>
      <option value="3">需要3个设备</option>
      <option value="4">需要4个设备</option>
      <option value="5">需要5个设备</option>
      <option value="6">需要6个设备</option>
      <option value="7">需要7个设备</option>
      <option value="8">需要8个设备</option>
      <option value="9">需要9个设备</option>
      <option value="10">需要10个设备</option>
    </select>
    <select v-model.number="DataOptions.Producer">
      <option value="1">制作台Mk.Ⅰ</option>
      <option value="2">制作台Mk.Ⅱ</option>
      <option value="3">制作台Mk.Ⅲ</option>
    </select>
    <select v-model.number="DataOptions.Furnace">
      <option value="1">电弧熔炉</option>
      <option value="2">位面熔炉</option>
    </select>
    <div v-if="JSON.stringify(DataSource) != '{}'">
      <organization-chart :datasource="DataSource"
                          direction='r2l'>
        <template slot-scope="data">
          <div style="display:none;">
            <a @click="ChangeLine('C_6', 1)">1</a>
            <a @click="ChangeLine('C_6', 2)">2</a>
            <a @click="ChangeLine('C_6', 3)">3</a>
            <a @click="ChangeLine('C_6', 4)">4</a>
          </div>
          <div class="nodedata">
            <div class="nodedata-left">
              <img :src="data.nodeData.icon" />
              <p>x{{ data.nodeData.output }}</p>
            </div>
            <div class="nodedata-right"
                 v-if="data.nodeData.machine">
              <img :src="data.nodeData.machine.icon" />
              <p>x{{ data.nodeData.machine.number }}</p>
            </div>
          </div>
        </template>
      </organization-chart>
    </div>
  </div>
</template>

<script>
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'
import Materials from './components/Materials'
import Products from './components/Products'
import Machines from './components/Machines'

export default {
  name: 'app',
  components: {
    OrganizationChart
  },
  data () {
    return {
      Materials,
      Products,
      Machines,
      Visiable: false,
      DataPos: null,
      DataTarget: null,
      DataProduct: 60,
      DataMachine: 0,
      DataOptions: {
        Furnace: 1,
        Producer: 1,
        Lines: {}
      },
      DataSource: {}
    }
  },
  methods: {
    SetVisiable () {
      this.Visiable = this.Visiable === false
    },
    CreateProduct (x, y) {
      if (x) {
        try {
          const Product = this.Products[x][y]
          if (Product && typeof Product === 'function') {
            this.DataPos = [x, y]
            this.DataTarget = Product
            this.UpdateProduct()
          }
        } catch (err) {
          console.log(err)
        }
      }
      this.SetVisiable()
    },
    ChangeLine (product, line) {
      this.DataOptions.Lines[product] = line
      this.UpdateProduct()
    },
    UpdateProduct () {
      if (this.DataTarget && typeof this.DataTarget === 'function') {
        this.DataSource = this.DataTarget(this.DataProduct, this.DataMachine, this.DataOptions)
      }
    }
  },
  watch: {
    DataProduct () {
      if (this.DataProduct === '') {
        this.DataProduct = 0
      } else {
        this.UpdateProduct()
      }
    },
    DataMachine () {
      this.UpdateProduct()
    },
    DataOptions: {
      handler () {
        this.UpdateProduct()
      },
      deep: true
    }
  },
  created () {

  }
}
</script>

<style>
html,
body {
  margin: 0;
}
#app {
  padding: 10px;
}
.selection {
}
.selection .selection-dialog {
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.selection table {
  background: #2d3241;
  border-collapse: collapse;
  margin-top: 43px;
  margin-left: 10px;
}
.selection table tr td {
  border: 2px solid #364450;
}
.selection table tr td a {
  cursor: pointer;
}
.selection table tr td img {
  width: 60px;
  height: 60px;
}
.orgchart-container {
  height: auto;
  width: auto;
  min-width: 100%;
  border: none;
}
.orgchart {
  background-image: none;
}
.orgchart .node {
  width: auto;
}
.nodedata {
  background-color: #4a5c72;
  padding: 5px;
  display: flex;
}
.nodedata img {
  width: 60px;
  height: 60px;
  display: block;
}
.nodedata p {
  margin: 0;
  line-height: 20px;
  font-size: 14px;
  color: #fff;
}
.nodedata > div {
  width: 50%;
  flex: 1;
}
.nodedata > div.nodedata-left {
  border-right: 1px dashed #999;
}
</style>
