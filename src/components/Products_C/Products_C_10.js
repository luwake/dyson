import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Options from '../Options'
import Products_B_3 from '../Products_B/Products_B_3'
import Products_D_1 from '../Products_D/Products_D_1'

export default function Products_C_10 (output = 60, machine = 0, options) {
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
    name: '加力推进器',
    icon: '/static/img/products/c10.png',
    machine: factory,
    children: [
      Products_B_3(output * 5, 0, options),
      Products_D_1(output * 5, 0, options)
    ],
    output
  }
}
