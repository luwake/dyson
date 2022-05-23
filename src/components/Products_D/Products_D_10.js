import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_B_3 from '../Products_B/Products_B_3'
import Products_E_3 from '../Products_E/Products_E_3'
import Products_C_10 from '../Products_C/Products_C_10'
import Options from '../Options'

export default function Products_D_10 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 4)
      } else {
        machine = output / (60 / 4)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 6)
      } else {
        machine = output / (60 / 6)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 8)
      } else {
        machine = output / (60 / 8)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '星际物流运输机',
    icon: '/static/img/products/d10.png',
    machine: factory,
    children: [
      Products_B_3(output * 20, 0, options),
      Products_E_3(output * 10, 0, options),
      Products_C_10(output * 2, 0, options)
    ],
    output
  }
}
