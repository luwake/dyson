import Machines_D_7 from '../Machines_D/Machines_D_7'
import Options from '../Options'
import Products_B_1 from '../Products_B/Products_B_1'
import Products_D_3 from '../Products_D/Products_D_3'

export default function Products_G_0 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 3)
  } else {
    machine = output / (60 / 3)
  }
  return {
    name: '蓝矩阵',
    icon: '/static/img/products/g0.png',
    machine: Machines_D_7(machine.toFixed(1)),
    children: [
      Products_B_1(output, 0, options),
      Products_D_3(output, 0, options)
    ],
    output
  }
}
