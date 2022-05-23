import Machines_D_7 from '../Machines_D/Machines_D_7'
import Products_E_3 from '../Products_E/Products_E_3'
import Products_E_2 from '../Products_E/Products_E_2'
import Options from '../Options'

export default function Products_G_3 (output = 60, machine = 0, options) {
  options = options || Options
  if (machine > 0) {
    output = machine * (60 / 10)
  } else {
    machine = output / (60 / 10)
  }
  return {
    name: '紫矩阵',
    icon: '/static/img/products/g3.png',
    machine: Machines_D_7(machine.toFixed(1)),
    children: [
      Products_E_3(output * 2, 0, options),
      Products_E_2(output, 0, options)
    ],
    output
  }
}
