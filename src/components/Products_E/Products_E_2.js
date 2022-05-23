import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_D_8 from '../Products_D/Products_D_8'
import Products_B_2 from '../Products_B/Products_B_2'
import Products_A_7 from '../Products_A/Products_A_7'
import Options from '../Options'

export default function Products_E_2 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 5.3)
      } else {
        machine = output / (60 / 5.3)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 8)
      } else {
        machine = output / (60 / 8)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 10.7)
      } else {
        machine = output / (60 / 10.7)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '粒子带宽',
    icon: '/static/img/products/e2.png',
    machine: factory,
    children: [
      Products_D_8(output * 2, 0, options),
      Products_B_2(output * 2, 0, options),
      Products_A_7(output, 0, options)
    ],
    output
  }
}
