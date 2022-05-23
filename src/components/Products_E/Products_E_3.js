import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Options from '../Options'
import Products_D_3 from '../Products_D/Products_D_3'
import Products_F_2 from '../Products_F/Products_F_2'

export default function Products_E_3 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 2)
      } else {
        machine = output / (60 / 2)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 3)
      } else {
        machine = output / (60 / 3)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 4)
      } else {
        machine = output / (60 / 4)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '处理器',
    icon: '/static/img/products/e3.png',
    machine: factory,
    children: [
      Products_D_3(output * 2, 0, options),
      Products_F_2(output * 2, 0, options)
    ],
    output
  }
}
