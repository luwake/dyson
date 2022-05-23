import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_E_11 from '../Products_E/Products_E_11'
import Products_B_10 from '../Products_B/Products_B_10'
import Products_F_3 from '../Products_F/Products_F_3'
import Options from '../Options'

export default function Products_D_11 (output = 60, machine = 0, options) {
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
    name: '小型运载火箭',
    icon: '/static/img/products/d11.png',
    machine: factory,
    children: [
      Products_E_11(output * 2, 0, options),
      Products_B_10(output * 4, 0, options),
      Products_F_3(output * 2, 0, options)
    ],
    output
  }
}
