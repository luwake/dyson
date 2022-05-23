import Machines_D_2 from '../Machines_D/Machines_D_2'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_0 from '../Machines_D/Machines_D_0'
import Products_B_3 from './Products_B_3'
import Products_D_6 from '../Products_D/Products_D_6'
import Products_E_1 from '../Products_E/Products_E_1'
import Options from '../Options'

export default function Products_B_10 (output = 60, machine = 0, options) {
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
    name: '氘核燃料棒',
    icon: '/static/img/products/b10.png',
    machine: factory,
    children: [
      Products_B_3(output * 0.5, 0, options),
      Products_D_6(output * 10, 0, options),
      Products_E_1(output * 0.5, 0, options)
    ],
    output
  }
}
