import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_E_10 from './Products_E_10'
import Products_E_9 from './Products_E_9'
import Products_E_3 from './Products_E_3'
import Options from '../Options'

export default function Products_E_11 (output = 60, machine = 0, options) {
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
    name: '框架材料',
    icon: '/static/img/products/e11.png',
    machine: factory,
    children: [
      Products_E_10(output * 3, 0, options),
      Products_E_9(output * 3, 0, options),
      Products_E_3(output * 3, 0, options)
    ],
    output
  }
}
