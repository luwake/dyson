import Machines_D_7 from '../Machines_D/Machines_D_7'
import Products_F_3 from '../Products_F/Products_F_3'
import Products_D_4 from '../Products_D/Products_D_4'
import Options from '../Options'

export default function Products_G_3 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 12)
  } else {
    machine = output / (60 / 12)
  }
  return {
    name: '绿矩阵',
    icon: '/static/img/products/g4.png',
    machine: Machines_D_7(machine.toFixed(1)),
    children: [
      Products_F_3(output * 0.5, 0, options),
      Products_D_4(output * 0.5, 0, options)
    ],
    output
  }
}
