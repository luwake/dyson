import Machines_D_7 from '../Machines_D/Machines_D_7'
import Options from '../Options'
import Products_B_5 from '../Products_B/Products_B_5'
import Products_C_8 from '../Products_C/Products_C_8'

export default function Products_G_2 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 8)
  } else {
    machine = output / (60 / 8)
  }
  return {
    name: '黄矩阵',
    icon: '/static/img/products/g2.png',
    machine: Machines_D_7(machine.toFixed(1)),
    children: [
      Products_B_5(output, 0, options),
      Products_C_8(output, 0, options)
    ],
    output
  }
}
