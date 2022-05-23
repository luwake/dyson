import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_C_1 from '../Products_C/Products_C_1'
import Products_B_1 from '../Products_B/Products_B_1'
import Options from '../Options'

export default function Products_D_1 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 1.3)
      } else {
        machine = output / (60 / 1.3)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 2)
      } else {
        machine = output / (60 / 2)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 2.7)
      } else {
        machine = output / (60 / 2.7)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '电磁涡轮',
    icon: '/static/img/products/d1.png',
    machine: factory,
    children: [
      Products_C_1(output * 2, 0, options),
      Products_B_1(output * 2, 0, options)
    ],
    output
  }
}
