import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Products_C_0 from '../Products_C/Products_C_0'
import Products_A_4 from '../Products_A/Products_A_4'
import Options from '../Options'

export default function Products_G_11 (output = 60, machine = 0, options) {
  options = options || Options
  let factory
  switch (options.Producer) {
    case 3:
      if (machine > 0) {
        output = machine * (60 / 0.7)
      } else {
        machine = output / (60 / 0.7)
      }
      factory = Machines_D_2(machine.toFixed(1))
      break
    case 2:
      if (machine > 0) {
        output = machine * (60 / 1.0)
      } else {
        machine = output / (60 / 1.0)
      }
      factory = Machines_D_1(machine.toFixed(1))
      break
    case 1:
    default:
      if (machine > 0) {
        output = machine * (60 / 1.3)
      } else {
        machine = output / (60 / 1.3)
      }
      factory = Machines_D_0(machine.toFixed(1))
  }
  return {
    name: '地基',
    icon: '/static/img/products/g11.png',
    machine: factory,
    children: [
      Products_C_0(output, 0, options),
      Products_A_4(output * 3, 0, options)
    ],
    output
  }
}
