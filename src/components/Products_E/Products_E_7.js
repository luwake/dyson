import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_E_5 from './Products_E_5'
import Products_E_3 from './Products_E_3'
import Options from '../Options'

export default function Products_E_7 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 13.3)
      } else {
        machine = output / (60 / 13.3)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 20)
      } else {
        machine = output / (60 / 20)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 26.7)
      } else {
        machine = output / (60 / 26.7)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '湮灭约束球',
    icon: '/static/img/products/e7.png',
    machine: factory,
    children: [
      Products_E_5(output, 0, options),
      Products_E_3(output, 0, options)
    ],
    output
  }
}
