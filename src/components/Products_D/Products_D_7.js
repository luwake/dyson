import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_E_4 from '../Products_E/Products_E_4'
import Products_C_3 from '../Products_C/Products_C_3'
import Options from '../Options'

export default function Products_D_7 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 8)
      } else {
        machine = output / (60 / 8)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 12)
      } else {
        machine = output / (60 / 12)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 16)
      } else {
        machine = output / (60 / 16)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '位面过滤器',
    icon: '/static/img/products/d7.png',
    machine: factory,
    children: [
      Products_E_4(output, 0, options),
      Products_C_3(output * 2, 0, options)
    ],
    output
  }
}
