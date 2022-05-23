import Machines_D_7 from '../Machines_D/Machines_D_7'
import Options from '../Options'
import Products_G_0 from './Products_G_0'
import Products_G_1 from './Products_G_1'
import Products_G_2 from './Products_G_2'
import Products_G_3 from './Products_G_3'
import Products_G_4 from './Products_G_4'

export default function Products_G_5 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 15)
  } else {
    machine = output / (60 / 15)
  }
  return {
    name: '宇宙矩阵',
    icon: '/static/img/products/g5.png',
    machine: Machines_D_7(machine.toFixed(1)),
    children: [
      Products_G_0(output, 0, options),
      Products_G_1(output, 0, options),
      Products_G_2(output, 0, options),
      Products_G_3(output, 0, options),
      Products_G_4(output, 0, options)
    ],
    output
  }
}
