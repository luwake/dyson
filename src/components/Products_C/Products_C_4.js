import Machines_D_0 from '../Machines_D/Machines_D_0'
import Machines_D_1 from '../Machines_D/Machines_D_1'
import Machines_D_2 from '../Machines_D/Machines_D_2'
import Options from '../Options'
import Products_B_4 from '../Products_B/Products_B_4'

export default function Products_C_4 (output = 60, machine = 0, options) {
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
        output = machine * (60 / 1)
      } else {
        machine = output / (60 / 1)
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
    name: '棱镜',
    icon: '/static/img/products/c4.png',
    machine: factory,
    children: [
      Products_B_4(output * 1.5, 0, options)
    ],
    output
  }
}
