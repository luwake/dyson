import Machines_D_7 from '../Machines_D/Machines_D_7'
import Options from '../Options'
import Products_A_5 from '../Products_A/Products_A_5'
import Products_C_6 from '../Products_C/Products_C_6'

export default function Products_G_1 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 6)
  } else {
    machine = output / (60 / 6)
  }
  return {
    name: '红矩阵',
    icon: '/static/img/products/g1.png',
    machine: Machines_D_7(machine.toFixed(1)),
    children: [
      Products_A_5(output * 2, 0, options),
      Products_C_6(output * 2, 0, options)
    ],
    output
  }
}
